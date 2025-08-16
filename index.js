require('./settings');
const fs = require('fs');
const os = require('os');
const pino = require('pino');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const { Boom } = require('@hapi/boom');
const qrcode = require('qrcode-terminal');
const NodeCache = require('node-cache');
const { toBuffer, toDataURL } = require('qrcode');
const { exec, spawn, execSync } = require('child_process');
const { parsePhoneNumber } = require('awesome-phonenumber');
const { default: WAConnection, useMultiFileAuthState, Browsers, DisconnectReason, makeInMemoryStore, makeCacheableSignalKeyStore, fetchLatestBaileysVersion, proto, jidNormalizedUser, getAggregateVotesInPollMessage } = require('baileys');

const { dataBase } = require('./src/database');
const { app, server, PORT } = require('./src/server');
const { GroupParticipantsUpdate, MessagesUpsert, Solving } = require('./src/message');
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, assertInstalled, sleep } = require('./lib/function');

const print = (label, value) => console.log(`${chalk.green.bold('║')} ${chalk.cyan.bold(label.padEnd(16))}${chalk.yellow.bold(':')} ${value}`);
const pairingCode = process.argv.includes('--qr') ? false : process.argv.includes('--pairing-code') || global.pairing_code;

// إعداد readline بشكل آمن
const createReadlineInterface = () => {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
};

let rl = createReadlineInterface();

// دالة question محسنة
const question = (text) => {
  return new Promise((resolve) => {
    if (rl.closed) {
      rl = createReadlineInterface();
    }
    
    rl.question(text, (answer) => {
      resolve(answer);
    });
  });
};

let pairingStarted = false;
let phoneNumber;

// الرقم الافتراضي
const DEFAULT_PHONE_NUMBER = '967737088693';

const userInfoSyt = () => {
  try {
    return os.userInfo().username
  } catch (e) {
    return process.env.USER || process.env.USERNAME || 'unknown';
  }
}

global.fetchApi = async (path = '/', query = {}, options) => {
  const urlnya = (options?.name || options ? ((options?.name || options) in global.APIs ? global.APIs[(options?.name || options)] : (options?.name || options)) : global.APIs['hitori'] ? global.APIs['hitori'] : (options?.name || options)) + path + (query ? '?' + decodeURIComponent(new URLSearchParams(Object.entries({ ...query }))) : '')
  const { data } = await axios.get(urlnya, { ...((options?.name || options) ? {} : { headers: { 'accept': 'application/json', 'x-api-key': global.APIKeys[global.APIs['hitori']]}})})
  return data
}

const storeDB = dataBase(global.tempatStore);
const database = dataBase(global.tempatDB);
const msgRetryCounterCache = new NodeCache();

assertInstalled(process.platform === 'win32' ? 'where ffmpeg' : 'command -v ffmpeg', 'FFmpeg', 0);
console.log(chalk.greenBright('✅ تم تلبية جميع التبعيات الخارجية'));
console.log(chalk.green.bold(`╔═════[${`${chalk.cyan(userInfoSyt())}@${chalk.cyan(os.hostname())}`}]═════`));
print('OS', `${os.platform()} ${os.release()} ${os.arch()}`);
print('Uptime', `${Math.floor(os.uptime() / 3600)} h ${Math.floor((os.uptime() % 3600) / 60)} m`);
print('Shell', process.env.SHELL || process.env.COMSPEC || 'unknown');
print('CPU', os.cpus()[0]?.model.trim() || 'unknown');
print('Memory', `${(os.freemem()/1024/1024).toFixed(0)} MiB / ${(os.totalmem()/1024/1024).toFixed(0)} MiB`);
print('Script version', `v${require('./package.json').version}`);
print('Node.js', process.version);
print('Baileys', `v${require('./package.json').dependencies.baileys}`);
print('Date & Time', new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta', hour12: false }));
console.log(chalk.green.bold('╚' + ('═'.repeat(30))));
server.listen(PORT, () => {
  console.log('App listened on port', PORT);
});

async function startNazeBot() {
  const { state, saveCreds } = await useMultiFileAuthState('nazedev');
  const { version, isLatest } = await fetchLatestBaileysVersion();
  const level = pino({ level: 'silent' });
  
  try {
    const loadData = await database.read()
    const storeLoadData = await storeDB.read()
    if (!loadData || Object.keys(loadData).length === 0) {
      global.db = {
        hit: {},
        set: {},
        cmd: {},
        store: {},
        users: {},
        game: {},
        groups: {},
        database: {},
        premium: [],
        sewa: [],
        ...(loadData || {}),
      }
      await database.write(global.db)
    } else {
      global.db = loadData
    }
    if (!storeLoadData || Object.keys(storeLoadData).length === 0) {
      global.store = {
        contacts: {},
        presences: {},
        messages: {},
        groupMetadata: {},
        ...(storeLoadData || {}),
      }
      await storeDB.write(global.store)
    } else {
      global.store = storeLoadData
    }
    
    setInterval(async () => {
      if (global.db) await database.write(global.db)
      if (global.store) await storeDB.write(global.store)
    }, 30 * 1000)
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
  
  store.loadMessage = function (remoteJid, id) {
    const messages = store.messages?.[remoteJid]?.array;
    if (!messages) return null;
    return messages.find(msg => msg?.key?.id === id) || null;
  }
  
  const getMessage = async (key) => {
    if (store) {
      const msg = await store.loadMessage(key.remoteJid, key.id);
      return msg?.message || ''
    }
    return {
      conversation: 'مرحباً أنا TWENTY بوت'
    }
  }
  
  const naze = WAConnection({
    logger: level,
    getMessage,
    syncFullHistory: true,
    maxMsgRetryCount: 15,
    msgRetryCounterCache,
    retryRequestDelayMs: 10,
    defaultQueryTimeoutMs: 0,
    connectTimeoutMs: 60000,
    browser: Browsers.ubuntu('Chrome'),
    generateHighQualityLinkPreview: true,
    shouldSyncHistoryMessage: msg => {
      console.log(`\x1b[32mMemuat Chat [${msg.progress || 0}%]\x1b[39m`);
      return !!msg.syncType;
    },
    transactionOpts: {
      maxCommitRetries: 10,
      delayBetweenTriesMs: 10,
    },
    appStateMacVerification: {
      patch: true,
      snapshot: true,
    },
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, level),
    },
  })
  
  if (pairingCode && !phoneNumber && !naze.authState.creds.registered) {
    async function getPhoneNumber() {
      try {
        // استخدام الرقم الافتراضي إذا لم يتم تحديد رقم آخر
        phoneNumber = global.number_bot ? global.number_bot : 
                     process.env.BOT_NUMBER ? process.env.BOT_NUMBER : 
                     DEFAULT_PHONE_NUMBER;
        
        console.log(chalk.green(`Using phone number: +${phoneNumber}`));
        
        phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
        
        if (!parsePhoneNumber('+' + phoneNumber).valid && phoneNumber.length < 6) {
          console.log(chalk.bgBlack(chalk.redBright('Start with your Country WhatsApp code') + chalk.whiteBright(',') + chalk.greenBright(' Example : 62xxx')));
          return await getPhoneNumber();
        }
        return phoneNumber;
      } catch (error) {
        console.error('Error in getPhoneNumber:', error);
        throw error;
      }
    }
    
    (async () => {
      try {
        await getPhoneNumber();
        await exec('rm -rf ./twenty/*');
        console.log('Waiting for pairing code...\n' + chalk.blueBright('Estimated time: around 2 ~ 5 minutes'));
      } catch (error) {
        console.error('Error during phone number input:', error);
        process.exit(1);
      }
    })()
  }
  
  await Solving(naze, store)
  
  naze.ev.on('creds.update', saveCreds)
  
  naze.ev.on('connection.update', async (update) => {
    const { qr, connection, lastDisconnect, isNewLogin, receivedPendingNotifications } = update
    if (!naze.authState.creds.registered) console.log('Connection: ', connection || false);
    if ((connection === 'connecting' || !!qr) && pairingCode && phoneNumber && !naze.authState.creds.registered && !pairingStarted) {
      setTimeout(async () => {
        pairingStarted = true;
        console.log('Requesting Pairing Code...')
        let code = await naze.requestPairingCode(phoneNumber);
        console.log(chalk.blue('Your Pairing Code :'), chalk.green(code), '\n', chalk.yellow('Expires in 15 seconds'));
      }, 3000)
    }
    if (connection === 'close') {
      const reason = new Boom(lastDisconnect?.error)?.output.statusCode
      if (reason === DisconnectReason.connectionLost) {
        console.log('تم فقدان الاتصال بالخادم، جاري محاولة إعادة الاتصال...');
        startNazeBot()
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log('تم إغلاق الاتصال، جاري محاولة إعادة الاتصال...');
        startNazeBot()
      } else if (reason === DisconnectReason.restartRequired) {
        console.log('مطلوب إعادة التشغيل...');
        startNazeBot()
      } else if (reason === DisconnectReason.timedOut) {
        console.log('انتهت مهلة الاتصال، جاري محاولة إعادة الاتصال...');
        startNazeBot()
      } else if (reason === DisconnectReason.badSession) {
        console.log('Delete Session and Scan again...');
        startNazeBot()
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log('Close current Session first...');
      } else if (reason === DisconnectReason.loggedOut) {
        console.log('Scan again and Run...');
        exec('rm -rf ./twenty/*')
        process.exit(1)
      } else if (reason === DisconnectReason.forbidden) {
        console.log('Connection Failure, Scan again and Run...');
        exec('rm -rf ./twenty/*')
        process.exit(1)
      } else if (reason === DisconnectReason.multideviceMismatch) {
        console.log('Scan again...');
        exec('rm -rf ./twenty/*')
        process.exit(0)
      } else {
        naze.end(`Unknown DisconnectReason : ${reason}|${connection}`)
      }
    }
    if (connection == 'open') {
      console.log('متصل بـ : ' + JSON.stringify(naze.user, null, 2));
      let botNumber = await naze.decodeJid(naze.user.id);
      if (global.db?.set[botNumber] && !global.db?.set[botNumber]?.join) {
        if (my.ch.length > 0 && my.ch.includes('@newsletter')) {
          if (my.ch) await naze.newsletterMsg(my.ch, { type: 'follow' }).catch(e => {})
          db.set[botNumber].join = true
        }
      }
    }
    if (qr) {
      if (!pairingCode) qrcode.generate(qr, { small: true })
      app.use('/qr', async (req, res) => {
        res.setHeader('content-type', 'image/png')
        res.end(await toBuffer(qr))
      });
    }
    if (isNewLogin) console.log(chalk.green('تم اكتشاف تسجيل دخول جهاز جديد...'))
    if (receivedPendingNotifications == 'true') {
      console.log('الرجاء الانتظار لمدة دقيقة واحدة تقريبًا...')
      naze.ev.flush()
    }
  });
  
  naze.ev.on('contacts.update', (update) => {
    for (let contact of update) {
      let trueJid;
      if (!trueJid) continue;
      if (contact.id.endsWith('@lid')) {
        trueJid = naze.findJidByLid(contact.id, store);
      } else {
        trueJid = jidNormalizedUser(contact.id);
      }
      store.contacts[trueJid] = {
        ...store.contacts[trueJid],
        id: trueJid,
        name: contact.notify
      }
      if (contact.id.endsWith('@lid')) {
        store.contacts[trueJid].lid = jidNormalizedUser(contact.id);
      }
    }
  });
  
  naze.ev.on('call', async (call) => {
    let botNumber = await naze.decodeJid(naze.user.id);
    if (global.db?.set[botNumber]?.anticall) {
      for (let id of call) {
        if (id.status === 'offer') {
          let msg = await naze.sendMessage(id.from, { text: `حاليًا، لا يمكننا قبول المكالمات ${id.isVideo ? 'Video' : 'Suara'}.\nJika @${id.from.split('@')[0]} بحاجة إلى مساعدة، يرجى الاتصال بالمالك:)`, mentions: [id.from]});
          await naze.sendContact(id.from, global.owner, msg);
          await naze.rejectCall(id.id, id.from)
        }
      }
    }
  });
  
  naze.ev.on('messages.upsert', async (message) => {
    await MessagesUpsert(naze, message, store);
  });
  
  naze.ev.on('group-participants.update', async (update) => {
    await GroupParticipantsUpdate(naze, update, store);
  });
  
  naze.ev.on('groups.update', (update) => {
    for (const n of update) {
      if (store.groupMetadata[n.id]) {
        Object.assign(store.groupMetadata[n.id], n);
      } else store.groupMetadata[n.id] = n;
    }
  });
  
  naze.ev.on('presence.update', ({ id, presences: update }) => {
    store.presences[id] = store.presences?.[id] || {};
    Object.assign(store.presences[id], update);
  });
  
  setInterval(async () => {
    if (naze?.user?.id) await naze.sendPresenceUpdate('available', naze.decodeJid(naze.user.id)).catch(e => {})
  }, 10 * 60 * 1000);

  return naze
}

startNazeBot()

// Process Exit
const cleanup = async (signal) => {
  console.log(`Received ${signal}. Menyimpan database...`)
  try {
    if (global.db) await database.write(global.db)
    if (global.store) await storeDB.write(global.store)
    if (!rl.closed) rl.close()
    server.close(() => {
      console.log('Server closed. Exiting...')
      process.exit(0)
    })
  } catch (error) {
    console.error('Cleanup error:', error)
    process.exit(1)
  }
}

process.on('SIGINT', () => cleanup('SIGINT'))
process.on('SIGTERM', () => cleanup('SIGTERM'))
process.on('exit', () => cleanup('exit'))

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log(`Address localhost:${PORT} in use. Please retry when the port is available!`);
    server.close();
  } else console.error('Server error:', error);
});

setInterval(() => {}, 1000 * 60 * 10);
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
});


