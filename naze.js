process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

/*
    * Create By Naze
    * Follow https://github.com/nazedev
    * Whatsapp : https://whatsapp.com/channel/0029VaWOkNm7DAWtkvkJBK43
*/

require('./settings');
const fs = require('fs');
const os = require('os');
const qs = require('qs');
const util = require('util');
const jimp = require('jimp');
const path = require('path');
const https = require('https');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const cron = require('node-cron');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const FileType = require('file-type');
const { Chess } = require('chess.js');
const google = require('googlethis');
const similarity = require('similarity');
const PDFDocument = require('pdfkit');
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const didYouMean = require('didyoumean');
const { performance } = require('perf_hooks');
const moment = require('moment-timezone');
const translate = require('translate-google-api');
const { Akinator, AkinatorAnswer } = require('aki-api');
const PhoneNum = require('awesome-phonenumber');
const { exec, spawn, execSync } = require('child_process');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('baileys');

const menfesTimeouts = new Map();
const TicTacToe = require('./lib/tictactoe');
const { antiSpam } = require('./src/antispam');
const templateMenu = require('./lib/template_menu');
const { TelegraPh, UguuSe } = require('./lib/uploader');
const { toAudio, toPTT, toVideo } = require('./lib/converter');
const { GroupUpdate, LoadDataBase } = require('./src/message');
const { JadiBot, StopJadiBot, ListJadiBot } = require('./src/jadibot');
const { imageToWebp, videoToWebp, gifToWebp, writeExif } = require('./lib/exif');
const { cmdAdd, cmdDel, cmdAddHit, addExpired, getPosition, getExpired, getStatus, checkStatus, getAllExpired, checkExpired } = require('./src/database');
const { rdGame, iGame, tGame, gameSlot, gameCasinoSolo, gameSamgongSolo, gameMerampok, gameBegal, daily, buy, setLimit, addLimit, addMoney, setMoney, transfer, Blackjack, SnakeLadder } = require('./lib/game');
const { pinterest, wallpaper, remini, wikimedia, hitamkan, yanzGpt, mediafireDl, ringtone, styletext, instagramDl, tiktokDl, facebookDl, instaStalk, telegramStalk, tiktokStalk, genshinStalk, instaStory, bk9Ai, spotifyDl, ytMp4, ytMp3, NvlGroup, quotedLyo, youSearch, gptLogic, savetube, simi, geminiAi } = require('./lib/screaper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, errorCache, normalize, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, convertTimestampToDate, getAllHTML, tarBackup } = require('./lib/function');

module.exports = naze = async (naze, m, msg, store) => {
	// وظيفة إرسال رسالة إلى القناة
async function sendToChannel() {
    try {
        const channelJid = global.my.ch || '120xxxxxxxxxxx@newsletter'; // ← ضع هنا الـ JID إذا لم تكن محفوظة

        await conn.sendMessage(channelJid, {
            text: '📢 تم إرسال هذه الرسالة من Hitori Bot بنجاح!'
        });

        console.log(chalk.green(`✅ تم إرسال الرسالة إلى القناة: ${channelJid}`));
    } catch (err) {
        console.log(chalk.red('❌ فشل إرسال الرسالة إلى القناة!'));
        console.error(err);
    }
}
    const botNumber = naze.decodeJid(naze.user.id);
    const ownerNumber = db?.set?.[botNumber]?.owner?.map(x => x.id) || owner;
    
    try {
        
        await LoadDataBase(naze, m);
        await GroupUpdate(naze, m, store);
        
        const body = ((m.type === 'conversation') ? m.message.conversation :
        (m.type == 'imageMessage') ? m.message.imageMessage.caption :
        (m.type == 'videoMessage') ? m.message.videoMessage.caption :
        (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text :
        (m.type == 'reactionMessage') ? m.message.reactionMessage.text :
        (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId :
        (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
        (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId :
        (m.type == 'interactiveResponseMessage'  && m.quoted) ? (m.message.interactiveResponseMessage?.nativeFlowResponseMessage ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : '') :
        (m.type == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || '') :
        (m.type == 'editedMessage') ? (m.message.editedMessage?.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text || m.message.editedMessage?.message?.protocolMessage?.editedMessage?.conversation || '') :
        (m.type == 'protocolMessage') ? (m.message.protocolMessage?.editedMessage?.extendedTextMessage?.text || m.message.protocolMessage?.editedMessage?.conversation || m.message.protocolMessage?.editedMessage?.imageMessage?.caption || m.message.protocolMessage?.editedMessage?.videoMessage?.caption || '') : '') || '';
        
        const budy = (typeof m.text == 'string' ? m.text : '')
        const isCreator = isOwner = [botNumber, ...ownerNumber].filter(v => typeof v === 'string').map(v => v.replace(/[^0-9]/g, '')).includes(m.sender.split('@')[0])
        const cases = db.cases ? db.cases : (db.cases = [...fs.readFileSync('./naze.js', 'utf-8').matchAll(/case\s+['"]([^'"]+)['"]/g)].map(match => match[1]));
        const prefix = isCreator ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body?.startsWith(a)) || '') : db.set[botNumber].multiprefix ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body?.startsWith(a)) || '¿') : listprefix.find(a => body?.startsWith(a)) || '¿'
        const isCmd = body.startsWith(prefix)
        const args = body.trim().split(/ +/).slice(1)
        const quoted = m.quoted ? m.quoted : m
        const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
        const text = q = args.join(' ')
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const author = db?.set?.[botNumber]?.author || 'Nazedev';
        const packname = db?.set?.[botNumber]?.packname || 'Bot WhatsApp';
        const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
        const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
        const jam = moment.tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
        const ucapanWaktu = jam < '05:00:00' ? 'صباح الخير 🌉' : jam < '11:00:00' ? 'صباح الخير 🌄' : jam < '15:00:00' ? 'مساء الخير 🏙' : jam < '18:00:00' ? 'مساء الخير 🌅' : jam < '19:00:00' ? 'مساء الخير 🌃' : jam < '23:59:00' ? 'ليلة سعيدة 🌌' : 'ليلة سعيدة 🌌';
        const almost = 0.72
        const time = Date.now()
        const time_now = new Date()
        const time_end = 60000 - (time_now.getSeconds() * 1000 + time_now.getMilliseconds());
        const readmore = String.fromCharCode(8206).repeat(999)
        const setv = pickRandom(listv)
        
        // Read Database
        const sewa = db.sewa
        const premium = db.premium
        const set = db.set[botNumber]
        
        // Database Game
        let suit = db.game.suit
        let chess = db.game.chess
        let chat_ai = db.game.chat_ai
        let menfes = db.game.menfes
        let tekateki = db.game.tekateki
        let akinator = db.game.akinator
        let tictactoe = db.game.tictactoe
        let tebaklirik = db.game.tebaklirik
        let kuismath = db.game.kuismath
        let blackjack = db.game.blackjack
        let tebaklagu = db.game.tebaklagu
        let tebakkata = db.game.tebakkata
        let family100 = db.game.family100
        let susunkata = db.game.susunkata
        let tebakbom = db.game.tebakbom
        let ulartangga = db.game.ulartangga
        let tebakkimia = db.game.tebakkimia
        let caklontong = db.game.caklontong
        let tebakangka = db.game.tebakangka
        let tebaknegara = db.game.tebaknegara
        let tebakgambar = db.game.tebakgambar
        let tebakbendera = db.game.tebakbendera
        
        const isVip = db.users[m.sender] ? db.users[m.sender].vip : false
        const isBan = db.users[m.sender] ? db.users[m.sender].ban : false
        const isLimit = db.users[m.sender] ? (db.users[m.sender].limit > 0) : false
        const isPremium = isCreator || checkStatus(m.sender, premium) || false
        const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false
        
        // Fake
        const fkontak = {
            key: {
                remoteJid: '0@s.whatsapp.net',
                participant: '0@s.whatsapp.net',
                fromMe: false,
                id: 'Naze'
            },
            message: {
                contactMessage: {
                    displayName: (m.pushName || author),
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName || author},;;;\nFN:${m.pushName || author}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    sendEphemeral: true
                }
            }
        }
        
        // Reset Limit
        cron.schedule('00 00 * * *', async () => {
            cmdDel(db.hit);
            console.log('تم إعادة تعيين حد المستخدمين')
            let user = Object.keys(db.users)
            for (let jid of user) {
                const limitUser = db.users[jid].vip ? limit.vip : checkStatus(jid, premium) ? limit.premium : limit.free
                if (db.users[jid].limit < limitUser) db.users[jid].limit = limitUser
            }
            if (set?.autobackup) {
                let datanya = './database/' + tempatDB;
                if (tempatDB.startsWith('mongodb')) {
                    datanya = './database/backup_database.json';
                    fs.writeFileSync(datanya, JSON.stringify(global.db, null, 2), 'utf-8');
                }
                let tglnya = new Date().toISOString().replace(/[:.]/g, '-');
                for (let o of ownerNumber) {
                    try {
                        await naze.sendMessage(o, { document: fs.readFileSync(datanya), mimetype: 'application/json', fileName: tglnya + '_database.json' })
                        console.log(`[نسخ احتياطي تلقائي] تم إرسال النسخ الاحتياطي إلى ${o}`);
                    } catch (e) {
                        console.error(`[نسخ احتياطي تلقائي] فشل في إرسال النسخ الاحتياطي إلى ${o}:`, error);
                    }
                }
            }
        }, {
            scheduled: true,
            timezone: 'Asia/Jakarta'
        });
        
        // Auto Set Bio
        if (set.autobio) {
            if (new Date() * 1 - set.status > 60000) {
                await naze.updateProfileStatus(`${naze.user.name} | 🎯 وقت التشغيل : ${runtime(process.uptime())}`).catch(e => {})
                set.status = new Date() * 1
            }
        }
        
        // Set Mode
        if (!isCreator) {
            if ((set.grouponly === set.privateonly)) {
                if (!naze.public && !m.key.fromMe) return
            } else if (set.grouponly) {
                if (!m.isGroup) return
            } else if (set.privateonly) {
                if (m.isGroup) return
            }
        }
        
        // Group Settings
        if (m.isGroup) {
            // Mute
            if (db.groups[m.chat].mute && !isCreator) {
                return
            }
            
            // Anti Hidetag
            if (!m.key.fromMe && m.mentionedJid?.length === m.metadata.participanis?.length && db.groups[m.chat].antihidetag && !isCreator && m.isBotAdmin && !m.isAdmin) {
                await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
                await m.reply('*مكافحة الإشارات المخفية مفعلة الآن❗*')
            }
            
            // Anti Tag Sw
            if (!m.key.fromMe && db.groups[m.chat].antitagsw && !isCreator && m.isBotAdmin && !m.isAdmin) {
                if (m.type === 'groupStatusMentionMessage' || m.message?.groupStatusMentionMessage || m.message?.protocolMessage?.type === 25 || Object.keys(m.message).length === 1 && Object.keys(m.message)[0] === 'messageContextInfo') {
                    if (!db.groups[m.chat].tagsw[m.sender]) {
                        db.groups[m.chat].tagsw[m.sender] = 1
                        await m.reply(`تم الكشف عن أن هذه المجموعة تم وضع علامة عليها في حالة واتساب\n@${m.sender.split('@')[0]}, يرجى عدم وضع علامة على المجموعة في حالة واتساب\nتحذير ${db.groups[m.chat].tagsw[m.sender]}/5, سيتم الطرد في أي وقت❗`)
                    } else if (db.groups[m.chat].tagsw[m.sender] >= 5) {
                        await naze.groupParticipantsUpdate(m.chat, [m.sender], 'remove').catch((err) => m.reply('فشل!'))
                        await m.reply(`تم طرد @${m.sender.split("@")[0]} من المجموعة\nلأنه قام بوضع علامة على المجموعة في حالة واتساب 5 مرات`)
                        delete db.groups[m.chat].tagsw[m.sender]
                    } else {
                        db.groups[m.chat].tagsw[m.sender] += 1
                        await m.reply(`تم الكشف عن أن هذه المجموعة تم وضع علامة عليها في حالة واتساب\n@${m.sender.split('@')[0]}, يرجى عدم وضع علامة على المجموعة في حالة واتساب\nتحذير ${db.groups[m.chat].tagsw[m.sender]}/5, سيتم الطرد في أي وقت❗`)
                    }
                }
            }
            
            // Anti Toxic
            if (!m.key.fromMe && db.groups[m.chat].antitoxic && !isCreator && m.isBotAdmin && !m.isAdmin) {
                if (budy.toLowerCase().split(/\s+/).some(word => badWords.includes(word))) {
                    await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
                    await naze.relayMessage(m.chat, { extendedTextMessage: { text: `تم اكتشاف أن @${m.sender.split('@')[0]} استخدم كلمات غير لائقة\nيرجى استخدام لغة مهذبة.`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*مكافحة الكلمات السيئة❗*'}, ...m.key }}}, {})
                }
            }
            
            // Anti Delete
            if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete && !isCreator && m.isBotAdmin && !m.isAdmin) {
                const mess = msg.message.protocolMessage
                if (store?.messages?.[m.chat]?.array) {
                    const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
                    if (!chats?.msg) return
                    chats.msg.contextInfo = { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*مكافحة الحذف❗*'}, ...chats.key }
                    const pesan = chats.type === 'conversation' ? { extendedTextMessage: { text: chats.msg, contextInfo: { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*مكافحة الحذف❗*'}, ...chats.key }}} : { [chats.type]: chats.msg }
                    await naze.relayMessage(m.chat, pesan, {})
                }
            }
            
            // Anti Link Group
            if (db.groups[m.chat].antilink && !isCreator && m.isBotAdmin && !m.isAdmin) {
                if (budy.match('chat.whatsapp.com/')) {
                    await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
                    await naze.relayMessage(m.chat, { extendedTextMessage: { text: `تم اكتشاف أن @${m.sender.split('@')[0]} أرسل رابط مجموعة\nعذراً، يجب حذف الرابط.`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*مكافحة الروابط❗*'}, ...m.key }}}, {})
                }
            }
            
            // Anti Virtex Group
            if (db.groups[m.chat].antivirtex && !isCreator && m.isBotAdmin && !m.isAdmin) {
                if (budy.length > 4000) {
                    await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
                    await naze.relayMessage(m.chat, { extendedTextMessage: { text: `تم اكتشاف أن @${m.sender.split('@')[0]} أرسل محتوى ضار..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*مكافحة المحتوى الضار❗*'}, ...m.key }}}, {})
                    await naze.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                }
                if (m.msg?.nativeFlowMessage?.messageParamsJson?.length > 3500) {
                    await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
                    await naze.relayMessage(m.chat, { extendedTextMessage: { text: `تم اكتشاف أن @${m.sender.split('@')[0]} أرسل رسالة ضارة.`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*مكافحة الرسائل الضارة❗*'}, ...m.key }}}, {})
                    await naze.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                }
            }
            
        }
        
        // Auto Read
        if (m.message && m.key.remoteJid !== 'status@broadcast') {
            if ((set.autoread && naze.public) || isCreator) {
                naze.readMessages([m.key]);
                console.log(chalk.black(chalk.bgWhite('[ رسالة ]:'), chalk.bgGreen(new Date), chalk.bgHex('#00EAD3')(budy || m.type), chalk.bgHex('#AF26EB')(m.key.id) + '\n' + chalk.bgCyanBright('[ من ] :'), chalk.bgYellow(m.pushName || (isCreator ? 'البوت' : 'مجهول')), chalk.bgHex('#FF449F')(m.sender), chalk.bgHex('#FF5700')(m.isGroup ? m.metadata.subject : m.chat.endsWith('@newsletter') ? 'نشرة' : 'محادثة خاصة'), chalk.bgBlue('(' + m.chat + ')')));
            }
        }
        
        // Filter Bot & Ban
        if (m.isBot) return
        if (db.users[m.sender]?.ban && !isCreator) return
        
        // Mengetik & Anti Spam & Hit
        if (naze.public && isCmd) {
            if (set.autotyping) {
                await naze.sendPresenceUpdate('composing', m.chat)
            }
            if (cases.includes(command)) {
                cmdAdd(db.hit);
                cmdAddHit(db.hit, command);
            }
            if (set.antispam && antiSpam.isFiltered(m.sender)) {
                console.log(chalk.bgRed('[ سبام ] : '), chalk.black(chalk.bgHex('#1CFFF7')(`من -> ${m.sender}`), chalk.bgHex('#E015FF')(` في ${m.isGroup ? m.chat : 'محادثة خاصة'}`)))
                return m.reply('يرجى الانتظار 5 ثوانٍ بين كل أمر');
            }
        }
        
        if (isCmd && !isCreator) antiSpam.addFilter(m.sender)
        
        // Cmd Media
        let fileSha256;
        if (m.isMedia && m.msg.fileSha256 && db.cmd && (m.msg.fileSha256.toString('base64') in db.cmd)) {
            let hash = db.cmd[m.msg.fileSha256.toString('base64')]
            fileSha256 = hash.text
        }
        
        // Salam
        if (/^a(s|ss)alamu('|)alaikum(| )(wr|)( |)(wb|)$/.test(budy?.toLowerCase())) {
            const jwb_salam = ['وعليكم السلام','وعليكم السلام ورحمة الله وبركاته','وعليكم السلام ورحمة الله وبركاته']
            m.reply(pickRandom(jwb_salam))
        }
        
        // Waktu Sholat
        const jadwalSholat = {
            الفجر: '04:30',
            الظهر: '12:06',
            العصر: '15:21',
            المغرب: '18:08',
            العشاء: '19:00'
        }
        if (!this.intervalSholat) this.intervalSholat = null;
        if (!this.waktusholat) this.waktusholat = {};
        if (this.intervalSholat) clearInterval(this.intervalSholat); 
        setTimeout(() => {
            this.intervalSholat = setInterval(async() => {
                const sekarang = moment.tz('Asia/Jakarta');
                const jamSholat = sekarang.format('HH:mm');
                const hariIni = sekarang.format('YYYY-MM-DD');
                const detik = sekarang.format('ss');
                if (detik !== '00') return;
                for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
                    if (jamSholat === waktu && this.waktusholat[sholat] !== hariIni) {
                        this.waktusholat[sholat] = hariIni
                        for (const [idnya, settings] of Object.entries(db.groups)) {
                            if (settings.waktusholat) {
                                await naze.sendMessage(idnya, { text: `حان وقت *${sholat}*, توضأ وأسرع للصلاة🙂.\n\n*${waktu.slice(0, 5)}*\n_للمنطقة جاكرتا والمناطق المحيطة._` }, { ephemeralExpiration: m.expiration || store?.messages[idnya]?.array?.slice(-1)[0]?.metadata?.ephemeralDuration || 0 }).catch(e => {})
                            }
                        }
                    }
                }
            }, 60000)
        }, time_end);
        
        // Cek Expired
        checkExpired(premium);
        checkExpired(sewa, naze);
        
        // TicTacToe
        let room = Object.values(tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let now = Date.now();
            if (now - (room.lastMove || now) > 5 * 60 * 1000) {
                m.reply('تم إلغاء لعبة إكس-أو لعدم وجود نشاط لمدة 5 دقائق.');
                delete tictactoe[room.id];
                return;
            }
            room.lastMove = now;
            let ok, isWin = false, isTie = false, isSurrender = false;
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return true
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                m.reply({'-3': 'انتهت اللعبة','-2': 'غير صالح','-1': 'موضع غير صالح',0: 'موضع غير صالح'}[ok])
                return true
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            if (!(room.game instanceof TicTacToe)) {
                room.game = Object.assign(new TicTacToe(room.game.playerX, room.game.playerO), room.game)
            }
            let arr = room.game.render().map(v => ({X: '❌',O: '⭕',1: '1️⃣',2: '2️⃣',3: '3️⃣',4: '4️⃣',5: '5️⃣',6: '6️⃣',7: '7️⃣',8: '8️⃣',9: '9️⃣'}[v]))
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            if (isWin) {
                db.users[m.sender].limit += 3
                db.users[m.sender].money += 3000
            }
                        let str = `معرف الغرفة: ${room.id}\n\n${arr.slice(0, 3).join('')}
            ${arr.slice(3, 6).join('')}
            ${arr.slice(6).join('')}
            \n${isWin ? `@${winner.split('@')[0]} فاز!` : isTie ? `انتهت اللعبة` : `دور ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nاكتب *استسلام* للاستسلام والاعتراف بالخسارة`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
            room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await naze.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m })
            await naze.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
            if (isTie || isWin) delete tictactoe[room.id]
        }
        
        // Suit PvP
        let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
        if (roof) {
            let now = Date.now();
            let win = '', tie = false;
            if (now - (roof.lastMove || now) > 3 * 60 * 1000) {
                m.reply('تم إلغاء لعبة حجر ورقة مقص لعدم وجود نشاط لمدة 3 دقائق.');
                delete suit[roof.id];
                return;
            }
            roof.lastMove = now;
            if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
                if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
                    m.reply(`@${roof.p2.split`@`[0]} رفض اللعبة,\nتم إلغاء اللعبة`)
                    delete suit[roof.id]
                    return !0
                }
                roof.status = 'play';
                roof.asal = m.chat;
                m.reply(`تم إرسال اللعبة إلى الدردشة\n\n@${roof.p.split`@`[0]} و @${roof.p2.split`@`[0]}\n\nيرجى اختيار اللعبة في الدردشة الخاصة بكل منكم عبر الرابط https://wa.me/${botNumber.split`@`[0]}`)
                if (!roof.pilih) naze.sendMessage(roof.p, { text: `الرجاء اختيار \n\nحجر🗿\nورقة📄\nمقص✂️` }, { quoted: m })
                if (!roof.pilih2) naze.sendMessage(roof.p2, { text: `الرجاء اختيار \n\nحجر🗿\nورقة📄\nمقص✂️` }, { quoted: m })
            }
            let jwb = m.sender == roof.p, jwb2 = m.sender == roof.p2;
            let g = /gunting/i, b = /batu/i, k = /kertas/i, reg = /^(gunting|batu|kertas)/i;
            
            if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
                roof.pilih = reg.exec(m.text.toLowerCase())[0];
                roof.text = m.text;
                m.reply(`لقد اخترت ${m.text} ${!roof.pilih2 ? `\n\nبانتظار اختيار الخصم` : ''}`);
                if (!roof.pilih2) naze.sendMessage(roof.p2, { text: '_الخصم اختار بالفعل_\nالآن دورك' })
            }
            if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
                roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
                roof.text2 = m.text
                m.reply(`لقد اخترت ${m.text} ${!roof.pilih ? `\n\nبانتظار اختيار الخصم` : ''}`)
                if (!roof.pilih) naze.sendMessage(roof.p, { text: '_الخصم اختار بالفعل_\nالآن دورك' })
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true
                db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3
                db.users[roof.p == win ? roof.p : roof.p2].money += tie ? 0 : 3000
                naze.sendMessage(roof.asal, { text: `_*نتيجة اللعبة*_${tie ? '\nتعادل' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` فاز \n` : ` خسر \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` فاز \n` : ` خسر \n`}\n\nالفائز يحصل على\n*الجائزة:* مال (3000) وحد (3)`.trim(), mentions: [roof.p, roof.p2] }, { quoted: m })
                delete suit[roof.id]
            }
        }
        
        // Tebak Bomb
        let pilih = '🌀', bomb = '💣';
        if (m.sender in tebakbom) {
            if (!/^[1-9]|10$/i.test(body) && !isCmd && !isCreator) return !0;
            if (tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
            if (tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
                tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
                tebakbom[m.sender].pick++;
                m.react('❌')
                tebakbom[m.sender].bomb--;
                tebakbom[m.sender].nyawa.pop();
                let brd = tebakbom[m.sender].board;
                if (tebakbom[m.sender].nyawa.length < 1) {
                    await m.reply(`*انتهت اللعبة*\nلقد أصبت بقنبلة\n\n ${brd.join('')}\n\n*المختار :* ${tebakbom[m.sender].pick}\n_تم خصم حد واحد_`);
                    m.react('😂')
                    delete tebakbom[m.sender];
                } else m.reply(`*اختر رقمًا*\n\nلقد أصبت بقنبلة\n ${brd.join('')}\n\nالمختار: ${tebakbom[m.sender].pick}\nالأرواح المتبقية: ${tebakbom[m.sender].nyawa}`);
                return !0;
            }
            if (tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
                tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
                tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
                tebakbom[m.sender].pick++;
                tebakbom[m.sender].lolos--;
                let brd = tebakbom[m.sender].board;
                if (tebakbom[m.sender].lolos < 1) {
                    db.users[m.sender].money += 6000
                    await m.reply(`*أنت رائع!*\n\n${brd.join('')}\n\n*المختار :* ${tebakbom[m.sender].pick}\n*عدد المحاولات المتبقية :* ${tebakbom[m.sender].nyawa}\n*قنابل :* ${tebakbom[m.sender].bomb}\nمكافأة مالية 💰 *+6000*`);
                    delete tebakbom[m.sender];
                } else m.reply(`*اختر رقمًا*\n\n${brd.join('')}\n\nالمختار : ${tebakbom[m.sender].pick}\nالأرواح المتبقية : ${tebakbom[m.sender].nyawa}\nالقنابل : ${tebakbom[m.sender].bomb}`)
            }
        }
        
        // Akinator
        if (m.sender in akinator) {
            if (m.quoted && akinator[m.sender].key == m.quoted.id) {
                if (budy == '5') {
                    if (akinator[m.sender]?.progress?.toFixed(0) == 0) {
                        delete akinator[m.sender]
                        return m.reply(`🎮 انتهت لعبة أكيناتور!\nبالتقدم *0*`)
                    }
                    akinator[m.sender].isWin = false
                    await akinator[m.sender].cancelAnswer()
                    let { key } = await m.reply(`🎮 العودة في لعبة أكيناتور :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - نعم\n- 1 - لا\n- 2 - لا أعلم\n- 3 - ربما\n- 4 - ربما لا\n- 5 - ${akinator[m.sender]?.progress?.toFixed(0) == 0 ? 'إنهاء' : 'عودة'}`)
                    akinator[m.sender].key = key.id
                } else if (akinator[m.sender].isWin && ['benar', 'ya'].includes(budy.toLowerCase())) {
                    m.react('🎊')
                    delete akinator[m.sender]
                } else {
                    if (!isNaN(budy) && budy.match(/^[0-4]$/) && budy) {
                        if (akinator[m.sender].isWin) {
                            let { key } = await m.reply({ image: { url: akinator[m.sender].sugestion_photo }, caption: `🎮 إجابة أكيناتور :\n\n@${m.sender.split('@')[0]}\nهو *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - عودة\n- *نعم* (للخروج من الجلسة)`, contextInfo: { mentionedJid: [m.sender] }});
                            akinator[m.sender].key = key.id
                        } else {
                            await akinator[m.sender].answer(budy)
                            if (akinator[m.sender].isWin) {
                                let { key } = await m.reply({ image: { url: akinator[m.sender].sugestion_photo }, caption: `🎮 إجابة أكيناتور :\n\n@${m.sender.split('@')[0]}\nهو *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - عودة\n- *نعم* (للخروج من الجلسة)`, contextInfo: { mentionedJid: [m.sender] }});
                                akinator[m.sender].key = key.id
                            } else {
                                let { key } = await m.reply(`🎮 لعبة أكيناتور :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - نعم\n- 1 - لا\n- 2 - لا أعلم\n- 3 - ربما\n- 4 - ربما لا\n- 5 - عودة`)
                                akinator[m.sender].key = key.id
                            }
                        }
                    }
                }
            }
        }
        
        // Game
        const games = { tebaklirik, tekateki, tebaklagu, tebakkata, kuismath, susunkata, tebakkimia, caklontong, tebakangka, tebaknegara, tebakgambar, tebakbendera }
        for (let gameName in games) {
            let game = games[gameName];
            let id = iGame(game, m.chat);
            if ((!isCmd || isCreator) && m.quoted && id == m.quoted.id) {
                if (game[m.chat + id]?.jawaban) {
                    if (gameName == 'kuismath') {
                        jawaban = game[m.chat + id].jawaban
                        const difficultyMap = { 'noob': 1, 'easy': 1.5, 'medium': 2.5, 'hard': 4, 'extreme': 5, 'impossible': 6, 'impossible2': 7 };
                        let randMoney = difficultyMap[kuismath[m.chat + id].mode]
                        if (!isNaN(budy)) {
                            if (budy.toLowerCase() == jawaban) {
                                db.users[m.sender].money += randMoney * 1000
                                await m.reply(`إجابة صحيحة 🎉\nجائزة مالية 💰 *+${randMoney * 1000}*`)
                                delete kuismath[m.chat + id]
                            } else m.reply('*إجابة خاطئة!*')
                        }
                    } else {
                        jawaban = game[m.chat + id].jawaban
                        let jawabBenar = /tekateki|tebaklirik|tebaklagu|tebakkata|tebaknegara|tebakbendera/.test(gameName) ? (similarity(budy.toLowerCase(), jawaban) >= almost) : (budy.toLowerCase() == jawaban)
                        let bonus = gameName == 'caklontong' ? 9999 : gameName == 'tebaklirik' ? 4299 : gameName == 'susunkata' ? 2989 : 3499
                        if (jawabBenar) {
                            db.users[m.sender].money += bonus * 1
                            await m.reply(`إجابة صحيحة 🎉\nجائزة مالية 💰 *+${bonus}*`)
                            delete game[m.chat + id]
                        } else m.reply('*إجابة خاطئة!*')
                    }
                }
            }
        }
        
        // Family 100
        if (m.chat in family100) {
            if (m.quoted && m.quoted.id == family100[m.chat].id && !isCmd) {
                let room = family100[m.chat]
                let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
                let isSurender = /^((me)?nyerah|surr?ender)$/i.test(teks)
                if (!isSurender) {
                    let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                    if (room.terjawab[index]) return !0
                    room.terjawab[index] = m.sender
                }
                let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
                let caption = `أجب عن السؤال التالي:\n${room.soal}\n\n\nهناك ${room.jawaban.length} إجابات ${room.jawaban.find(v => v.includes(' ')) ? `(بعض الإجابات تحتوي على مسافات)` : ''}\n${isWin ? `تمت الإجابة على جميع الأسئلة` : isSurender ? 'استسلمت!' : ''}\n${Array.from(room.jawaban, (jawaban, index) => { return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false }).filter(v => v).join('\n')}\n${isSurender ? '' : `لاعب ممتاز`}`.trim()
                m.reply(caption)
                if (isWin || isSurender) delete family100[m.chat]
            }
        }
        
        // Chess
        if ((!isCmd || isCreator) && (m.sender in chess)) {
            const game = chess[m.sender];
            if (m.quoted && game.id == m.quoted.id && game.turn == m.sender && game.botMode) {
                if (!(game instanceof Chess)) {
                    chess[m.sender] = Object.assign(new Chess(game.fen), game);
                }
                if (game.isCheckmate() || game.isDraw() || game.isGameOver()) {
                    const status = game.isCheckmate() ? 'كش ملك' : game.isDraw() ? 'تعادل' : 'انتهت اللعبة';
                    delete chess[m.sender];
                    return m.reply(`♟${status}\nتم إيقاف اللعبة`);
                }
                const [from, to] = budy.toLowerCase().split(' ');
                if (!from || !to || from.length !== 2 || to.length !== 2) return m.reply('تنسيق خاطئ! استخدم: e2 e4');
                try {
                    game.move({ from, to });
                } catch (e) {
                    return m.reply('حركة غير صالحة!')
                }
                
                if (game.isGameOver()) {
                    delete chess[m.sender];
                    return m.reply(`♟انتهت اللعبة\nالفائز: @${m.sender.split('@')[0]}`);
                }
                const moves = game.moves({ verbose: true });
                const botMove = moves[Math.floor(Math.random() * moves.length)];
                game.move(botMove);
                game._fen = game.fen();
                game.time = Date.now();
                
                if (game.isGameOver()) {
                    delete chess[m.sender];
                    return m.reply(`♟انتهت اللعبة\nالفائز: البوت`);
                }
                const encodedFen = encodeURI(game._fen);
                const boardUrls = [`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside`,`https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside`,`https://chessboardimage.com/${encodedFen}.png`,`https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}&coordinates=true&size=765`,`https://fen2image.chessvision.ai/${encodedFen}/`];
                for (let url of boardUrls) {
                    try {
                        const { data } = await axios.get(url, { responseType: 'arraybuffer' });
                        let { key } = await m.reply({ image: data, caption: `♟️لعبة الشطرنج (ضد البوت)\n\nحركتك: ${from} → ${to}\nحركة البوت: ${botMove.from} → ${botMove.to}\n\nدورك التالي!\nمثال: e2 e4`, mentions: [m.sender] });
                        game.id = key.id;
                        break;
                    } catch (e) {}
                }
            } else if (game.time && (Date.now() - game.time >= 3600000)) {
                delete chess[m.sender];
                return m.reply(`♟انتهى الوقت!\nتم إيقاف اللعبة`);
            }
        }
        if (m.isGroup && (!isCmd || isCreator) && (m.chat in chess)) {
            if (m.quoted && chess[m.chat].id == m.quoted.id && [chess[m.chat].player1, chess[m.chat].player2].includes(m.sender)) {
                if (!(chess[m.chat] instanceof Chess)) {
                    chess[m.chat] = Object.assign(new Chess(chess[m.chat].fen), chess[m.chat]);
                }
                if (chess[m.chat].isCheckmate() || chess[m.chat].isDraw() || chess[m.chat].isGameOver()) {
                    const status = chess[m.chat].isCheckmate() ? 'كش ملك' : chess[m.chat].isDraw() ? 'تعادل' : 'انتهت اللعبة';
                    delete chess[m.chat];
                    return m.reply(`♟${status}\nتم إيقاف اللعبة`);
                }
                const [from, to] = budy.toLowerCase().split(' ');
                if (!from || !to || from.length !== 2 || to.length !== 2) return m.reply('تنسيق خاطئ! استخدم تنسيق مثل: e2 e4');
                if ([chess[m.chat].player1, chess[m.chat].player2].includes(m.sender) && chess[m.chat].turn === m.sender) {
                    try {
                        chess[m.chat].move({ from, to });
                    } catch (e) {
                        return m.reply('حركة غير صالحة!')
                    }
                    chess[m.chat].time = Date.now();
                    chess[m.chat]._fen = chess[m.chat].fen();
                    const isPlayer2 = chess[m.chat].player2 === m.sender
                    const nextPlayer = isPlayer2 ? chess[m.chat].player1 : chess[m.chat].player2;
                    const encodedFen = encodeURI(chess[m.chat]._fen);
                    const boardUrls = [`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside${!isPlayer2 ? '&flip=true' : ''}`,`https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${!isPlayer2 ? '&flip=true' : ''}`,`https://chessboardimage.com/${encodedFen}${!isPlayer2 ? '-flip' : ''}.png`,`https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}&coordinates=true&size=765${!isPlayer2 ? '&orientation=black' : ''}`,`https://fen2image.chessvision.ai/${encodedFen}/${!isPlayer2 ? '?pov=black' : ''}`];
                    for (let url of boardUrls) {
                        try {
                            const { data } = await axios.get(url, { responseType: 'arraybuffer' });
                            let { key } = await m.reply({ image: data, caption: `♟️لعبة الشطرنج\n\nدور: @${nextPlayer.split('@')[0]}\n\nرد على هذه الرسالة للاستمرار!\nمثال: from to -> b1 c3`, mentions: [nextPlayer] });
                            chess[m.chat].turn = nextPlayer
                            chess[m.chat].id = key.id;
                            break;
                        } catch (e) {}
                    }
                }
            } else if (chess[m.chat].time && (Date.now() - chess[m.chat].time >= 3600000)) {
                delete chess[m.chat]
                return m.reply(`♟انتهى الوقت!\nتم إيقاف اللعبة`)
            }
        }
        
        // Ular Tangga
        if (m.isGroup && (!isCmd || isCreator) && (m.chat in ulartangga)) {
            if (m.quoted && ulartangga[m.chat].id == m.quoted.id) {
                if (!(ulartangga[m.chat] instanceof SnakeLadder)) {
                    ulartangga[m.chat] = Object.assign(new SnakeLadder(ulartangga[m.chat]), ulartangga[m.chat]);
                }
                if (/^(roll|kocok)/i.test(budy.toLowerCase())) {
                    const player = ulartangga[m.chat].players.findIndex(a => a.id == m.sender)
                    if (ulartangga[m.chat].turn !== player) return m.reply('ليس دورك!')
                    const roll = ulartangga[m.chat].rollDice();
                    await m.reply(`https://raw.githubusercontent.com/nazedev/database/master/games/images/dice/roll-${roll}.webp`);
                    ulartangga[m.chat].nextTurn();
                    ulartangga[m.chat].players[player].move += roll
                    if (ulartangga[m.chat].players[player].move > 100) ulartangga[m.chat].players[player].move = 100 - (ulartangga[m.chat].players[player].move - 100);
                    let teks = `🐍🪜اللون: ${['أحمر','أزرق فاتح','أصفر','أخضر','بنفسجي','برتقالي','أزرق غامق','أبيض'][player]} -> ${ulartangga[m.chat].players[player].move}\n`;
                    if(Object.keys(ulartangga[m.chat].map.move).includes(ulartangga[m.chat].players[player].move.toString())) {
                        teks += ulartangga[m.chat].players[player].move > ulartangga[m.chat].map.move[ulartangga[m.chat].players[player].move] ? 'لقد أكلتك الأفعى!\n' : 'لقد صعدت السلم\n'
                        ulartangga[m.chat].players[player].move = ulartangga[m.chat].map.move[ulartangga[m.chat].players[player].move];
                    }
                    const newMap = await ulartangga[m.chat].drawBoard(ulartangga[m.chat].map.url, ulartangga[m.chat].players);
                    if (ulartangga[m.chat].players[player].move === 100) {
                        teks += `@${m.sender.split('@')[0]} فاز\nالجائزة:\n- حد + 50\n- مال + 100.000`;
                        addLimit(50, m.sender, db);
                        addMoney(100000, m.sender, db);
                        delete ulartangga[m.chat];
                        return m.reply({ image: newMap, caption: teks, mentions: [m.sender] });
                    }
                    let { key } = await m.reply({ image: newMap, caption: teks + `دور: @${ulartangga[m.chat].players[ulartangga[m.chat].turn].id.split('@')[0]}`, mentions: [m.sender, ulartangga[m.chat].players[ulartangga[m.chat].turn].id] });
                    ulartangga[m.chat].id = key.id;
                } else m.reply('مثال: roll/kocok')
            } else if (ulartangga[m.chat].time && (Date.now() - ulartangga[m.chat].time >= 7200000)) {
                delete ulartangga[m.chat]
                return m.reply(`🐍🪜انتهى الوقت!\nتم إيقاف اللعبة`)
            }
        }
        
        // Menfes & Room Ai
        if (!m.isGroup && (!isCmd || isCreator)) {
            if (menfes[m.sender] && m.key.remoteJid !== 'status@broadcast' && m.msg) {
                m.react('✈');
                m.msg.contextInfo = { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*رسالة من ${menfes[m.sender].nama ? menfes[m.sender].nama : 'شخص ما'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}
                const pesan = m.type === 'conversation' ? { extendedTextMessage: { text: m.msg, contextInfo: { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*رسالة من ${menfes[m.sender].nama ? menfes[m.sender].nama : 'شخص ما'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}}} : { [m.type]: m.msg }
                await naze.relayMessage(menfes[m.sender].tujuan, pesan, {});
            }
            
            if (chat_ai[m.sender] && m.key.remoteJid !== 'status@broadcast') {
                if (!/^(del((room|c|hat)ai)|>|<$)$/i.test(command) && budy) {
                    chat_ai[m.sender].push({ role: 'user', content: budy });
                    let hasil;
                    try {
                        hasil = await gptLogic(chat_ai[m.sender], budy)
                    } catch (e) {
                        try {
                            hasil = await yanzGpt(chat_ai[m.sender])
                        } catch (e) {
                            hasil = 'فشل في الحصول على رد، الموقع معطل'
                        }
                    }
                    const response = hasil?.choices?.[0]?.message?.content || hasil || 'عذراً، لم أفهم.';
                    chat_ai[m.sender].push({ role: 'assistant', content: response });
                    await m.reply(response)
                }
            }
        }
        
        // Afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let jid of mentionUser) {
            let user = db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`لا تضع علامة عليه!\nإنه بعيد الآن ${reason ? 'بسبب ' + reason : 'بدون سبب'}\nمنذ ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.users[m.sender].afkTime > -1) {
            let user = db.users[m.sender]
            m.reply(`@${m.sender.split('@')[0]} لم يعد بعيداً${user.afkReason ? ' بعد ' + user.afkReason : ''}\nمنذ ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
        
        
        switch(fileSha256 || command) {
            // Tempat Add Case
            case '19rujxl1e': {
                console.log('.')
            }
            break
            
            // Owner Menu
            case 'shutdown': case 'off': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                m.reply(`*[بوت] جارٍ إيقاف التشغيل...*`).then(() => {
                    process.exit(0)
                })
            }
            break
            case 'setbio': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!text) return m.reply('أين النص؟')
                naze.setStatus(q)
                m.reply(`*تم تغيير السيرة الذاتية إلى ${q}*`)
            }
            break
            case 'setppbot': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!/image/.test(quoted.type)) return m.reply(`رد على صورة مع التسمية التوضيحية ${prefix + command}`)
                let media = await naze.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (text.length > 0) {
                    let { img } = await generateProfilePicture(media)
                    await naze.query({
                        tag: 'iq',
                        attrs: {
                            to: '@s.whatsapp.net',
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
                    })
                    await fs.unlinkSync(media)
                    m.reply('تم بنجاح')
                } else {
                    await naze.updateProfilePicture(botNumber, { url: media })
                    await fs.unlinkSync(media)
                    m.reply('تم بنجاح')
                }
            }
            break
            case 'delppbot': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                await naze.removeProfilePicture(naze.user.id)
                m.reply('تم بنجاح')
            }
            break
            case 'join': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!text) return m.reply('أدخل رابط المجموعة!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('رابط غير صالح!')
                const result = args[0].split('https://chat.whatsapp.com/')[1]
                m.reply('جارٍ الانتظار...')
                await naze.groupAcceptInvite(result).catch((res) => {
                    if (res.data == 400) return m.reply('لم يتم العثور على المجموعة❗');
                    if (res.data == 401) return m.reply('تم طرد البوت من هذه المجموعة❗');
                    if (res.data == 409) return m.reply('البوت موجود بالفعل في هذه المجموعة❗');
                    if (res.data == 410) return m.reply('تم إعادة تعيين رابط المجموعة❗');
                    if (res.data == 500) return m.reply('المجموعة ممتلئة❗');
                })
            }
            break
            case 'leave': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                await naze.groupLeave(m.chat).then(() => naze.sendFromOwner(ownerNumber, 'تم بنجاح', m, { contextInfo: { isForwarded: true }})).catch(e => {});
            }
            break
            case 'clearchat': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                await naze.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }] }, m.chat).catch((e) => m.reply('فشل في حذف الدردشة!'))
                m.reply('تم مسح الرسائل بنجاح')
            }
            break
            case 'getmsgstore': case 'storemsg': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                let [teks1, teks2] = text.split`|`
                if (teks1 && teks2) {
                    const msgnya = await store.loadMessage(teks1, teks2)
                    if (msgnya?.message) await naze.relayMessage(m.chat, msgnya.message, {})
                    else m.reply('الرسالة غير موجودة!')
                } else m.reply(`مثال: ${prefix + command} 123xxx@g.us|3EB0xxx`)
            }
            break
            case 'blokir': case 'block': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (text || m.quoted) {
                    const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
                    await naze.updateBlockStatus(numbersOnly, 'block').then((a) => m.reply('تم بنجاح')).catch((err) => m.reply('فشل!'))
                } else m.reply(`مثال: ${prefix + command} 62xxx`)
            }
            break
            case 'listblock': {
                let anu = await naze.fetchBlocklist()
                m.reply(`إجمالي المحظورين : ${anu.length}\n` + anu.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
            }
            break
            case 'openblokir': case 'unblokir': case 'openblock': case 'unblock': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (text || m.quoted) {
                    const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
                    await naze.updateBlockStatus(numbersOnly, 'unblock').then((a) => m.reply('تم بنجاح')).catch((err) => m.reply('فشل!'))
                } else m.reply(`مثال: ${prefix + command} 62xxx`)
            }
            break
            case 'ban': case 'banned': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!text) return m.reply(`أرسل/ضع علامة على رقمه!\nمثال:\n${prefix + command} 62xxx`)
                const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (db.users[nmrnya] && !db.users[nmrnya].ban) {
                    db.users[nmrnya].ban = true
                    m.reply('تم حظر المستخدم!')
                } else m.reply('المستخدم غير مسجل في قاعدة البيانات!')
            }
            break
            case 'unban': case 'unbanned': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!text) return m.reply(`أرسل/ضع علامة على رقمه!\nمثال:\n${prefix + command} 62xxx`)
                const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (db.users[nmrnya] && db.users[nmrnya].ban) {
                    db.users[nmrnya].ban = false
                    m.reply('تم إلغاء حظر المستخدم!')
                } else m.reply('المستخدم غير مسجل في قاعدة البيانات!')
            }
            break
            case 'mute': case 'unmute': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (command == 'mute') {
                    db.groups[m.chat].mute = true
                    m.reply('تم كتم البوت في هذه المجموعة!')
                } else if (command == 'unmute') {
                    db.groups[m.chat].mute = false
                    m.reply('تم إلغاء الكتم بنجاح')
                }
            }
            break
            case 'addowner': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!text || isNaN(text)) return m.reply(`أرسل/ضع علامة على رقمه!\nمثال:\n${prefix + command} 62xxx`)
                const nmrnya = text.replace(/[^0-9]/g, '')
                const onWa = await naze.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return m.reply('هذا الرقم غير مسجل في واتساب!')
                if (db?.set?.[botNumber]?.owner) {
                    if (db.set[botNumber].owner.find(a => a.id === nmrnya)) return m.reply('هذا الرقم موجود بالفعل في المالكين!')
                    db.set[botNumber].owner.push({ id: nmrnya, lock: false });
                }
                m.reply('تمت إضافة المالك بنجاح')
            }
            break
            case 'delowner': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!text || isNaN(text)) return m.reply(`أرسل/ضع علامة على رقمه!\nمثال:\n${prefix + command} 62xxx`)
                const nmrnya = text.replace(/[^0-9]/g, '')
                const onWa = await naze.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return m.reply('هذا الرقم غير مسجل في واتساب!')
                let list = db.set[botNumber].owner
                const index = list.findIndex(o => o.id === nmrnya);
                if (index === -1) return m.reply('لم يتم العثور على المالك في القائمة!')
                list.splice(index, 1)
                m.reply('تم حذف المالك بنجاح')
            }
            break
            case 'adduang': case 'addmoney': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`أرسل/ضع علامة على رقمه!\nمثال:\n${prefix + command} 62xxx 1000`)
                if (args[1].length > 15) return m.reply('الحد الأقصى للمال هو 15 رقمًا!')
                const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                const onWa = await naze.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return m.reply('هذا الرقم غير مسجل في واتساب!')
                if (db.users[nmrnya] && db.users[nmrnya].money >= 0) {
                    addMoney(args[1], nmrnya, db)
                    m.reply('تمت إضافة المال بنجاح')
                } else m.reply('المستخدم غير مسجل في قاعدة البيانات!')
            }
            break
            case 'addlimit': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`أرسل/ضع علامة على رقمه!\nمثال:\n${prefix + command} 62xxx 10`)
                if (args[1].length > 10) return m.reply('الحد الأقصى للحد هو 10 أرقام!')
                const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                const onWa = await naze.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return m.reply('هذا الرقم غير مسجل في واتساب!')
                if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
                    addLimit(args[1], nmrnya, db)
                    m.reply('تمت إضافة الحد بنجاح')
                } else m.reply('المستخدم غير مسجل في قاعدة البيانات!')
            }
            break
            case 'listpc': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                let anu = Object.keys(store.messages).filter(a => a.endsWith('.net') || a.endsWith('lid'));
                let teks = `● *قائمة الدردشات الخاصة*\n\nإجمالي الدردشات : ${anu.length} دردشة\n\n`
                if (anu.length === 0) return m.reply(teks)
                for (let i of anu) {
                    if (store.messages?.[i]?.array?.length) {
                        let nama = naze.getName(m.sender)
                        teks += `${setv} *الاسم :* ${nama}\n${setv} *المستخدم :* @${i.split('@')[0]}\n${setv} *الدردشة :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
                    }
                }
                await m.reply(teks)
            }
            break
            case 'listgc': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                let anu = Object.keys(store.messages).filter(a => a.endsWith('@g.us'));
                let teks = `● *قائمة مجموعات الدردشة*\n\nإجمالي المجموعات : ${anu.length} مجموعة\n\n`
                if (anu.length === 0) return m.reply(teks)
                for (let i of anu) {
                    let metadata;
                    try {
                        metadata = store.groupMetadata[i]
                    } catch (e) {
                        metadata = (store.groupMetadata[i] = await naze.groupMetadata(i).catch(e => ({})))
                    }
                    teks += metadata?.subject ? `${setv} *الاسم :* ${metadata.subject}\n${setv} *المشرف :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n${setv} *المعرف :* ${metadata.id}\n${setv} *تم الإنشاء :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${setv} *الأعضاء :* ${metadata.participants.length}\n\n=====================\n\n` : ''
                }
                await m.reply(teks)
            }
            break
            case 'creategc': case 'buatgc': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!text) return m.reply(`مثال:\n${prefix + command} *اسم المجموعة*`)
                let group = await naze.groupCreate(q, [m.sender])
                let res = await naze.groupInviteCode(group.id)
                await m.reply(`*رابط المجموعة :* *https://chat.whatsapp.com/${res}*\n\n*اسم المجموعة :* *${group.subject}*\nادخل خلال 30 ثانية\nلتكون مشرفًا`, { detectLink: true })
                await sleep(30000)
                await naze.groupParticipantsUpdate(group.id, [m.sender], 'promote').catch(e => {});
                await naze.sendMessage(group.id, { text: 'تم' })
            }
            break
            case 'addsewa': case 'sewa': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!text) return m.reply(`مثال:\n${prefix + command} https://chat.whatsapp.com/xxx | المدة\n${prefix + command} https://chat.whatsapp.com/xxx | 30 يومًا`)
                let [teks1, teks2] = text.split('|')?.map(x => x.trim()) || [];
                if (!isUrl(teks1) && !teks1.includes('chat.whatsapp.com/')) return m.reply('رابط غير صالح!')
                const urlny = teks1.split('chat.whatsapp.com/')[1]
                try {
                    await naze.groupAcceptInvite(urlny)
                } catch (e) {
                    if (e.data == 400) return m.reply('لم يتم العثور على المجموعة❗');
                    if (e.data == 401) return m.reply('تم طرد البوت من هذه المجموعة❗');
                    if (e.data == 410) return m.reply('تم إعادة تعيين رابط المجموعة❗');
                    if (e.data == 500) return m.reply('المجموعة ممتلئة❗');
                }
                await naze.groupGetInviteInfo(urlny).then(a => {
                    addExpired({ url: urlny, expired: (teks2?.replace(/[^0-9]/g, '') || 30) + 'd', ...a }, sewa)
                    m.reply('تمت إضافة الإيجار بنجاح لمدة ' + (teks2?.replace(/[^0-9]/g, '') || 30) + ' يومًا\nسيخرج تلقائيًا عند انتهاء المدة!')
                }).catch(e => m.reply('فشل في إضافة الإيجار!'))
            }
            break
            case 'delsewa': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!text) return m.reply(`مثال:\n${prefix + command} https://chat.whatsapp.com/xxxx\n أو \n${prefix + command} id_group@g.us`)
                const urlny = text.split('chat.whatsapp.com/')[1].trim()
                if (checkStatus(urlny, sewa)) {
                    await m.reply('تم حذف الإيجار بنجاح')
                    await naze.groupLeave(getStatus(urlny, sewa).id).catch(e => {});
                    sewa.splice(getPosition(urlny, sewa), 1);
                } else m.reply(`${text} غير مسجل في قاعدة البيانات\nمثال:\n${prefix + command} https://chat.whatsapp.com/xxxx\n أو \n${prefix + command} id_group@g.us`)
            }
            break
            case 'listsewa': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                let txt = `*------「 قائمة الإيجارات 」------*\n\n`
                for (let s of sewa) {
                    txt += `➸ *المعرف*: ${s.id}\n➸ *الرابط*: https://chat.whatsapp.com/${s.url}\n➸ *الانتهاء*: ${formatDate(s.expired)}\n\n`
                }
                m.reply(txt)
            }
            break
            case 'addpr': case 'addprem': case 'addpremium': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!text) return m.reply(`مثال:\n${prefix + command} @علامة|المدة\n${prefix + command} @${m.sender.split('@')[0]}|30 يومًا`)
                let [teks1, teks2] = text.split('|').map(x => x.trim());
                const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                const onWa = await naze.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return m.reply('هذا الرقم غير مسجل في واتساب!')
                if (teks2) {
                    if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
                        addExpired({ id: nmrnya, expired: teks2.replace(/[^0-9]/g, '') + 'd' }, premium);
                        m.reply(`تم ${command} @${nmrnya.split('@')[0]} لمدة ${teks2}`)
                        db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.premium
                        db.users[nmrnya].money += db.users[nmrnya].vip ? money.vip : money.premium
                    } else m.reply('الرقم غير مسجل في البوت !\nتأكد من أن الرقم استخدم البوت من قبل!')
                } else m.reply(`أدخل المدة!\مثال:\n${prefix + command} @علامة|المدة\n${prefix + command} @${m.sender.split('@')[0]}|30d\n_د = يوم_`)
            }
            break
            case 'delpr': case 'delprem': case 'delpremium': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!text) return m.reply(`مثال:\n${prefix + command} @علامة`)
                const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
                    if (checkStatus(nmrnya, premium)) {
                        premium.splice(getPosition(nmrnya, premium), 1);
                        m.reply(`تم ${command} @${nmrnya.split('@')[0]}`)
                        db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.free
                        db.users[nmrnya].money += db.users[nmrnya].vip ? money.vip : money.free
                    } else m.reply(`المستخدم @${nmrnya.split('@')[0]} ليس بريميوم❗`)
                } else m.reply('الرقم غير مسجل في البوت !')
            }
            break
            case 'listpr': case 'listprem': case 'listpremium': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                let txt = `*------「 قائمة بريميوم 」------*\n\n`
                for (let userprem of premium) {
                    txt += `➸ *الرقم*: @${userprem.id.split('@')[0]}\n➸ *الحد*: ${db.users[userprem.id].limit}\n➸ *المال*: ${db.users[userprem.id].money.toLocaleString('id-ID')}\n➸ *الانتهاء*: ${formatDate(userprem.expired)}\n\n`
                }
                m.reply(txt)
            }
            break
            case 'upsw': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                const statusJidList = Object.keys(db.users)
                const backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
                try {
                    if (quoted.isMedia) {
                        if (/image|video/.test(quoted.mime)) {
                            await naze.sendMessage('status@broadcast', {
                                [`${quoted.mime.split('/')[0]}`]: await quoted.download(),
                                caption: text || m.quoted?.body || ''
                            }, { statusJidList, broadcast: true })
                            m.react('✅')
                        } else if (/audio/.test(quoted.mime)) {
                            await naze.sendMessage('status@broadcast', {
                                audio: await quoted.download(),
                                mimetype: 'audio/mp4',
                                ptt: true
                            }, { backgroundColor, statusJidList, broadcast: true })
                            m.react('✅')
                        } else m.reply('يدعم فقط الفيديو/الصوت/الصورة/النص')
                    } else if (quoted.text) {
                        await naze.sendMessage('status@broadcast', { text: text || m.quoted?.body || '' }, {
                            textArgb: 0xffffffff,
                            font: Math.floor(Math.random() * 9),
                            backgroundColor, statusJidList,
                            broadcast: true
                        })
                        m.react('✅')
                    } else m.reply('يدعم فقط الفيديو/الصوت/الصورة/النص')
                } catch (e) {
                    m.reply('فشل في تحميل حالة واتساب!')
                }
            }
            break
            case 'addcase': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!text && !text.startsWith('case')) return m.reply('أدخل الحالة!')
                fs.readFile('naze.js', 'utf8', (err, data) => {
                    if (err) {
                        console.error('حدث خطأ أثناء قراءة الملف:', err);
                        return;
                    }
                    const posisi = data.indexOf("case '19rujxl1e':");
                    if (posisi !== -1) {
                        const codeBaru = data.slice(0, posisi) + '\n' + `${text}` + '\n' + data.slice(posisi);
                        fs.writeFile('naze.js', codeBaru, 'utf8', (err) => {
                            if (err) {
                                m.reply('حدث خطأ أثناء كتابة الملف: ', err);
                            } else m.reply('تمت إضافة الحالة بنجاح');
                        });
                    } else m.reply('فشل في إضافة الحالة!');
                });
            }
            break
            case 'getcase': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!text) return m.reply('أدخل اسم الحالة!')
                try {
                    const getCase = (cases) => {
                        return "case"+`'${cases}'`+fs.readFileSync("naze.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
                    }
                    m.reply(`${getCase(text)}`)
                } catch (e) {
                    m.reply(`الحالة ${text} غير موجودة!`)
                }
            }
            break
            case 'delcase': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!text) return m.reply('أدخل اسم الحالة!')
                fs.readFile('naze.js', 'utf8', (err, data) => {
                    if (err) {
                        console.error('حدث خطأ أثناء قراءة الملف:', err);
                        return;
                    }
                    const regex = new RegExp(`case\\s+'${text.toLowerCase()}':[\\s\\S]*?break`, 'g');
                    const modifiedData = data.replace(regex, '');
                    fs.writeFile('naze.js', modifiedData, 'utf8', (err) => {
                        if (err) {
                            m.reply('حدث خطأ أثناء كتابة الملف: ', err);
                        } else m.reply('تم حذف الحالة من الملف');
                    });
                });
            }
            break
            case 'backup': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                switch (args[0]) {
                    case 'all':
                    let bekup = './database/backup_all.tar.gz';
                    tarBackup('./', bekup).then(() => {
                        return m.reply({
                            document: fs.readFileSync(bekup),
                            mimetype: 'application/gzip',
                            fileName: 'backup_all.tar.gz'
                        })
                    }).catch(e => m.reply('فشل النسخ الاحتياطي: ', + e))
                    break
                    case 'auto':
                    if (set.autobackup) return m.reply('تم تفعيله مسبقًا!')
                    set.autobackup = true
                    m.reply('تم تفعيل النسخ الاحتياطي التلقائي بنجاح')
                    break
                    case 'session':
                    await m.reply({
                        document: fs.readFileSync('./nazedev/creds.json'),
                        mimetype: 'application/json',
                        fileName: 'creds.json'
                    });
                    break
                    case 'database':
                    let tglnya = new Date().toISOString().replace(/[:.]/g, '-');
                    let datanya = './database/' + tempatDB;
                    if (tempatDB.startsWith('mongodb')) {
                        datanya = './database/backup_database.json';
                        fs.writeFileSync(datanya, JSON.stringify(global.db, null, 2), 'utf-8');
                    }
                    await m.reply({
                        document: fs.readFileSync(datanya),
                        mimetype: 'application/json',
                        fileName: tglnya + '_database.json'
                    })
                    break
                    default:
                    m.reply('استخدم الأمر:\n- backup all\n- backup auto\n- backup session\n- backup database');
                }
            }
            break
            case 'getsession': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                await m.reply({
                    document: fs.readFileSync('./nazedev/creds.json'),
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                });
            }
            break
            case 'deletesession': case 'delsession': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                fs.readdir('./nazedev', async function (err, files) {
                    if (err) {
                        console.error('غير قادر على فحص الدليل: ' + err);
                        return m.reply('غير قادر على فحص الدليل: ' + err);
                    }
                    let filteredArray = await files.filter(item => ['session-', 'pre-key', 'sender-key', 'app-state'].some(ext => item.startsWith(ext)));                    
                    let teks = `تم اكتشاف ${filteredArray.length} ملف جلسة\n\n`
                    if(filteredArray.length == 0) return m.reply(teks);
                    filteredArray.map(function(e, i) {
                        teks += (i+1)+`. ${e}\n`
                    })
                    if (text && text == 'true') {
                        let { key } = await m.reply('جارٍ حذف ملفات الجلسة..')
                        await filteredArray.forEach(function (file) {
                            fs.unlinkSync('./nazedev/' + file)
                        });
                        sleep(2000)
                        m.reply('تم حذف جميع ملفات الجلسة غير الضرورية بنجاح', { edit: key })
                    } else m.reply(teks + `\nاكتب _${prefix + command} true_\nللحذف`)
                });
            }
            break
            case 'deletesampah': case 'delsampah': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                fs.readdir('./database/sampah', async function (err, files) {
                    if (err) {
                        console.error('غير قادر على فحص الدليل: ' + err);
                        return m.reply('غير قادر على فحص الدليل: ' + err);
                    }
                    let filteredArray = await files.filter(item => ['gif', 'png', 'bin','mp3', 'mp4', 'jpg', 'webp', 'webm', 'opus', 'jpeg'].some(ext => item.endsWith(ext)));
                    let teks = `تم اكتشاف ${filteredArray.length} ملف غير ضروري\n\n`
                    if(filteredArray.length == 0) return m.reply(teks);
                    filteredArray.map(function(e, i) {
                        teks += (i+1)+`. ${e}\n`
                    })
                    if (text && text == 'true') {
                        let { key } = await m.reply('جارٍ حذف الملفات غير الضرورية..')
                        await filteredArray.forEach(function (file) {
                            fs.unlinkSync('./database/sampah/' + file)
                        });
                        sleep(2000)
                        m.reply('تم حذف جميع الملفات غير الضرورية بنجاح', { edit: key })
                    } else m.reply(teks + `\nاكتب _${prefix + command} true_\nللحذف`)
                });
            }
            break
            case 'setnamebot': case 'setbotname': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (text || m.quoted) {
                    const teksnya = text ? text : m.quoted.text
                    if (db?.set?.[botNumber]?.setbotname) db.set[botNumber].setbotname = teksnya
                    m.reply('تم بنجاح')
                } else m.reply(`مثال: ${prefix + command} النص`)
            }
            break
            case 'setpacknamebot': case 'setbotpackname': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (text || m.quoted) {
                    const teksnya = text ? text : m.quoted.text
                    if (db?.set?.[botNumber]?.packname) db.set[botNumber].packname = teksnya
                    m.reply('تم بنجاح')
                } else m.reply(`مثال: ${prefix + command} النص`)
            }
            break
            case 'setauthorbot': case 'setbotauthor': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (text || m.quoted) {
                    const teksnya = text ? text : m.quoted.text
                    if (db?.set?.[botNumber]?.author) db.set[botNumber].author = teksnya
                    m.reply('تم بنجاح')
                } else m.reply(`مثال: ${prefix + command} النص`)
            }
            break
            case 'sc': case 'script': {
                await m.reply(`https://github.com/nazedev/hitori\n⬆️ هذا الكود المصدري`, {
                    contextInfo: {
                        forwardingScore: 10,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: my.ch,
                            serverMessageId: null,
                            newsletterName: 'انضم للمزيد من المعلومات'
                        },
                        externalAdReply: {
                            title: author,
                            body: 'اشترك في قناتي على اليوتيوب',
                            thumbnail: fake.thumbnail,
                            mediaType: 2,
                            mediaUrl: my.yt,
                            sourceUrl: my.yt,
                        }
                    }
                })
            }
            break
            case 'donasi': case 'donate': {
                m.reply('يمكن التبرع عبر الرابط أدناه :\nhttps://saweria.co/naze')
            }
            break
            
            // Group Menu
            case 'add': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (!m.isAdmin) return m.reply('هذا الأمر للمشرفين فقط')
                if (!m.isBotAdmin) return m.reply('البوت ليس مشرفًا')
                if (text || m.quoted) {
                    const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
                    try {
                        await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) => {
                            for (let i of res) {
                                let invv = await naze.groupInviteCode(m.chat)
                                const statusMessages = {
                                    200: `تمت إضافة @${numbersOnly.split('@')[0]} إلى المجموعة!`,
                                    401: 'قام بحظر البوت!',
                                    409: 'إنه بالفعل في المجموعة!',
                                    500: 'المجموعة ممتلئة!'
                                };
                                if (statusMessages[i.status]) {
                                    return m.reply(statusMessages[i.status]);
                                } else if (i.status == 408) {
                                    await m.reply(`@${numbersOnly.split('@')[0]} خرج للتو من هذه المجموعة!\n\nبسبب الخصوصية\n\nسيتم إرسال الدعوة إلى\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nعبر خاص`)
                                    await m.reply(`${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nالمشرف: @${m.sender.split('@')[0]}\nيدعوك إلى هذه المجموعة\nيرجى الانضمام إذا كنت ترغب🙇`, { detectLink: true, chat: numbersOnly, quoted: fkontak }).catch((err) => m.reply('فشل في إرسال الدعوة!'))
                                } else if (i.status == 403) {
                                    let a = i.content.content[0].attrs
                                    await naze.sendGroupInvite(m.chat, numbersOnly, a.code, a.expiration, m.metadata.subject, `المشرف: @${m.sender.split('@')[0]}\nيدعوك إلى هذه المجموعة\nيرجى الانضمام إذا كنت ترغب🙇`, null, { mentions: [m.sender] })
                                    await m.reply(`@${numbersOnly.split('@')[0]} لا يمكن إضافته\n\nبسبب الخصوصية\n\nسيتم إرسال الدعوة إلى\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nعبر خاص`)
                                } else m.reply('فشل في إضافة المستخدم\nالحالة : ' + i.status)
                            }
                        })
                    } catch (e) {
                        m.reply('حدث خطأ! فشل في إضافة المستخدم')
                    }
                } else m.reply(`مثال: ${prefix + command} 62xxx`)
            }
            break
            case 'kick': case 'dor': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (!m.isAdmin) return m.reply('هذا الأمر للمشرفين فقط')
                if (!m.isBotAdmin) return m.reply('البوت ليس مشرفًا')
                if (text || m.quoted) {
                    const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
                    await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => m.reply('فشل!'))
                } else m.reply(`مثال: ${prefix + command} 62xxx`)
            }
            break
            case 'promote': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (!m.isAdmin) return m.reply('هذا الأمر للمشرفين فقط')
                if (!m.isBotAdmin) return m.reply('البوت ليس مشرفًا')
                if (text || m.quoted) {
                    const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
                    await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => m.reply('فشل!'))
                } else m.reply(`مثال: ${prefix + command} 62xxx`)
            }
            break
            case 'demote': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (!m.isAdmin) return m.reply('هذا الأمر للمشرفين فقط')
                if (!m.isBotAdmin) return m.reply('البوت ليس مشرفًا')
                if (text || m.quoted) {
                    const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
                    await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => m.reply('فشل!'))
                } else m.reply(`مثال: ${prefix + command} 62xxx`)
            }
            break
            case 'warn': case 'warning': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (!m.isAdmin) return m.reply('هذا الأمر للمشرفين فقط')
                if (!m.isBotAdmin) return m.reply('البوت ليس مشرفًا')
                if (text || m.quoted) {
                    const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
                    if (!db.groups[m.chat].warn[numbersOnly]) {
                        db.groups[m.chat].warn[numbersOnly] = 1
                        m.reply('تحذير 1/4, سيتم الطرد في أي وقت❗')
                    } else if (db.groups[m.chat].warn[numbersOnly] >= 3) {
                        await naze.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => m.reply('فشل!'))
                        delete db.groups[m.chat].warn[numbersOnly]
                    } else {
                        db.groups[m.chat].warn[numbersOnly] += 1
                        m.reply(`تحذير ${db.groups[m.chat].warn[numbersOnly]}/4, سيتم الطرد في أي وقت❗`)
                    }
                } else m.reply(`مثال: ${prefix + command} 62xxx`)
            }
            break
            case 'unwarn': case 'delwarn': case 'unwarning': case 'delwarning': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (!m.isAdmin) return m.reply('هذا الأمر للمشرفين فقط')
                if (!m.isBotAdmin) return m.reply('البوت ليس مشرفًا')
                if (text || m.quoted) {
                    const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
                    if (db.groups[m.chat]?.warn?.[numbersOnly]) {
                        delete db.groups[m.chat].warn[numbersOnly]
                        m.reply('تمت إزالة التحذير بنجاح!')
                    }
                } else m.reply(`مثال: ${prefix + command} 62xxx`)
            }
            break
            case 'setname': case 'setnamegc': case 'setsubject': case 'setsubjectgc': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (!m.isAdmin) return m.reply('هذا الأمر للمشرفين فقط')
                if (!m.isBotAdmin) return m.reply('البوت ليس مشرفًا')
                if (text || m.quoted) {
                    const teksnya = text ? text : m.quoted.text
                    await naze.groupUpdateSubject(m.chat, teksnya).catch((err) => m.reply('فشل!'))
                } else m.reply(`مثال: ${prefix + command} النص`)
            }
            break
            case 'setdesc': case 'setdescgc': case 'setdesk': case 'setdeskgc': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (!m.isAdmin) return m.reply('هذا الأمر للمشرفين فقط')
                if (!m.isBotAdmin) return m.reply('البوت ليس مشرفًا')
                if (text || m.quoted) {
                    const teksnya = text ? text : m.quoted.text
                    await naze.groupUpdateDescription(m.chat, teksnya).catch((err) => m.reply('فشل!'))
                } else m.reply(`مثال: ${prefix + command} النص`)
            }
            break
            case 'setppgroups': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (!m.isAdmin) return m.reply('هذا الأمر للمشرفين فقط')
                if (!m.isBotAdmin) return m.reply('البوت ليس مشرفًا')
                if (!m.quoted) return m.reply('رد على الصورة التي تريد تعيينها كصورة للمجموعة')
                if (!/image/.test(quoted.type)) return m.reply(`رد على صورة مع التسمية التوضيحية ${prefix + command}`)
                let media = await naze.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
                if (text.length > 0) {
                    let { img } = await generateProfilePicture(media)
                    await naze.query({
                        tag: 'iq',
                        attrs: {
                            target: m.chat,
                            to: '@s.whatsapp.net',
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
                    })
                    await fs.unlinkSync(media)
                    m.reply('تم بنجاح')
                } else {
                    await naze.updateProfilePicture(m.chat, { url: media })
                    await fs.unlinkSync(media)
                    m.reply('تم بنجاح')
                }
            }
            break
            case 'delete': case 'del': case 'd': {
                if (!m.quoted) return m.reply('رد على الرسالة التي تريد حذفها')
                await naze.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: m.isBotAdmin ? false : true, id: m.quoted.id, participant: m.quoted.sender }})
            }
            break
            case 'pin': case 'unpin': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (!m.isAdmin) return m.reply('هذا الأمر للمشرفين فقط')
                if (!m.isBotAdmin) return m.reply('البوت ليس مشرفًا')
                await naze.sendMessage(m.chat, { pin: { type: command == 'pin' ? 1 : 0, time: 2592000, key: m.quoted ? m.quoted.key : m.key }})
            }
            break
            case 'linkgroup': case 'linkgrup': case 'linkgc': case 'urlgroup': case 'urlgrup': case 'urlgc': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (!m.isAdmin) return m.reply('هذا الأمر للمشرفين فقط')
                if (!m.isBotAdmin) return m.reply('البوت ليس مشرفًا')
                let response = await naze.groupInviteCode(m.chat)
                await m.reply(`https://chat.whatsapp.com/${response}\n\nرابط المجموعة : ${(store.groupMetadata[m.chat] ? store.groupMetadata[m.chat] : (store.groupMetadata[m.chat] = await naze.groupMetadata(m.chat))).subject}`, { detectLink: true })
            }
            break
            case 'revoke': case 'newlink': case 'newurl': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (!m.isAdmin) return m.reply('هذا الأمر للمشرفين فقط')
                if (!m.isBotAdmin) return m.reply('البوت ليس مشرفًا')
                await naze.groupRevokeInvite(m.chat).then((a) => {
                    m.reply(`تم إعادة تعيين رابط دعوة المجموعة ${m.metadata.subject}`)
                }).catch((err) => m.reply('فشل!'))
            }
            break
            case 'group': case 'grup': case 'gc': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (!m.isAdmin) return m.reply('هذا الأمر للمشرفين فقط')
                if (!m.isBotAdmin) return m.reply('البوت ليس مشرفًا')
                let set = db.groups[m.chat]
                switch (args[0]?.toLowerCase()) {
                    case 'close': case 'open':
                    await naze.groupSettingUpdate(m.chat, args[0] == 'close' ? 'announcement' : 'not_announcement').then(a => m.reply(`*تم ${args[0] == 'open' ? 'فتح' : 'غلق'} المجموعة بنجاح*`))
                    break
                    case 'join':
                    const _list = await naze.groupRequestParticipantsList(m.chat).then(a => a.map(b => b.jid))
                    if (/(a(p|pp|cc)|(ept|rove))|true|ok/i.test(args[1]) && _list.length > 0) {
                        await naze.groupRequestParticipantsUpdate(m.chat, _list, 'approve').catch(e => m.react('❌'))
                    } else if (/reject|false|no/i.test(args[1]) && _list.length > 0) {
                        await naze.groupRequestParticipantsUpdate(m.chat, _list, 'reject').catch(e => m.react('❌'))
                    } else m.reply(`قائمة طلبات الانضمام :\n${_list.length > 0 ? '- @' + _list.join('\n- @').split('@')[0] : '*لا شيء*'}\nمثال : ${prefix + command} join قبول/رفض`)
                    break
                    case 'pesansementara': case 'disappearing':
                    if (/90|7|1|24|on/i.test(args[1])) {
                        naze.sendMessage(m.chat, { disappearingMessagesInChat: /90/i.test(args[1]) ? 7776000 : /7/i.test(args[1]) ? 604800 : 86400 })
                    } else if (/0|off|false/i.test(args[1])) {
                        naze.sendMessage(m.chat, { disappearingMessagesInChat: 0 })
                    } else m.reply('الرجاء الاختيار :\n90 يومًا, 7 أيام, يوم واحد, إيقاف')
                    break
                    case 'antilink': case 'antivirtex': case 'antidelete': case 'welcome': case 'antitoxic': case 'waktusholat': case 'nsfw': case 'antihidetag': case 'setinfo': case 'antitagsw': case 'leave': case 'promote': case 'demote':
                    if (/on|true/i.test(args[1])) {
                        if (set[args[0]]) return m.reply('*مفعّل مسبقًا*')
                        set[args[0]] = true
                        m.reply('*تم التفعيل*')
                    } else if (/off|false/i.test(args[1])) {
                        set[args[0]] = false
                        m.reply('*تم الإيقاف*')
                    } else m.reply(`❗${args[0].charAt(0).toUpperCase() + args[0].slice(1)} تشغيل/إيقاف`)
                    break
                    case 'setwelcome': case 'setleave': case 'setpromote': case 'setdemote':
                    if (args[1]) {
                        set.text[args[0]] = args.slice(1).join(' ');
                        m.reply(`تم تغيير ${args[0].split('set')[1]} إلى:\n${set.text[args[0]]}`)
                    } else m.reply(`مثال:\n${prefix + command} ${args[0]} نص الرسالة\n\nمثال مع علامة:\n${prefix + command} ${args[0]} إلى @\nسيصبح:\nإلى @0\n\nمثال مع علامة مشرف:\n${prefix + command} ${args[0]} من @admin إلى @\nسيصبح:\nمن @${m.sender.split('@')[0]} إلى @0\n\nمثال مع اسم المجموعة:\n${prefix + command} ${args[0]} من @admin إلى @ في @subject\nسيصبح:\nمن @${m.sender.split('@')[0]} إلى @0 في ${m.metadata.subject}`)
                    break
                    default:
                    m.reply(`إعدادات المجموعة ${m.metadata.subject}\n- فتح\n- غلق\n- انضمام قبول/رفض\n- رسائل مؤقتة 90/7/1/إيقاف\n- مكافحة الروابط تشغيل/إيقاف ${set.antilink ? '🟢' : '🔴'}\n- مكافحة المحتوى الضار تشغيل/إيقاف ${set.antivirtex ? '🟢' : '🔴'}\n- مكافحة الحذف تشغيل/إيقاف ${set.antidelete ? '🟢' : '🔴'}\n- ترحيب تشغيل/إيقاف ${set.welcome ? '🟢' : '🔴'}\n- مغادرة تشغيل/إيقاف ${set.leave ? '🟢' : '🔴'}\n- ترقية تشغيل/إيقاف ${set.promote ? '🟢' : '🔴'}\n- تنزيل تشغيل/إيقاف ${set.demote ? '🟢' : '🔴'}\n- تعيين المعلومات تشغيل/إيقاف ${set.setinfo ? '🟢' : '🔴'}\n- محتوى للكبار تشغيل/إيقاف ${set.nsfw ? '🟢' : '🔴'}\n- أوقات الصلاة تشغيل/إيقاف ${set.waktusholat ? '🟢' : '🔴'}\n- مكافحة الإشارات المخفية تشغيل/إيقاف ${set.antihidetag ? '🟢' : '🔴'}\n- مكافحة وضع علامة في الحالة تشغيل/إيقاف ${set.antitagsw ? '🟢' : '🔴'}\n\n- setwelcome _نصها_\n- setleave _نصها_\n- setpromote _نصها_\n- setdemote _نصها_\n\nمثال:\n${prefix + command} antilink إيقاف`)
                }
            }
            break
            case 'tagall': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (!m.isAdmin) return m.reply('هذا الأمر للمشرفين فقط')
                if (!m.isBotAdmin) return m.reply('البوت ليس مشرفًا')
                let setv = pickRandom(listv)
                let teks = `*وضع علامة للجميع*\n\n*الرسالة :* ${q ? q : ''}\n\n`
                for (let mem of m.metadata.participants) {
                    teks += `${setv} @${mem.id.split('@')[0]}\n`
                }
                await m.reply(teks, { mentions: m.metadata.participants.map(a => a.id) })
            }
            break
            case 'hidetag': case 'h': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (!m.isAdmin) return m.reply('هذا الأمر للمشرفين فقط')
                if (!m.isBotAdmin) return m.reply('البوت ليس مشرفًا')
                await m.reply(q ? q : '', { mentions: m.metadata.participants.map(a => a.id) })
            }
            break
            case 'totag': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                if (!m.isAdmin) return m.reply('هذا الأمر للمشرفين فقط')
                if (!m.isBotAdmin) return m.reply('البوت ليس مشرفًا')
                if (!m.quoted) return m.reply(`رد على رسالة مع التسمية التوضيحية ${prefix + command}`)
                delete m.quoted.chat
                await naze.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: m.metadata.participants.map(a => a.id) })
            }
            break
            case 'listonline': case 'liston': {
                if (!m.isGroup) return m.reply('هذا الأمر للمجموعات فقط')
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                if (!store.presences || !store.presences[id]) return m.reply('لا يوجد أحد متصل الآن!')
                let online = [...Object.keys(store.presences[id]), botNumber]
                await m.reply('القائمة المتصلة:\n\n' + online.map(v => setv + ' @' + v.replace(/@.+/, '')).join`\n`, { mentions: online }).catch((e) => m.reply('لا يوجد أحد متصل الآن..'))
            }
            break
            
            // Bot Menu
            case 'owner': case 'listowner': {
                await naze.sendContact(m.chat, ownerNumber, m);
            }
            break
            case 'profile': case 'cek': {
                const user = Object.keys(db.users)
                const infoUser = db.users[m.sender]
                await m.reply(`*👤الملف الشخصي @${m.sender.split('@')[0]}* :\n🐋مستخدم البوت : ${user.includes(m.sender) ? 'نعم' : 'لا'}\n🔥النوع : ${isVip ? 'VIP' : isPremium ? 'بريميوم' : 'عادي'}${isPremium ? `\n⏳الانتهاء : ${checkStatus(m.sender, premium) ? formatDate(getExpired(m.sender, db.premium)) : '-'}` : ''}\n🎫الحد : ${infoUser.limit}\n💰المال : ${infoUser ? infoUser.money.toLocaleString('id-ID') : '0'}`)
            }
            break
            case 'leaderboard': {
                const entries = Object.entries(db.users).sort((a, b) => b[1].money - a[1].money).slice(0, 10).map(entry => entry[0]);
                let teksnya = '╭──❍「 *تصنيف المتصدرين* 」❍\n'
                for (let i = 0; i < entries.length; i++) {
                    teksnya += `│• ${i + 1}. @${entries[i].split('@')[0]}\n│• الرصيد : ${db.users[entries[i]].money.toLocaleString('id-ID')}\n│\n`
                }
                m.reply(teksnya + '╰──────❍');
            }
            break
            case 'totalpesan': {
                let messageCount = {};
                let messages = store?.messages[m.chat]?.array || [];
                let participants = m?.metadata?.participants?.map(p => p.id) || store?.messages[m.chat]?.array?.map(p => p.key.participant) || [];
                messages.forEach(mes => {
                    if (mes.key?.participant && mes.message) {
                        messageCount[mes.key.participant] = (messageCount[mes.key.participant] || 0) + 1;
                    }
                });
                let totalMessages = Object.values(messageCount).reduce((a, b) => a + b, 0);
                let date = new Date().toLocaleDateString('id-ID');
                let zeroMessageUsers = participants.filter(user => !messageCount[user]).map(user => `- @${user.replace(/[^0-9]/g, '')}`);
                let messageList = Object.entries(messageCount).map(([sender, count], index) => `${index + 1}. @${sender.replace(/[^0-9]/g, '')}: ${count} رسالة`);
                let result = `إجمالي الرسائل ${totalMessages} من ${participants.length} عضو\nفي تاريخ ${date}:\n${messageList.join('\n')}\n\nملاحظة: ${text.length > 0 ? `\n${zeroMessageUsers.length > 0 ? `الأعضاء الذين لم يرسلوا رسائل (صامتون):\n${zeroMessageUsers.join('\n')}` : 'جميع الأعضاء أرسلوا رسائل!'}` : `\nالتحقق من الصامتين؟ ${prefix + command} --sider`}`;
                m.reply(result)
            }
            break
            case 'req': case 'request': {
                if (!text) return m.reply('ماذا تريد أن تطلب من المالك؟')
                await m.reply(`*تم إرسال طلبك إلى المالك*\n_شكرًا لك🙏_`)
                await naze.sendFromOwner(ownerNumber, `رسالة من : @${m.sender.split('@')[0]}\nإلى المالك\n\nطلب ${text}`, m, { contextInfo: { mentionedJid: [m.sender], isForwarded: true }})
            }
            break
            case 'totalfitur': {
                const total = ((fs.readFileSync('./naze.js').toString()).match(/case '/g) || []).length
                m.reply(`إجمالي الميزات : ${total}`);
            }
            break
            case 'daily': case 'claim': {
                daily(m, db)
            }
            break
            case 'transfer': case 'tf': {
                transfer(m, args, db)
            }
            break
            case 'buy': {
                buy(m, args, db)
            }
            break
            case 'react': {
                naze.sendMessage(m.chat, { react: { text: args[0], key: m.quoted ? m.quoted.key : m.key }})
            }
            break
            case 'tagme': {
                m.reply(`@${m.sender.split('@')[0]}`, { mentions: [m.sender] })
            }
            break
            case 'runtime': case 'tes': case 'bot': {
                switch(args[0]) {
                    case 'mode': case 'public': case 'self':
                    if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                    if (args[1] == 'public' || args[1] == 'all') {
                        if (naze.public && set.grouponly && set.privateonly) return m.reply('*مفعّل مسبقًا*')
                        naze.public = set.public = true
                        set.grouponly = true
                        set.privateonly = true
                        m.reply('*تم التغيير إلى الاستخدام العام*')
                    } else if (args[1] == 'self') {
                        set.grouponly = false
                        set.privateonly = false
                        naze.public = set.public = false
                        m.reply('*تم التغيير إلى الاستخدام الذاتي*')
                    } else if (args[1] == 'group') {
                        set.grouponly = true
                        set.privateonly = false
                        m.reply('*تم التغيير إلى المجموعات فقط*')
                    } else if (args[1] == 'private') {
                        set.grouponly = false
                        set.privateonly = true
                        m.reply('*تم التغيير إلى الخاص فقط*')
                    } else m.reply('الوضع self/public/group/private/all')
                    break
                    case 'anticall': case 'autobio': case 'autoread': case 'autotyping': case 'readsw': case 'multiprefix': case 'antispam':
                    if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                    if (args[1] == 'on') {
                        if (set[args[0]]) return m.reply('*مفعّل مسبقًا*')
                        set[args[0]] = true
                        m.reply('*تم التفعيل*')
                    } else if (args[1] == 'off') {
                        set[args[0]] = false
                        m.reply('*تم الإيقاف*')
                    } else m.reply(`${args[0].charAt(0).toUpperCase() + args[0].slice(1)} تشغيل/إيقاف`)
                    break
                    case 'set': case 'settings':
                    let settingsBot = Object.entries(set).map(([key, value]) => {
                        let list = key == 'status' ? new Date(value).toLocaleString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : (typeof value === 'boolean') ? (value ? 'تشغيل🟢' : 'إيقاف🔴') : value;
                        return `- ${key.charAt(0).toUpperCase() + key.slice(1)} : ${list}`;
                    }).join('\n');
                    m.reply(`إعدادات البوت @${botNumber.split('@')[0]}\n${settingsBot}\n\nمثال: ${prefix + command} mode`);
                    break
                    default:
                    if (args[0] || args[1]) m.reply(`*الرجاء اختيار الإعدادات :*\n- الوضع : *${prefix + command} mode self/public*\n- مكافحة المكالمات : *${prefix + command} anticall on/off*\n- السيرة التلقائية : *${prefix + command} autobio on/off*\n- القراءة التلقائية : *${prefix + command} autoread on/off*\n- الكتابة التلقائية : *${prefix + command} autotyping on/off*\n- قراءة الحالة : *${prefix + command} readsw on/off*\n- بادئات متعددة : *${prefix + command} multiprefix on/off*`)
                }
                if (!args[0] && !args[1]) return m.reply(`*البوت يعمل منذ*\n*${runtime(process.uptime())}*`)
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `سرعة الاستجابة ${latensi.toFixed(4)} _ثانية_ \n ${oldd - neww} _ميلي ثانية_\n\nوقت التشغيل : ${runtime(process.uptime())}\n\n💻 معلومات الخادم\nالذاكرة: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_استخدام ذاكرة NodeJS_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_إجمالي استخدام المعالج_\n${cpus[0].model.trim()} (${cpu.speed} ميغاهيرتز)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_استخدام نوى المعالج (${cpus.length} نواة)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} ميغاهيرتز)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': case 'speed': {
                m.reply('جارٍ اختبار السرعة...')
                let cp = require('child_process')
                let { promisify } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python3 speed.py --share')
                } catch (e) {
                    o = e
                } finally {
                    let { stdout, stderr } = o
                    if (stdout.trim()) m.reply(stdout)
                    if (stderr.trim()) m.reply(stderr)
                }
            }
            break
            case 'afk': {
                let user = db.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`@${m.sender.split('@')[0]} بعيد الآن${text ? ': ' + text : ''}`)
            }
            break
            case 'readviewonce': case 'readviewone': case 'rvo': {
                if (!m.quoted) return m.reply(`رد على رسالة للعرض لمرة واحدة\nمثال: ${prefix + command}`)
                try {
                    if (m.quoted.msg.viewOnce) {
                        delete m.quoted.chat
                        m.quoted.msg.viewOnce = false
                        await m.reply({ forward: m.quoted })
                    } else m.reply(`رد على رسالة للعرض لمرة واحدة\nمثال: ${prefix + command}`)
                } catch (e) {
                    m.reply('الوسائط غير صالحة!')
                }
            }
            break
            case 'inspect': {
                if (!text) return m.reply('أدخل رابط مجموعة أو قناة!')
                let _grup = /chat.whatsapp.com\/([\w\d]*)/;
                let _saluran = /whatsapp\.com\/channel\/([\w\d]*)/;
                if (_grup.test(text)) {
                    await naze.groupGetInviteInfo(text.match(_grup)[1]).then((_g) => {
                        let teks = `*[ معلومات المجموعة ]*\n\nاسم المجموعة: ${_g.subject}\nمعرف المجموعة: ${_g.id}\nتم الإنشاء: ${new Date(_g.creation * 1000).toLocaleString()}${_g.owner ? ('\nتم الإنشاء بواسطة: ' + _g.owner) : '' }\nالمجموعة الأم: ${_g.linkedParent}\nالتقييد: ${_g.restrict}\nالإعلان: ${_g.announce}\nمجتمع: ${_g.isCommunity}\nإعلان المجتمع:${_g.isCommunityAnnounce}\nموافقة الانضمام: ${_g.joinApprovalMode}\nوضع إضافة الأعضاء: ${_g.memberAddMode}\nوصف المعرف: ${'`' + _g.descId + '`'}\nالوصف: ${_g.desc}\nالأعضاء:\n`
                        _g.participants.forEach((a) => {
                            teks += a.admin ? `- مشرف: @${a.id.split('@')[0]} [${a.admin}]\n` : ''
                        })
                        m.reply(teks)
                    }).catch((e) => {
                        if ([400, 406].includes(e.data)) return m.reply('لم يتم العثور على المجموعة❗');
                        if (e.data == 401) return m.reply('تم طرد البوت من هذه المجموعة❗');
                        if (e.data == 410) return m.reply('تم إعادة تعيين رابط المجموعة❗');
                    });
                } else if (_saluran.test(text) || text.endsWith('@newsletter') || !isNaN(text)) {
                    await naze.newsletterMsg(text.match(_saluran)[1]).then((n) => {
                        m.reply(`*[ معلومات القناة ]*\n\nالمعرف: ${n.id}\nالحالة: ${n.state.type}\nالاسم: ${n.thread_metadata.name.text}\nتم الإنشاء: ${new Date(n.thread_metadata.creation_time * 1000).toLocaleString()}\nالمشتركين: ${n.thread_metadata.subscribers_count}\nالتحقق: ${n.thread_metadata.verification}\nالوصف: ${n.thread_metadata.description.text}\n`)
                    }).catch((e) => m.reply('لم يتم العثور على القناة❗'))
                } else m.reply('يدعم فقط روابط المجموعات أو القنوات!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) return m.reply('رد على الرسالة التي تريد حفظها في قاعدة البيانات')
                if (!text) return m.reply(`مثال : ${prefix + command} اسم الملف`)
                let msgs = db.database
                if (text.toLowerCase() in msgs) return m.reply(`'${text}' موجود بالفعل في قائمة الرسائل`)
                msgs[text.toLowerCase()] = m.quoted
                delete msgs[text.toLowerCase()].chat
                m.reply(`تمت إضافة الرسالة إلى قائمة الرسائل باسم '${text}'\nالوصول عبر ${prefix}getmsg ${text}\nعرض قائمة الرسائل عبر ${prefix}listmsg`)
            }
            break
            case 'delmsg': case 'deletemsg': {
                if (!text) return m.reply('ما اسم الرسالة التي تريد حذفها؟')
                let msgs = db.database
                if (text == 'allmsg') {
                    db.database = {}
                    m.reply('تم حذف جميع الرسائل من قائمة الرسائل')
                } else {
                    if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' غير موجود في قائمة الرسائل`)
                    delete msgs[text.toLowerCase()]
                    m.reply(`تم حذف '${text}' من قائمة الرسائل`)
                }
            }
            break
            case 'getmsg': {
                if (!text) return m.reply(`مثال : ${prefix + command} اسم الملف\n\nعرض قائمة الرسائل عبر ${prefix}listmsg`)
                let msgs = db.database
                if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' غير موجود في قائمة الرسائل`)
                await naze.relayMessage(m.chat, msgs[text.toLowerCase()], {})
            }
            break
            case 'listmsg': {
                let seplit = Object.entries(db.database).map(([nama, isi]) => { return { nama, message: getContentType(isi) }})
                let teks = '「 قائمة قاعدة البيانات 」\n\n'
                for (let i of seplit) {
                    teks += `${setv} *الاسم :* ${i.nama}\n${setv} *النوع :* ${i.message?.replace(/Message/i, '')}\n───────────────\n`
                }
                m.reply(teks)
            }
            break
            case 'setcmd': case 'addcmd': {
                if (!m.quoted) return m.reply('رد على الرسالة!')
                if (!m.quoted.fileSha256) return m.reply('تفتقد هاش SHA256!')
                if (!text) return m.reply(`مثال : ${prefix + command} اسم الأمر`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.cmd[hash] && global.db.cmd[hash].locked) return m.reply('ليس لديك إذن لتغيير أمر الملصق هذا')
                global.db.cmd[hash] = {
                    creator: m.sender,
                    locked: false,
                    at: + new Date,
                    text
                }
                m.reply('تم!')
            }
            break
            case 'delcmd': {
                if (!m.quoted) return m.reply('رد على الرسالة!')
                if (!m.quoted.fileSha256) return m.reply('تفتقد هاش SHA256!')
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.cmd[hash] && global.db.cmd[hash].locked) return m.reply('ليس لديك إذن لتغيير أمر الملصق هذا')
                delete global.db.cmd[hash];
                m.reply('تم')
            }
            break
            case 'listcmd': {
                let teks = `*قائمة الهاش*\nمعلومة: *عريض* الهاش مقفل\n${Object.entries(global.db.cmd).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}`.trim()
                naze.sendText(m.chat, teks, m);
            }
            break
            case 'lockcmd': case 'unlockcmd': {
                if (!isCreator) return m.reply('هذا الأمر للمالك فقط')
                if (!m.quoted) return m.reply('رد على الرسالة!')
                if (!m.quoted.fileSha256) return m.reply('تفتقد هاش SHA256!')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.cmd)) return m.reply('ليس لديك إذن لتغيير أمر الملصق هذا')
                global.db.cmd[hash].locked = !/^un/i.test(command)
            }
            break
            case 'q': case 'quoted': {
                if (!m.quoted) return m.reply('رد على الرسالة!')
                if (text) {
                    delete m.quoted.chat
                    await m.reply({ forward: m.quoted })
                } else {
                    const anu = await m.getQuotedObj()
                    if (!anu) return m.reply('التنسيق غير متوفر!')
                    if (!anu.quoted) return m.reply('الرسالة التي ردت عليها لا تحتوي على رد')
                    await naze.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {})
                }
            }
            break
            case 'confes': case 'confess': case 'menfes': case 'menfess': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                if (m.isGroup) return m.reply('هذا الأمر للخاص فقط')
                if (menfes[m.sender]) return m.reply(`أنت بالفعل في جلسة ${command}!`)
                if (!text) return m.reply(`مثال : ${prefix + command} 62xxxx|اسم مستعار`)
                let [teks1, teks2] = text.split`|`
                if (teks1) {
                    const tujuan = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    const onWa = await naze.onWhatsApp(tujuan)
                    if (!onWa.length > 0) return m.reply('هذا الرقم غير مسجل في واتساب!')
                    menfes[m.sender] = {
                        tujuan: tujuan,
                        nama: teks2 ? teks2 : 'شخص'
                    };
                    menfes[tujuan] = {
                        tujuan: m.sender,
                        nama: 'المستلم',
                    };
                    const timeout = setTimeout(() => {
                        if (menfes[m.sender]) {
                            m.reply(`_انتهت جلسة ${command}_`);
                            delete menfes[m.sender];
                        }
                        if (menfes[tujuan]) {
                            naze.sendMessage(tujuan, { text: `_انتهت جلسة ${command}_` });
                            delete menfes[tujuan];
                        }
                        menfesTimeouts.delete(m.sender);
                        menfesTimeouts.delete(tujuan);
                    }, 600000);
                    menfesTimeouts.set(m.sender, timeout);
                    menfesTimeouts.set(tujuan, timeout);
                    naze.sendMessage(tujuan, { text: `_${command} متصل_\n*ملاحظة :* إذا كنت تريد إنهاء اكتب _*${prefix}del${command}*_` });
                    m.reply(`_بدء ${command}..._\n*يرجى البدء في إرسال الرسائل/الوسائط*\n*مدة ${command} 10 دقائق فقط*\n*ملاحظة :* إذا كنت تريد إنهاء اكتب _*${prefix}del${command}*_`)
                    setLimit(m, db)
                } else m.reply(`أدخل الرقم!\nمثال : ${prefix + command} 62xxxx|اسم مستعار`)
            }
            break
            case 'delconfes': case 'delconfess': case 'delmenfes': case 'delmenfess': {
                if (!menfes[m.sender]) return m.reply(`أنت لست في جلسة ${command.split('del')[1]}!`)
                let anu = menfes[m.sender]
                if (menfesTimeouts.has(m.sender)) {
                    clearTimeout(menfesTimeouts.get(m.sender));
                    menfesTimeouts.delete(m.sender);
                }
                if (menfesTimeouts.has(anu.tujuan)) {
                    clearTimeout(menfesTimeouts.get(anu.tujuan));
                    menfesTimeouts.delete(anu.tujuan);
                }
                naze.sendMessage(anu.tujuan, { text: `تم إنهاء الدردشة بواسطة ${anu.nama ? anu.nama : 'شخص'}` })
                m.reply(`تم إنهاء جلسة ${command.split('del')[1]} بنجاح!`)
                delete menfes[anu.tujuan];
                delete menfes[m.sender];
            }
            break
            case 'cai': case 'roomai': case 'chatai': case 'autoai': {
                if (m.isGroup) return m.reply('هذا الأمر للخاص فقط')
                if (chat_ai[m.sender]) return m.reply(`أنت بالفعل في جلسة ${command}!`)
                if (!text) return m.reply(`مثال: ${prefix + command} مرحبا\nمع توجيه: ${prefix + command} مرحبا|أنت مساعد مستعد للمساعدة في أي شيء أطلبه.\n\nللخروج من الغرفة: ${prefix + 'del' + command}`)
                let [teks1, teks2] = text.split`|`
                chat_ai[m.sender] = [{ role: 'system', content: teks2 || '' }, { role: 'user', content: text.split`|` ? teks1 : text || '' }]
                let hasil;
                try {
                    hasil = await gptLogic(chat_ai[m.sender], budy)
                } catch (e) {
                    hasil = await yanzGpt(chat_ai[m.sender])
                }
                const response = hasil?.choices?.[0]?.message?.content || hasil || 'عذراً، لم أفهم.';
                chat_ai[m.sender].push({ role: 'assistant', content: response });
                await m.reply(response)
            }
            break
            case 'delcai': case 'delroomai': case 'delchatai': case 'delautoai': {
                if (!chat_ai[m.sender]) return m.reply(`أنت لست في جلسة ${command.split('del')[1]}!`)
                m.reply(`تم إنهاء جلسة ${command.split('del')[1]} بنجاح!`)
                delete chat_ai[m.sender];
            }
            break
            case 'jadibot': {
                if (!isPremium) return m.reply('هذا الأمر للمستخدمين بريميوم فقط')
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                const nmrnya = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.sender
                const onWa = await naze.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return m.reply('هذا الرقم غير مسجل في واتساب!')
                await JadiBot(naze, nmrnya, m, store)
                m.reply(`استخدم ${prefix}stopjadibot\nللتوقف`)
                setLimit(m, db)
            }
            break
            case 'stopjadibot': case 'deljadibot': {
                const nmrnya = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.sender
                const onWa = await naze.onWhatsApp(nmrnya)
                if (!onWa.length > 0) return m.reply('هذا الرقم غير مسجل في واتساب!')
                await StopJadiBot(naze, nmrnya, m)
            }
            break
            case 'listjadibot': {
                ListJadiBot(naze, m)
            }
            break
            
            // Tools Menu
            case 'fetch': case 'get': {
                if (!isPremium) return m.reply('هذا الأمر للمستخدمين بريميوم فقط')
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                if (!/^https?:\/\//.test(text)) return m.reply('ابدأ بـ http:// أو https://');
                try {
                    const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
                    if (!/text|json|html|plain/.test(res.headers['content-type'])) {
                        await m.reply(text)
                    } else m.reply(util.format(res.data))
                    setLimit(m, db)
                } catch (e) {
                    m.reply(String(e))
                }
            }
            break
            case 'toaud': case 'toaudio': {
                if (!/video|audio/.test(mime)) return m.reply(`أرسل/رد على فيديو/صوت لتحويله إلى صوت مع التسمية التوضيحية ${prefix + command}`)
                m.reply('جارٍ الانتظار...')
                let media = await quoted.download()
                let audio = await toAudio(media, 'mp4')
                await m.reply({ audio: audio, mimetype: 'audio/mpeg'})
            }
            break
            case 'tomp3': {
                if (!/video|audio/.test(mime)) return m.reply(`أرسل/رد على فيديو/صوت لتحويله إلى صوت مع التسمية التوضيحية ${prefix + command}`)
                m.reply('جارٍ الانتظار...')
                let media = await quoted.download()
                let audio = await toAudio(media, 'mp4')
                await m.reply({ document: audio, mimetype: 'audio/mpeg', fileName: `تم التحويل بواسطة Naze Bot.mp3`})
            }
            break
            case 'tovn': case 'toptt': case 'tovoice': {
                if (!/video|audio/.test(mime)) return m.reply(`أرسل/رد على فيديو/صوت لتحويله إلى صوت مع التسمية التوضيحية ${prefix + command}`)
                m.reply('جارٍ الانتظار...')
                let media = await quoted.download()
                let audio = await toPTT(media, 'mp4')
                await m.reply({ audio: audio, mimetype: 'audio/ogg; codecs=opus', ptt: true })
            }
            break
            case 'togif': {
                if (!/webp|video/.test(mime)) return m.reply(`رد على فيديو/ملصق مع التسمية التوضيحية *${prefix + command}*`)
                m.reply('جارٍ الانتظار...')
                let media = await naze.downloadAndSaveMediaMessage(qmsg)
                let ran = `./database/sampah/${getRandom('.gif')}`;
                exec(`convert ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply('فشل❗')
                    let buffer = fs.readFileSync(ran)
                    m.reply({ video: buffer, gifPlayback: true })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'toimage': case 'toimg': {
                if (!/webp|video|image/.test(mime)) return m.reply(`رد على فيديو/ملصق مع التسمية التوضيحية *${prefix + command}*`)
                m.reply('جارٍ الانتظار...')
                let media = await naze.downloadAndSaveMediaMessage(qmsg)
                let ran = `./database/sampah/${getRandom('.png')}`;
                exec(`convert ${media}[0] ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return m.reply('فشل❗')
                    let buffer = fs.readFileSync(ran)
                    m.reply({ image: buffer })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'toptv': {
                if (!/video/.test(mime)) return m.reply(`أرسل/رد على فيديو لتحويله إلى رسالة PTV مع التسمية التوضيحية ${prefix + command}`)
                if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
                    const anu = await quoted.download()
                    const message = await generateWAMessageContent({ video: anu }, { upload: naze.waUploadToServer })
                    await naze.relayMessage(m.chat, { ptvMessage: message.videoMessage }, {})
                } else m.reply('رد على الفيديو الذي تريد تحويله إلى رسالة PTV!')
            }
            break
            case 'tourl': {
                try {
                    if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
                        m.reply('جارٍ الانتظار...')
                        let media = await quoted.download()
                        let anu = await UguuSe(media)
                        m.reply('الرابط : ' + anu.url)
                    } else m.reply('أرسل الوسائط التي تريد تحميلها!')
                } catch (e) {
                    m.reply('خادم التحميل غير متصل!')
                }
            }
            break
            case 'texttospech': case 'tts': case 'tospech': {
                if (!text) return m.reply('ما النص الذي تريد تحويله إلى صوت؟')
                let { tts } = require('./lib/tts')
                let anu = await tts(text)
                m.reply({ audio: anu, ptt: true, mimetype: 'audio/mpeg' })
            }
            break
            case 'translate': case 'tr': {
                if (text && text == 'list') {
                    let list_tr = `╭──❍「 *رموز اللغة* 」❍\n│• af : أفريقانية\n│• ar : عربية\n│• zh : صينية\n│• en : إنجليزية\n│• en-us : إنجليزية (الولايات المتحدة)\n│• fr : فرنسية\n│• de : ألمانية\n│• hi : هندية\n│• hu : مجرية\n│• is : آيسلندية\n│• id : إندونيسية\n│• it : إيطالية\n│• ja : يابانية\n│• ko : كورية\n│• la : لاتينية\n│• no : نرويجية\n│• pt : برتغالية\n│• pt : برتغالية\n│• pt-br : برتغالية (البرازيل)\n│• ro : رومانية\n│• ru : روسية\n│• sr : صربية\n│• es : إسبانية\n│• sv : سويدية\n│• ta : تاميلية\n│• th : تايلندية\n│• tr : تركية\n│• vi : فيتنامية\n╰──────❍`;
                    m.reply(list_tr)
                } else {
                    if (!m.quoted && (!text|| !args[1])) return m.reply(`أرسل/رد على نص مع التسمية التوضيحية ${prefix + command}`)
                    let lang = args[0] ? args[0] : 'id'
                    let teks = args[1] ? args.slice(1).join(' ') : m.quoted.text
                    try {
                        let hasil = await translate(teks, { to: lang, autoCorrect: true })
                        m.reply(`إلى : ${lang}\n${hasil[0]}`)
                    } catch (e) {
                        m.reply(`اللغة *${lang}* غير موجودة!\nالرجاء الاطلاع على القائمة, ${prefix + command} list`)
                    }
                }
            }
            break
            case 'toqr': case 'qr': {
                if (!text) return m.reply(`حول النص إلى رمز QR باستخدام *${prefix + command}* النص`)
                m.reply('جارٍ الانتظار...')
                await m.reply({ image: { url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + text }, caption: 'ها هو' })
            }
            break
            case 'tohd': case 'remini': case 'hd': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                if (/image/.test(mime)) {
                    try {
                        let media = await quoted.download()
                        let hasil = await remini(media, 'enhance')
                        m.reply({ image: hasil, caption: 'تم' })
                        setLimit(m, db)
                    } catch (e) {
                        let media = await naze.downloadAndSaveMediaMessage(qmsg)
                        let ran = `./database/sampah/${getRandom('.jpg')}`;
                        const scaleFactor = isNaN(parseInt(text)) ? 4 : parseInt(text) < 10 ? parseInt(text) : 4;
                        exec(`ffmpeg -i "${media}" -vf "scale=iw*${scaleFactor}:ih*${scaleFactor}:flags=lanczos" -q:v 1 "${ran}"`, async (err, stderr, stdout) => {
                            fs.unlinkSync(media)
                            if (err) return m.reply(String(err))
                            let buff = fs.readFileSync(ran)
                            await naze.sendMedia(m.chat, buff, '', 'تم', m);
                            fs.unlinkSync(ran)
                            setLimit(m, db)
                        });
                    }
                } else m.reply(`أرسل/رد على صورة بالتنسيق\nمثال: ${prefix + command}`)
            }
            break
            case 'dehaze': case 'colorize': case 'colorfull': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    remini(media, 'dehaze').then(a => {
                        m.reply({ image: a, caption: 'تم' })
                        setLimit(m, db)
                    }).catch(e => m.reply('الخادم غير متصل!'));
                } else m.reply(`أرسل/رد على صورة بالتنسيق\nمثال: ${prefix + command}`)
            }
            break
            case 'hitamkan': case 'toblack': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    hitamkan(media, 'hitam').then(a => {
                        m.reply({ image: a, caption: 'تم' })
                        setLimit(m, db)
                    }).catch(e => m.reply('الخادم غير متصل!'));
                } else m.reply(`أرسل/رد على صورة بالتنسيق\nمثال: ${prefix + command}`)
            }
            break
            case 'ssweb': {
                if (!isPremium) return m.reply('هذا الأمر للمستخدمين بريميوم فقط')
                if (!text) return m.reply(`مثال: ${prefix + command} https://github.com/nazedev/naze-md`)
                try {
                    let anu = 'https://' + text.replace(/^https?:\/\//, '')
                    await m.reply({ image: { url: 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + anu }, caption: 'تم' })
                    setLimit(m, db)
                } catch (e) {
                    m.reply('خادم لقطات الشاشة غير متصل!')
                }
            }
            break
            case 'readmore': {
                let teks1 = text.split`|`[0] ? text.split`|`[0] : ''
                let teks2 = text.split`|`[1] ? text.split`|`[1] : ''
                m.reply(teks1 + readmore + teks2)
            }
            break
            case 'getexif': {
                if (!m.quoted) return m.reply(`رد على ملصق\nمع التسمية التوضيحية ${prefix + command}`)
                if (!/sticker|webp/.test(quoted.type)) return m.reply(`رد على ملصق\nمع التسمية التوضيحية ${prefix + command}`)
                const img = new webp.Image()
                await img.load(await m.quoted.download())
                m.reply(util.format(JSON.parse(img.exif.slice(22).toString())))
            }
            break
            case 'cuaca': case 'weather': {
                if (!text) return m.reply(`مثال: ${prefix + command} جاكرتا`)
                try {
                    let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`)
                    m.reply(`*🏙 طقس مدينة ${data.name}*\n\n*🌤️ الطقس :* ${data.weather[0].main}\n*📝 الوصف :* ${data.weather[0].description}\n*🌡️ متوسط درجة الحرارة :* ${data.main.temp} °C\n*🤔 يشعر مثل :* ${data.main.feels_like} °C\n*🌬️ الضغط :* ${data.main.pressure} hPa\n*💧 الرطوبة :* ${data.main.humidity}%\n*🌪️ سرعة الرياح :* ${data.wind.speed} كم/س\n*📍الموقع :*\n- *خط الطول :* ${data.coord.lat}\n- *خط العرض :* ${data.coord.lon}\n*🌏 الدولة :* ${data.sys.country}`)
                } catch (e) {
                    m.reply('لم يتم العثور على المدينة!')
                }
            }
            break
            case 'sticker': case 'stiker': case 's': case 'stickergif': case 'stikergif': case 'sgif': case 'stickerwm': case 'swm': case 'curi': case 'colong': case 'take': case 'stickergifwm': case 'sgifwm': {
                if (!/image|video|sticker/.test(quoted.type)) return m.reply(`أرسل/رد على صورة/فيديو/ملصق متحرك مع التسمية التوضيحية ${prefix + command}\nمدة الصورة/الفيديو/الملصق المتحرك 1-9 ثوانٍ`)
                let media = await quoted.download()
                let teks1 = text.split`|`[0] ? text.split`|`[0] : packname
                let teks2 = text.split`|`[1] ? text.split`|`[1] : author
                if (/image|webp/.test(mime)) {
                    m.reply('جارٍ الانتظار...')
                    await naze.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                } else if (/video/.test(mime)) {
                    if ((qmsg).seconds > 11) return m.reply('الحد الأقصى 10 ثوانٍ!')
                    m.reply('جارٍ الانتظار...')
                    await naze.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                } else m.reply(`أرسل/رد على صورة/فيديو/ملصق متحرك مع التسمية التوضيحية ${prefix + command}\nمدة الفيديو/الملصق المتحرك 1-9 ثوانٍ`)
            }
            break
            case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
                try {
                    //if (!isPremium) return m.reply('هذا الأمر للمستخدمين بريميوم فقط')
                    if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                    if (!/image|webp/.test(mime)) return m.reply(`أرسل/رد على صورة/ملصق\nمع التسمية التوضيحية ${prefix + command} أعلى|أسفل`)
                    if (!text) return m.reply(`أرسل/رد على صورة/ملصق مع التسمية التوضيحية ${prefix + command} أعلى|أسفل`)
                    m.reply('جارٍ الانتظار...')
                    let atas = text.split`|`[0] ? text.split`|`[0] : '-'
                    let bawah = text.split`|`[1] ? text.split`|`[1] : '-'
                    let media = await quoted.download()
                    let mem = await UguuSe(media)
                    let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
                    await naze.sendAsSticker(m.chat, smeme, m, { packname, author })
                    setLimit(m, db)
                } catch (e) {
                    m.reply('خادم الميمز غير متصل!')
                }
            }
            break
            case 'emojimix': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                if (!text) return m.reply(`مثال: ${prefix + command} 😅+🤔`)
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1 && !emoji2) return m.reply(`مثال: ${prefix + command} 😅+🤔`)
                try {
                    let anu = await axios.get(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                    if (anu.data.results.length < 1) return m.reply(`مزيج الإيموجي ${text} غير موجود!`)
                    for (let res of anu.data.results) {
                        await naze.sendAsSticker(m.chat, res.url, m, { packname, author })
                    }
                    setLimit(m, db)
                } catch (e) {
                    m.reply('فشل في مزج الإيموجي!')
                }
            }
            break
            case 'qc': case 'quote': case 'fakechat': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                if (!text && !m.quoted) return m.reply(`أرسل/رد على رسالة *${prefix + command}* نصها`)
                try {
                    let ppnya = await naze.profilePictureUrl(m.sender, 'image').catch(() => 'https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg');
                    let res = await quotedLyo(text, m.pushName, ppnya);
                    await naze.sendAsSticker(m.chat, Buffer.from(res.result.image, 'base64'), m, { packname, author })
                    setLimit(m, db)
                } catch (e) {
                    m.reply('خادم الإنشاء غير متصل!')
                }
            }
            break
            case 'brat': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`أرسل/رد على رسالة *${prefix + command}* نصها`)
                try {
                    await naze.sendAsSticker(m.chat, 'https://aqul-brat.hf.space/?text=' + encodeURIComponent(text || m.quoted.text), m)
                    setLimit(m, db)
                } catch (e) {
                    m.reply('خادم برات غير متصل!')
                }
            }
            break
            case 'bratvid': case 'bratvideo': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`أرسل/رد على رسالة *${prefix + command}* نصها`)
                const teks = (m.quoted ? m.quoted.text : text).split(' ');
                const tempDir = path.join(process.cwd(), 'database/sampah');
                try {
                    const framePaths = [];
                    for (let i = 0; i < teks.length; i++) {
                        const currentText = teks.slice(0, i + 1).join(' ');
                        let res = await getBuffer('https://aqul-brat.hf.space/?text=' + encodeURIComponent(currentText));
                        const framePath = path.join(tempDir, `${m.sender + i}.mp4`);
                        fs.writeFileSync(framePath, res);
                        framePaths.push(framePath);
                    }
                    const fileListPath = path.join(tempDir, `${m.sender}.txt`);
                    let fileListContent = '';
                    for (let i = 0; i < framePaths.length; i++) {
                        fileListContent += `file '${framePaths[i]}'\n`;
                        fileListContent += `duration 0.5\n`;
                    }
                    fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
                    fileListContent += `duration 3\n`;
                    fs.writeFileSync(fileListPath, fileListContent);
                    const outputVideoPath = path.join(tempDir, `${m.sender}-output.mp4`);
                    execSync(`ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf 'fps=30' -c:v libx264 -preset veryfast -pix_fmt yuv420p -t 00:00:10 ${outputVideoPath}`);
                    naze.sendAsSticker(m.chat, outputVideoPath, m, { packname, author })
                    framePaths.forEach((filePath) => fs.unlinkSync(filePath));
                    fs.unlinkSync(fileListPath);
                    fs.unlinkSync(outputVideoPath);
                    setLimit(m, db)
                } catch (e) {
                    m.reply('حدث خطأ أثناء معالجة الطلب!')
                }
            }
            break
            case 'wasted': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                try {
                    if (/jpg|jpeg|png/.test(mime)) {
                        m.reply('جارٍ الانتظار...')
                        let media = await quoted.download()
                        let anu = await UguuSe(media)
                        await naze.sendFileUrl(m.chat, 'https://some-random-api.com/canvas/wasted?avatar=' + anu.url, 'ها هو', m)
                        setLimit(m, db)
                    } else m.reply('أرسل الوسائط التي تريد تحميلها!')
                } catch (e) {
                    m.reply('خادم الكانفس غير متصل!')
                }
            }
            break
            case 'trigger': case 'triggered': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                try {
                    if (/jpg|jpeg|png/.test(mime)) {
                        m.reply('جارٍ الانتظار...')
                        let media = await quoted.download()
                        let anu = await UguuSe(media)
                        await m.reply({ document: { url: 'https://some-random-api.com/canvas/triggered?avatar=' + anu.url }, fileName: 'triggered.gif', mimetype: 'image/gif' })
                        setLimit(m, db)
                    } else m.reply('أرسل الوسائط التي تريد تحميلها!')
                } catch (e) {
                    m.reply('خادم الكانفس غير متصل!')
                }
            }
            break
            case 'nulis': {
                m.reply(`*مثال*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
            }
            break
            case 'nuliskiri': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                if (!text) return m.reply(`أرسل الأمر *${prefix + command}* نصها`)
                m.reply('جارٍ الانتظار...')
                const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './src/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './src/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './src/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => m.reply('حدث خطأ!'))
                .on('exit', () => {
                    m.reply({ image: fs.readFileSync('./src/nulis/images/buku/setelahkiri.jpg'), caption: 'لا تكن كسولًا يا سيد. كن طالبًا مجتهدًا ರ_ರ' })
                    setLimit(m, db)
                })
            }
            break
            case 'nuliskanan': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                if (!text) return m.reply(`أرسل الأمر *${prefix + command}* نصها`)
                m.reply('جارٍ الانتظار...')
                const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './src/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './src/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    './src/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => m.reply('حدث خطأ!'))
                .on('exit', () => {
                    m.reply({ image: fs.readFileSync('./src/nulis/images/buku/setelahkanan.jpg'), caption: 'لا تكن كسولًا يا سيد. كن طالبًا مجتهدًا ರ_ರ' })
                    setLimit(m, db)
                })
            }
            break
            case 'foliokiri': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                if (!text) return m.reply(`أرسل الأمر *${prefix + command}* نصها`)
                m.reply('جارٍ الانتظار...')
                const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './src/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './src/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './src/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => m.reply('حدث خطأ!'))
                .on('exit', () => {
                    m.reply({ image: fs.readFileSync('./src/nulis/images/folio/setelahkiri.jpg'), caption: 'لا تكن كسولًا يا سيد. كن طالبًا مجتهدًا ರ_ರ' })
                    setLimit(m, db)
                })
            }
            break
            case 'foliokanan': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                if (!text) return m.reply(`أرسل الأمر *${prefix + command}* نصها`)
                m.reply('جارٍ الانتظار...')
                const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './src/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './src/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './src/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => m.reply('حدث خطأ!'))
                .on('exit', () => {
                    m.reply({ image: fs.readFileSync('./src/nulis/images/folio/setelahkanan.jpg'), caption: 'لا تكن كسولًا يا سيد. كن طالبًا مجتهدًا ರ_ರ' })
                    setLimit(m, db)
                })
            }
            break
            case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai': {
                try {
                    let set;
                    if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                    if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                    if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                    if (/earrape/.test(command)) set = '-af volume=12'
                    if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                    if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                    if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                    if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                    if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                    if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                    if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                    if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                    if (/audio/.test(mime)) {
                        m.reply('جارٍ الانتظار...')
                        let media = await naze.downloadAndSaveMediaMessage(qmsg)
                        let ran = `./database/sampah/${getRandom('.mp3')}`;
                        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                            fs.unlinkSync(media)
                            if (err) return m.reply(err)
                            let buff = fs.readFileSync(ran)
                            m.reply({ audio: buff, mimetype: 'audio/mpeg' })
                            fs.unlinkSync(ran)
                        });
                    } else m.reply(`رد على صوت لتغييره مع التسمية التوضيحية *${prefix + command}*`)
                } catch (e) {
                    m.reply('فشل!')
                }
            }
            break
            case 'tinyurl': case 'shorturl': case 'shortlink': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                if (!text || !isUrl(text)) return m.reply(`مثال: ${prefix + command} https://github.com/nazedev/hitori`)
                try {
                    let anu = await axios.get('https://tinyurl.com/api-create.php?url=' + text)
                    m.reply('الرابط : ' + anu.data)
                    setLimit(m, db)
                } catch (e) {
                    m.reply('فشل!')
                }
            }
            break
            case 'git': case 'gitclone': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                if (!args[0]) return m.reply(`مثال: ${prefix + command} https://github.com/nazedev/hitori`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply('استخدم رابط جيتهاب!')
                let [, user, repo] = args[0].match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || []
                try {
                    m.reply({ document: { url: `https://api.github.com/repos/${user}/${repo}/zipball` }, fileName: repo + '.zip', mimetype: 'application/zip' }).catch((e) => m.reply('حدث خطأ!'))
                    setLimit(m, db)
                } catch (e) {
                    m.reply('فشل!')
                }
            }
            break
            
            // Ai Menu
            case 'ai': {
                if (!text) return m.reply(`مثال: ${prefix + command} استفسار`)
                try {
                    let hasil = await yanzGpt([{ role: 'system', content: '' }, { role: 'user', content: text }])
                    m.reply(hasil.choices[0].message.content)
                } catch (e) {
                    try {
                        let hasil = await youSearch(text)
                        m.reply(hasil)
                    } catch (e) {
                        try {
                            let hasil = await bk9Ai(text)
                            m.reply(hasil.BK9)
                        } catch (e) {
                            m.reply(pickRandom(['ميزة الذكاء الاصطناعي بها مشكلة!','لا يمكن الاتصال بالذكاء الاصطناعي!','نظام الذكاء الاصطناعي مشغول الآن!','الميزة غير متوفرة حاليًا!']))
                        }
                    }
                }
            }
            break
            case 'simi': {
                if (!text) return m.reply(`مثال: ${prefix + command} استفسار`)
                try {
                    const hasil = await simi(text)
                    m.reply(hasil.success)
                } catch (e) {
                    m.reply('خادم سيمي غير متصل!')
                }
            }
            break
            case 'bard': case 'gemini': case 'aiedit': {
                if (!isLimit) return m.reply('لقد تجاوزت الحد المسموح')
                if (!text) return m.reply(`مثال: ${prefix + command} ما هو تاريخ اليوم؟`)
                if (!(APIKeys.geminiApikey?.length > 0 && APIKeys.geminiApikey?.some(a => a.trim() !== ''))) return m.reply('الرجاء الحصول على مفتاح API أولاً من\nhttps://aistudio.google.com/app/apikey')
                try {
                    let apinya = pickRandom(APIKeys.geminiApikey)
                    geminiAi(text, apinya, quoted.isMedia ? { mime: quoted.mime, media: await quoted.download() } : {}).then(a => {
                        if (a.media) naze.sendMedia(m.chat, a.media, '', a.text || '', m)
                        else if (a.text) m.reply(a.text)
                    }).catch(e => {
                        if (e.status === 503) m.reply('نموذج جيميني مشغول، يرجى المحاولة لاحقًا...')
                        else if (e.status === 400) m.reply('مفتاح API غير صالح. يرجى استخدام مفتاح API صالح.')
                        else m.reply('مفتاح API الخاص بك محدود أو حدث خطأ آخر!')
                    })
                    setLimit(m, db)
                } catch (e) {
                    m.reply('مفتاح API الخاص بك محدود!\nالرجاء تغييره بمفتاح آخر!')
                }
            }
            break
            
            // Search Menu
            case 'google': {
                if (!text) return m.reply(`مثال: ${prefix + command} استفسار`)
                try {
                    let anu = await youSearch(text);
                    m.reply(anu)
                } catch (e) {
                    try {
                        let anu = await yanzGpt([{ role: 'system', content: 'ابحث عن معلومات مفصلة عن هذا الموضوع، مع المصادر أيضًا!' }, { role: 'user', content: text }]);
                        m.reply(anu.choices[0].message.content)
                    } catch (e) {
                        m.reply('لم يتم العثور على نتائج البحث!')
                    }
                }
            }
            break
            case 'gimage': case 'bingimg': {
                if (!text) return m.reply(`مثال: ${prefix + command} استفسار`)
                try {
                    let anu = await fetchApi('/search/bing', { query: text });
                    let una = pickRandom(anu.result)
                    await m.reply({ image: { url: una }, caption: 'نتائج البحث ' + text })
                    setLimit(m, db)
                } catch (e) {
                    m.reply('لم يتم العثور على نتائج البحث!')
                }
            }
            break
            case 'play': case 'ytplay': case 'yts': case 'ytsearch': case 'youtubesearch': {
                if (!text) return m.reply(`مثال: ${prefix + command} dj komang`)
                m.reply('جارٍ الانتظار...')
                try {
                    const res = await yts.search(text);
                    const hasil = pickRandom(res.all)
                    const teksnya = `*📍العنوان:* ${hasil.title || 'غير متوفر'}\n*✏الوصف:* ${hasil.description || 'غير متوفر'}\n*🌟القناة:* ${hasil.author?.name || 'غير متوفر'}\n*⏳المدة:* ${hasil.seconds || 'غير متوفر'} ثانية (${hasil.timestamp || 'غير متوفر'})\n*🔎المصدر:* ${hasil.url || 'غير متوفر'}\n\n_ملاحظة : إذا كنت تريد التنزيل_\n_اختر ${prefix}ytmp3 رابط_الفيديو أو ${prefix}ytmp4 رابط_الفيديو_`;
                    await m.reply({ image: { url: hasil.thumbnail }, caption: teksnya })
                } catch (e) {
                    try {
                        const nvl = new NvlGroup();
                        let anu = await nvl.search(text);
                        let hasil = pickRandom(anu.videos)
                        let teksnya = `*📍العنوان:* ${hasil.title || 'غير متوفر'}\n*✏تم الرفع في:* ${hasil.uploaded || 'غير متوفر'}\n*🌟القناة:* ${hasil.author || 'غير متوفر'}\n*⏳المدة:* ${hasil.duration || 'غير متوفر'}\n*🔎المصدر:* ${hasil.url || 'غير متوفر'}\n\n_ملاحظة : إذا كنت تريد التنزيل_\n_اختر ${prefix}ytmp3 رابط_الفيديو أو ${prefix}ytmp4 رابط_الفيديو_`;
                        await m.reply({ image: { url: hasil.thumbnail }, caption: teksnya })
                    } catch (e) {
                        try {
                            const res = await fetchApi('/search/youtube', { query: text });
                            const hasil = pickRandom(res.data)
                            const teksnya = `*📍العنوان:* ${hasil.title || 'غير متوفر'}\n*✏الوصف:* ${hasil.description || 'غير متوفر'}\n*🌟القناة:* ${hasil.channelTitle || 'غير متوفر'}\n*⏳المدة:* ${hasil.duration || 'غير متوفر'}\n*🔎المصدر:* https://youtu.be/${hasil.id || 'غير متوفر'}\n\n_ملاحظة : إذا كنت تريد التنزيل_\n_اختر ${prefix}ytmp3 رابط_الفيديو أو ${prefix}ytmp4 رابط_الفيديو_`;
                            await m.reply({ image: { url: hasil.thumbMedium }, caption: teksnya })
                        } catch (e) {
                            m.reply('لم يتم العثور على المنشور')
                        }
                    }
                }
            }
            break
   			case 'pixiv': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				try {
					let { pixivdl } = require('./lib/pixiv')
					let res = await pixivdl(text)
					m.reply(mess.wait)
					for (let i = 0; i < res.media.length; i++) {
						let caption = i == 0 ? `${res.caption}\n\n*By:* ${res.artist}\n*Tags:* ${res.tags.join(', ')}` : ''
						let mime = (await FileType.fromBuffer(res.media[i])).mime 
						await m.reply({ [mime.split('/')[0]]: res.media[i], caption, mimetype: mime })
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Post not available!')
				}
			}
			break
			case 'pinterest': case 'pint': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				try {
					let anu = await pinterest(text)
					let result = pickRandom(anu)
					if (anu.length < 1) {
						m.reply('Post not available!');
					} else {
						await m.reply({ image: { url: result.images_url }, caption: `*Media Url :* ${result.pin}${result.link ? '\n*Source :* ' + result.link : ''}` })
						setLimit(m, db)
					}
				} catch (e) {
					try {
						const res = await fetchApi('/search/pinterest', { query: text });
						const hasil = pickRandom(res.data.result.pins)
						await m.reply({ image: { url: hasil.media.images.orig.url }, caption: `*Media Url :* ${hasil.media.images.orig.url}${hasil.pin_url ? '\n*Source :* ' + hasil.pin_url : ''}` })
						setLimit(m, db)
					} catch (e) {
						m.reply('Pencarian tidak ditemukan!');
					}
				}
			}
			break
			case 'wallpaper': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				try {
					let anu = await wallpaper(text)
					let result = pickRandom(anu)
					if (anu.length < 1) {
						m.reply('Post not available!');
					} else {
						await m.reply({ image: { url: result.image[0] }, caption: `⭔ title : ${q}\n⭔ category : ${result.type}\n⭔ media url : ${result.image[2] || result.image[1] || result.image[0]}`})
						setLimit(m, db)
					}
				} catch (e) {
					try {
						let anu = await pinterest('wallpaper ' + text)
						let result = pickRandom(anu)
						if (anu.length < 1) {
							m.reply('Post not available!');
						} else {
							await m.reply({ image: { url: result.images_url }, caption: `*Media Url :* ${result.pin}${result.link ? '\n*Source :* ' + result.link : ''}` })
							setLimit(m, db)
						}
					} catch (e) {
						m.reply('Server wallpaper sedang offline!')
					}
				}
			}
			break
			case 'ringtone': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} black rover`)
				try {
					let anu = await ringtone(text)
					let result = pickRandom(anu)
					await m.reply({ audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' })
					setLimit(m, db)
				} catch (e) {
					m.reply('Audio tidak ditemukan!')
				}
			}
			break
			case 'npm': case 'npmjs': {
				if (!text) return m.reply(`Example: ${prefix + command} axios`)
				try {
					let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
					let { objects } = await res.json()
					if (!objects.length) return m.reply('Pencarian Tidak di temukan')
					let txt = objects.map(({ package: pkg }) => {
						return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
					}).join`\n\n`
					m.reply(txt)
				} catch (e) {
					m.reply('Pencarian Tidak di temukan')
				}
			}
			break
			case 'style': {
				if (!text) return m.reply(`Example: ${prefix + command} Naze`)
				let anu = await styletext(text)
				let txt = anu.map(a => `*${a.name}*\n${a.result}`).join`\n\n`
				m.reply(txt)
			}
			break
			case 'spotify': case 'spotifysearch': {
				if (!text) return m.reply(`Example: ${prefix + command} alan walker alone`)
				try {
					let hasil = await fetchJson('https://www.bhandarimilan.info.np/spotisearch?query=' + encodeURIComponent(text));
					let txt = hasil.map(a => {
						return `*Name : ${a.name}*\n- Artist : ${a.artist}\n- Url : ${a.link}`
					}).join`\n\n`
					m.reply(txt)
				} catch (e) {
					m.reply('Server Search Offline!')
				}
			}
			break
			case 'tenor': {
				if (!text) return m.reply(`Example: ${prefix + command} alone`)
				try {
					const anu = await fetchJson('https://g.tenor.com/v1/search?q=' + text + '&key=LIVDSRZULELA')
					const hasil = pickRandom(anu.results)
					await m.reply({ video: { url: hasil.media[0].mp4.url }, caption: `👀 *Media:* ${hasil.url}\n📋 *Description:* ${hasil.content_description}\n🔛 *Url:* ${hasil.itemurl}`, gifPlayback: true, gifAttribution: 2 })
				} catch (e) {
					m.reply('Hasil Tidak Ditemukan!')
				}
			}
			break
			case 'urban': {
				if (!text) return m.reply(`Example: ${prefix + command} alone`)
				try {
					const anu = await fetchJson('https://api.urbandictionary.com/v0/define?term=' + text)
					const hasil = pickRandom(anu.list)
					await m.reply(`${hasil.definition}\n\nSumber: ${hasil.permalink}`)
				} catch (e) {
					m.reply('Hasil Tidak Ditemukan!')
				}
			}
			break
			
			// Stalker Menu
			case 'igstalk': case 'instagramstalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					let anu = await instaStalk(text)
					m.reply({ image: { url: anu.avatar }, caption: `*Username :* ${anu.username}\n*Nickname :* ${anu.nickname}\n*Bio :* ${anu.description}\n*Posts :* ${anu.posts}\n*Followers :* ${anu.followers}\n*Following :* ${anu.following}\n*List Post :* ${anu.list_post.map(a => `\n*Url :* ${a.imageUrl}\n*Description :* ${a.description}\n*Detail :* ${a.detailUrl}`).join('\n')}` })
				} catch (e) {
					try {
						let res = await fetchApi('/stalk/instagram', { username: text });
						m.reply({ image: { url: res.data.profile_picture_url }, caption: `*Username :*${res.data?.username || 'Tidak Ada'}\n*Nickname :*${res.data?.full_name || 'Tidak Ada'}\n*ID :*${res.data?.instagram_id}\n*Followers :*${res.data?.followers || '0'}\n*Following :*${res.data?.following || '0'}\n*Description :*${res.data?.description || 'Tidak Ada'}\n*Website :*${res.data?.website || 'Tidak Ada'}\n*Add At :*${res.data?.added_date}\n*Uploads :*${res.data?.uploads}\n*Verified :*${res.data?.is_verified}\n*Private :*${res.data.is_private}\n` })
					} catch (e) {
						m.reply('Username Tidak ditemukan!')
					}
				}
			}
			break
			case 'wastalk': case 'whatsappstalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} @tag / 628xxx`)
				try {
					let num = m.quoted?.sender || m.mentionedJid?.[0] || text
					if (!num) return m.reply(`Example : ${prefix + command} @tag / 628xxx`)
					num = num.replace(/\D/g, '') + '@s.whatsapp.net'
					if (!(await naze.onWhatsApp(num))[0]?.exists) return m.reply('Nomer tidak terdaftar di WhatsApp!')
					let img = await naze.profilePictureUrl(num, 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
					let bio = await naze.fetchStatus(num).catch(_ => { })
					let name = await naze.getName(num)
					let business = await naze.getBusinessProfile(num)
					let format = PhoneNum(`+${num.split('@')[0]}`)
					let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
					let country = regionNames.of(format.getRegionCode('international'));
					let wea = `WhatsApp Stalk\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : '-'}\n*° Format Number :* ${format.getNumber('international')}\n*° Url Api :* wa.me/${num.split('@')[0]}\n*° Mentions :* @${num.split('@')[0]}\n*° Status :* ${bio?.status || '-'}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `*WhatsApp Business Stalk*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : '-'}\n*° Email :* ${business.email ? business.email : '-'}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : '-'}\n*° Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*° Description* : ${business.description ? business.description : '-'}` : '*Standard WhatsApp Account*'}`
					img ? await naze.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : m.reply(wea)
				} catch (e) {
					m.reply('Nomer Tidak ditemukan!')
				}
			}
			break
			case 'telestalk': case 'telegramstalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const res = await telegramStalk(text)
					if (!res.description || res.title.startsWith('Telegram: Contact')) throw 'Error'
					m.reply({ image: { url: res.image_url }, caption: `*Username :* ${text}\n*Nickname :* ${res.title || 'Tidak ada'}\n*Desc :* ${res.description || 'Tidak ada'}\n*Url :* ${res.url}`})
				} catch (e) {
					m.reply('Username Tidak ditemukan!')
				}
			}
			break
			case 'tiktokstalk': case 'ttstalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const res = await tiktokStalk(text)
					m.reply({ image: { url: res.avatarThumb }, caption: `*Username :* ${text}\n*Nickname :* ${res.nickname}\n*Followers :* ${res.followerCount}\n*Following :* ${res.followingCount}\n*Bio :* ${res.signature}\n*Verified :* ${res.verified}\n*Video Count :* ${res.videoCount}\n*Heart Count :* ${res.heartCount}` })
				} catch (e) {
					m.reply('Username Tidak ditemukan!')
				}
			}
			break
			case 'genshinstalk': case 'gistalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} idnya`)
				try {
					const res = await genshinStalk(text)
					m.reply({ image: { url: res.image }, caption: `*Genshin profile*\n- *ID :* ${res.uid}\n- *Nickname :* ${res.nickname}\n- *Signature :* ${res.signature}\n- *Level :* ${res.level}\n- *World Level :* ${res.world_level}\n- *Achivement :* ${res.achivement}\n- *Spiral Abyss :* ${res.spiral_abyss}\n- *Ttl :* ${res.ttl}` })
				} catch (e) {
					m.reply('Username Tidak ditemukan!')
				}
			}
			break
			case 'ghstalk': case 'githubstalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const res = await fetchJson('https://api.github.com/users/' + text)
					m.reply({ image: { url: res.avatar_url }, caption: `*Username :* ${res.login}\n*Nickname :* ${res.name || 'Tidak ada'}\n*Bio :* ${res.bio || 'Tidak ada'}\n*ID :* ${res.id}\n*Node ID :* ${res.node_id}\n*Type :* ${res.type}\n*Admin :* ${res.admin ? 'Ya' : 'Tidak'}\n*Company :* ${res.company || 'Tidak ada'}\n*Blog :* ${res.blog || 'Tidak ada'}\n*Location :* ${res.location || 'Tidak ada'}\n*Email :* ${res.email || 'Tidak ada'}\n*Public Repo :* ${res.public_repos}\n*Public Gists :* ${res.public_gists}\n*Followers :* ${res.followers}\n*Following :* ${res.following}\n*Created At :* ${res.created_at} *Updated At :* ${res.updated_at}` })
				} catch (e) {
					m.reply('Username Tidak ditemukan!')
				}
			}
			break
			
			// Downloader Menu
			case 'ytmp3': case 'ytaudio': case 'ytplayaudio': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp3(text);
					await m.reply({
						audio: { url: hasil.result },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: hasil.title,
								body: hasil.channel,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.thumb,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					})
					setLimit(m, db)
				} catch (e) {
					try {
						let hasil = await savetube.download(text, 'mp3')
						await naze.sendFileUrl(m.chat, hasil.result.download, hasil.result.title, m)
						setLimit(m, db)
					} catch (e) {
						try {
							const nvl = new NvlGroup();
							let anu = await nvl.download(text);
							await naze.sendFileUrl(m.chat, anu.audio[0].url, anu.audio[0].size, m)
							setLimit(m, db)
						} catch (e) {
							try {
								let hasil = await fetchApi('/download/youtube', { url: text })
								await naze.sendFileUrl(m.chat, hasil.result.audio, hasil.result.title, m)
								setLimit(m, db)
							} catch (e) {
								m.reply('Gagal Mendownload Audio!')
							}
						}
					}
				}
			}
			break
			case 'ytmp4': case 'ytvideo': case 'ytplayvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp4(text);
					await m.reply({ video: hasil.result, caption: `*📍Title:* ${hasil.title}\n*✏Description:* ${hasil.desc ? hasil.desc : ''}\n*🚀Channel:* ${hasil.channel}\n*🗓Upload at:* ${hasil.uploadDate}` })
					setLimit(m, db)
				} catch (e) {
					try {
						let hasil = await savetube.download(text, '360')
						await naze.sendFileUrl(m.chat, hasil.result.download, hasil.result.title, m)
						setLimit(m, db)
					} catch (e) {
						try {
							const nvl = new NvlGroup();
							let anu = await nvl.download(text);
							await naze.sendFileUrl(m.chat, anu.video.find(v => v.height === 360).url || anu.video[0].url, 'Done', m)
							setLimit(m, db)
						} catch (e) {
							try {
								let hasil = await fetchApi('/download/youtube', { url: text })
								await naze.sendFileUrl(m.chat, hasil.result.video, hasil.result.title, m)
								setLimit(m, db)
							} catch (e) {
								m.reply('Gagal Mendownload Audio!')
							}
						}
					}
				}
			}
			break
			case 'ig': case 'instagram': case 'instadl': case 'igdown': case 'igdl': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_instagram`)
				if (!text.includes('instagram.com')) return m.reply('Url Tidak Mengandung Result Dari Instagram!')
				m.reply(mess.wait)
				try {
					const hasil = await instagramDl(text);
					if(hasil.length < 0) return m.reply('Postingan Tidak Tersedia atau Privat!')
					for (let i = 0; i < hasil.length; i++) {
						await naze.sendFileUrl(m.chat, hasil[i].url, 'Done', m)
					}
					setLimit(m, db)
				} catch (e) {
					try {
						let hasil = await fetchApi('/download/instagram', { url: text })
						if(hasil.result.url.length < 0) return m.reply('Postingan Tidak Tersedia atau Privat!')
						for (let i = 0; i < hasil.result.url.length; i++) {
							await naze.sendFileUrl(m.chat, hasil.result.url[i], 'Done', m)
						}
						setLimit(m, db)
					} catch (e) {
						m.reply('Postingan Tidak Tersedia atau Privat!')
					}
				}
			}
			break
			case 'igstory': case 'instagramstory': case 'instastory': case 'storyig': {
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const hasil = await instaStory(text);
					m.reply(mess.wait)
					for (let i = 0; i < hasil.results.length; i++) {
						await naze.sendFileUrl(m.chat, hasil.results[i].url, 'Done', m)
					}
				} catch (e) {
					m.reply('Username tidak ditemukan atau Privat!');
				}
			}
			break
			case 'tiktok': case 'tiktokdown': case 'ttdown': case 'ttdl': case 'tt': case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
					const hasil = await tiktokDl(text);
					m.reply(mess.wait)
					if (hasil && hasil.size_nowm) {
						await naze.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m)
					} else {
						for (let i = 0; i < hasil.data.length; i++) {
							await naze.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i+1}`, m)
						}
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal/Url tidak valid!')
				}
			}
			break
			case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
					const hasil = await tiktokDl(text);
					m.reply(mess.wait)
					await m.reply({
						audio: { url: hasil.music_info.url },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: 'TikTok • ' + hasil.author.nickname,
								body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.cover,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					})
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal/Url tidak valid!')
				}
			}
			break
			case 'fb': case 'fbdl': case 'fbdown': case 'facebook': case 'facebookdl': case 'facebookdown': case 'fbdownload': case 'fbmp4': case 'fbvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_facebook`)
				if (!text.includes('facebook.com')) return m.reply('Url Tidak Mengandung Result Dari Facebook!')
				try {
					const hasil = await facebookDl(text);
					if (hasil.results.length < 1) {
						m.reply('Video Tidak ditemukan!')
					} else {
						m.reply(mess.wait)
						await naze.sendFileUrl(m.chat, hasil.results[0].url, `*🎐Title:* ${hasil.caption}`, m);
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Server downloader facebook sedang offline!')
				}
			}
			break
			case 'mediafire': case 'mf': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`)
				if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply('Url Invalid!')
				try {
					const anu = await mediafireDl(text)
					await m.reply({ document: { url: anu.link }, caption: `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${anu.name}\n*${setv} Size* : ${anu.size}\n*${setv} Type* : ${anu.type}\n*${setv} Upload At* : ${anu.upload_date}\n*${setv} Link* : ${anu.link}`, fileName: anu.name, mimetype: anu.type })
					setLimit(m, db)
				} catch (e) {
					try {
						let anu = await fetchApi('/download/mediafire', { url: text })
						await naze.sendMedia(m.chat, anu.data.url, anu.data.filename, `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${anu.data.filename}\n*${setv} Size* : ${anu.data.size}`, m)
						setLimit(m, db)
					} catch (e) {
						m.reply('Server download sedang offline!')
					}
				}
			}
			break
			case 'spotifydl': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnmlwCZ854K4p`)
				if (!isUrl(args[0]) && !args[0].includes('open.spotify.com/track')) return m.reply('Url Invalid!')
				try {
					const hasil = await spotifyDl(text);
					m.reply(mess.wait)
					await m.reply({
						audio: { url: hasil.download },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: hasil.title,
								body: clockString(hasil.duration),
								previewType: 'PHOTO',
								thumbnailUrl: hasil.cover,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					})
					setLimit(m, db)
				} catch (e) {
					console.log(e)
					m.reply('Server download sedang offline!')
				}
			}
			break
			
			// Quotes Menu
			case 'motivasi': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/motivasi.json');
				m.reply(pickRandom(hasil))
			}
			break
			case 'bijak': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/bijak.json');
				m.reply(pickRandom(hasil))
			}
			break
			case 'dare': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/dare.json');
				m.reply(pickRandom(hasil))
			}
			break
			case 'quotes': {
				const res = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/quotes.json');
				const hasil = pickRandom(res);
				m.reply(`_${hasil.quotes}_\n\n*- ${hasil.author}*`)
			}
			break
			case 'truth': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/truth.json');
				m.reply(`_${pickRandom(hasil)}_`)
			}
			break
			case 'renungan': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/renungan.json');
				m.reply('', {
					contextInfo: {
						forwardingScore: 10,
						isForwarded: true,
						externalAdReply: {
							title: (m.pushName || 'Anonim'),
							thumbnailUrl: pickRandom(hasil),
							mediaType: 1,
							previewType: 'PHOTO',
							renderLargerThumbnail: true,
						}
					}
				});
			}
			break
			case 'bucin': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/bucin.json');
				m.reply(pickRandom(hasil))
			}
			break
			
			// Random Menu
			case 'coffe': case 'kopi': {
				try {
					await naze.sendFileUrl(m.chat, 'https://coffee.alexflipnote.dev/random', '☕ Random Coffe', m)
				} catch (e) {
					try {
						const anu = await fetchJson('https://api.sampleapis.com/coffee/hot')
						await naze.sendFileUrl(m.chat, pickRandom(anu).image, '☕ Random Coffe', m)
					} catch (e) {
						m.reply('Server Sedang Offline!')
					}
				}
			}
			break
			
			// Anime Menu
			case 'waifu': case 'neko': {
				try {
					if (!isNsfw && text === 'nsfw') return m.reply('Filter Nsfw Sedang Aktif!')
					const res = await fetchJson('https://api.waifu.pics/' + (text === 'nsfw' ? 'nsfw' : 'sfw') + '/' + command)
					await naze.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					setLimit(m, db)
				} catch (e) {
					m.reply('Server sedang offline!')
				}
			}
			break
			
			// Fun Menu
			case 'dadu': {
				let ddsa = [{ url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png', no: 1 },{ url: 'https://telegra.ph/file/797f86e444755282374ef.png', no: 2 },{ url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png', no: 3 },{ url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png', no: 4 },{ url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png', no: 5 },{ url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png', no: 6 }]
				let media = pickRandom(ddsa)
				try {
					await naze.sendAsSticker(m.chat, media.url, m, { packname, author, isAvatar: 1 })
				} catch (e) {
					let anu = await fetch(media.url)
					let una = await anu.buffer()
					await naze.sendAsSticker(m.chat, una, m, { packname, author, isAvatar: 1 })
				}
			}
			break
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
				if (!m.quoted && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
				ter = command[1].toLowerCase()
				tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
				m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
			}
			break
			case 'bisakah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya menang?`)
				let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
				let keh = bisa[Math.floor(Math.random() * bisa.length)]
				m.reply(`*Bisakah ${text}*\nJawab : ${keh}`)
			}
			break
			case 'apakah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya bisa menang?`)
				let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Mungkin Tidak','Mungkin Iya','Ntahlah']
				let kah = apa[Math.floor(Math.random() * apa.length)]
				m.reply(`*${command} ${text}*\nJawab : ${kah}`)
			}
			break
			case 'kapan': case 'kapankah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya menang?`)
				let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Ntahlah','Tidak Akan Pernah']
				let koh = kapan[Math.floor(Math.random() * kapan.length)]
				m.reply(`*${command} ${text}*\nJawab : ${koh}`)
			}
			break
			case 'siapa': case 'siapakah': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!text) return m.reply(`Example : ${prefix + command} jawa?`)
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let siapakh = pickRandom(member)
				m.reply(`@${siapakh.split('@')[0]}`);
			}
			break
			case 'tanyakerang': case 'kerangajaib': case 'kerang': {
				if (!text) return m.reply(`Example : ${prefix + command} boleh pinjam 100?`)
				let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
				let jwb = pickRandom(krng)
				m.reply(`*Pertanyaan : ${text}*\n*Jawab : ${jwb}*`)
			}
			break
			case 'cekmati': {
				if (!text) return m.reply(`Example : ${prefix + command} nama lu`)
				let teksnya = text.replace(/@|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').replace(/\d/g, '');
				let data = await axios.get(`https://api.agify.io/?name=${teksnya ? teksnya : 'bot'}`).then(res => res.data).catch(e => ({ age: Math.floor(Math.random() * 90) + 20 }));
				m.reply(`Nama : ${text}\n*Mati Pada Umur :* ${data.age == null ? (Math.floor(Math.random() * 90) + 20) : data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`)
			}
			break
			case 'ceksifat': {
				let sifat_a = ['Bijak','Sabar','Kreatif','Humoris','Mudah bergaul','Mandiri','Setia','Jujur','Dermawan','Idealis','Adil','Sopan','Tekun','Rajin','Pemaaf','Murah hati','Ceria','Percaya diri','Penyayang','Disiplin','Optimis','Berani','Bersyukur','Bertanggung jawab','Bisa diandalkan','Tenang','Kalem','Logis']
				let sifat_b = ['Sombong','Minder','Pendendam','Sensitif','Perfeksionis','Caper','Pelit','Egois','Pesimis','Penyendiri','Manipulatif','Labil','Penakut','Vulgar','Tidak setia','Pemalas','Kasar','Rumit','Boros','Keras kepala','Tidak bijak','Pembelot','Serakah','Tamak','Penggosip','Rasis','Ceroboh','Intoleran']
				let teks = `╭──❍「 *Cek Sifat* 」❍\n│• Sifat ${text && m.mentionedJid ? text : '@' + m.sender.split('@')[0]}${(text && m.mentionedJid ? '' : (`\n│• Nama : *${text ? text : m.pushName}*` || '\n│• Nama : *Tanpa Nama*'))}\n│• Orang yang : *${pickRandom(sifat_a)}*\n│• Kekurangan : *${pickRandom(sifat_b)}*\n│• Keberanian : *${Math.floor(Math.random() * 100)}%*\n│• Kepedulian : *${Math.floor(Math.random() * 100)}%*\n│• Kecemasan : *${Math.floor(Math.random() * 100)}%*\n│• Ketakutan : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Baik : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Buruk : *${Math.floor(Math.random() * 100)}%*\n╰──────❍`
				m.reply(teks)
			}
			break
			case 'cekkhodam': {
				if (!text) return m.reply(`Example : ${prefix + command} nama lu`)
				try {
					const res = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/random/cekkhodam.json');
					const hasil = pickRandom(res);
					m.reply(`Khodam dari *${text}* adalah *${hasil.nama}*\n_${hasil.deskripsi}_`)
				} catch (e) {
					m.reply(pickRandom(['Dokter Indosiar','Sigit Rendang','Ustadz Sinetron','Bocil epep']))
				}
			}
			break
			case 'rate': case 'nilai': {
				m.reply(`Rate Bot : *${Math.floor(Math.random() * 100)}%*`)
			}
			break
			case 'jodohku': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata?.[m.chat]?.participants || m.metadata?.participants || []).map(a => a.id)
				let jodoh = pickRandom(member)
				m.reply(`👫Jodoh mu adalah\n@${m.sender.split('@')[0]} ❤ @${jodoh ? jodoh.split('@')[0] : '0'}`);
			}
			break
			case 'jadian': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata?.[m.chat]?.participants || m.metadata?.participants || []).map(a => a.id)
				let jadian1 = pickRandom(member)
				let jadian2 = pickRandom(member)
				m.reply(`Ciee yang Jadian💖 Jangan lupa Donasi🗿\n@${jadian1.split('@')[0]} ❤ @${jadian2.split('@')[0]}`);
			}
			break
			case 'fitnah': {
				let [teks1, teks2, teks3] = text.split`|`
				if (!teks1 || !teks2 || !teks3) return m.reply(`Example : ${prefix + command} pesan target|pesan mu|nomer/tag target`)
				let ftelo = { key: { fromMe: false, participant: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net', ...(m.isGroup ? { remoteJid: m.chat } : { remoteJid: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net'})}, message: { conversation: teks1 }}
				naze.sendMessage(m.chat, { text: teks2 }, { quoted: ftelo });
			}
			break
			case 'coba': {
				let anu = ['Aku Monyet','Aku Kera','Aku Tolol','Aku Kaya','Aku Dewa','Aku Anjing','Aku Dongo','Aku Raja','Aku Sultan','Aku Baik','Aku Hitam','Aku Suki']
				await naze.sendButtonMsg(m.chat, {
					text: 'Semoga Hoki😹',
					buttons: [{
						buttonId: 'teshoki',
						buttonText: { displayText: '\n' + pickRandom(anu)},
						type: 1
					},{
						buttonId: 'cobacoba',
						buttonText: { displayText: '\n' + pickRandom(anu)},
						type: 1
					}]
				})
			}
			break
			
			// Game Menu
			case 'slot': {
				await gameSlot(naze, m, db)
			}
			break
			case 'casino': {
				await gameCasinoSolo(naze, m, prefix, db)
			}
			break
			case 'samgong': case 'kartu': {
				await gameSamgongSolo(naze, m, db)
			}
			break
			case 'rampok': case 'merampok': {
				await gameMerampok(m, db)
			}
			break
			case 'begal': {
				await gameBegal(naze, m, db)
			}
			break
			case 'suitpvp': case 'suit': {
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return m.reply(`Selesaikan suit mu yang sebelumnya`)
				if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
				if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${ownerNumber[0]}`, m.chat, { mentions: [ownerNumber[1] + '@s.whatsapp.net'] })
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
				let caption = `_*SUIT PvP*_\n\n@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit\n\nSilahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
				let id = 'suit_' + Date.now();
				suit[id] = {
					chat: caption,
					id: id,
					p: m.sender,
					p2: m.mentionedJid[0],
					status: 'wait',
					poin: 10,
					poin_lose: 10,
					timeout: 3 * 60 * 1000
				}
				m.reply(caption)
				await sleep(3 * 60 * 1000)
				if (suit[id]) {
					m.reply(`_Waktu suit habis_`)
					delete suit[id]
				}
			}
			break
			case 'delsuit': case 'deletesuit': {
				let roomnya = Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))
				if (!roomnya) return m.reply(`Kamu sedang tidak berada di room suit !`)
				delete suit[roomnya.id]
				m.reply(`Berhasil delete session room suit !`)
			}
			break
			case 'ttc': case 'ttt': case 'tictactoe': {
				if (Object.values(tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`Kamu masih didalam game!\nKetik *${prefix}del${command}* Jika Ingin Mengakhiri sesi`);
				let room = Object.values(tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
				if (room) {
					m.reply('Partner ditemukan!')
					room.o = m.chat
					room.game.playerO = m.sender
					room.state = 'PLAYING'
					if (!(room.game instanceof TicTacToe)) {
						room.game = Object.assign(new TicTacToe(room.game.playerX, room.game.playerO), room.game)
					}
					let arr = room.game.render().map(v => {
						return {X: '❌',O: '⭕',1: '1️⃣',2: '2️⃣',3: '3️⃣',4: '4️⃣',5: '5️⃣',6: '6️⃣',7: '7️⃣',8: '8️⃣',9: '9️⃣'}[v]
					})
					let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nMenunggu @${room.game.currentTurn.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
					if (room.x !== room.o) await naze.sendMessage(room.x, { texr: str, mentions: parseMention(str) }, { quoted: m })
					await naze.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
				} else {
					room = {
						id: 'tictactoe-' + (+new Date),
						x: m.chat,
						o: '',
						game: new TicTacToe(m.sender, 'o'),
						state: 'WAITING',
					}
					if (text) room.name = text
					naze.sendMessage(m.chat, { text: 'Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''), mentions: m.mentionedJid }, { quoted: m })
					tictactoe[room.id] = room
					await sleep(300000)
					if (tictactoe[room.id]) {
						m.reply(`_Waktu ${command} habis_`)
						delete tictactoe[room.id]
					}
				}
			}
			break
			case 'delttc': case 'delttt': {
				let roomnya = Object.values(tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
				if (!roomnya) return m.reply(`Kamu sedang tidak berada di room tictactoe !`)
				delete tictactoe[roomnya.id]
				m.reply(`Berhasil delete session room tictactoe !`)
			}
			break
			case 'akinator': {
				if (text == 'start') {
					if (akinator[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
					akinator[m.sender] = new Akinator({ region: 'id', childMode: false });
					try {
						await akinator[m.sender].start()
					} catch (e) {
						delete akinator[m.sender];
						return m.reply('Server Akinator Sedang Gangguan\nSilahkan coba lagi nanti!')
					}
					let { key } = await m.reply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]}\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n\n${prefix + command} end (Untuk Keluar dari sesi)`)
					akinator[m.sender].key = key.id
					await sleep(3600000)
					if (akinator[m.sender]) {
						m.reply(`_Waktu ${command} habis_`)
						delete akinator[m.sender];
					}
				} else if (text == 'end') {
					if (!akinator[m.sender]) return m.reply('Kamu tidak Sedang bermain Akinator!')
					delete akinator[m.sender];
					m.reply('Sukses Mengakhiri sessi Akinator')
				} else m.reply(`Example : ${prefix + command} start/end`)
			}
			break
			case 'tebakbom': {
				if (tebakbom[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				tebakbom[m.sender] = {
					petak: [0, 0, 0, 2, 0, 2, 0, 2, 0, 0].sort(() => Math.random() - 0.5),
					board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
					bomb: 3,
					lolos: 7,
					pick: 0,
					nyawa: ['❤️', '❤️', '❤️'],
				}
				await m.reply(`*TEBAK BOM*\n\n${tebakbom[m.sender].board.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${tebakbom[m.sender].bomb}\nNyawa : ${tebakbom[m.sender].nyawa.join("")}`);
				await sleep(120000)
				if (tebakbom[m.sender]) {
					m.reply(`_Waktu ${command} habis_`)
					delete tebakbom[m.sender];
				}
			}
			break
			case 'tekateki': {
				if (iGame(tekateki, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tekateki.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Teka Teki Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				tekateki[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tekateki, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tekateki[m.chat + key.id].jawaban)
					delete tekateki[m.chat + key.id]
				}
			}
			break
			case 'tebaklirik': {
				if (iGame(tebaklirik, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebaklirik.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Lirik Berikut :\n\n${hasil.soal}\n\nWaktu : 90s\nHadiah *+4299*`)
				tebaklirik[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(90000)
				if (rdGame(tebaklirik, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebaklirik[m.chat + key.id].jawaban)
					delete tebaklirik[m.chat + key.id]
				}
			}
			break
			case 'tebakkata': {
				if (iGame(tebakkata, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkata.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkata, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakkata[m.chat + key.id].jawaban)
					delete tebakkata[m.chat + key.id]
				}
			}
			break
			case 'family100': {
				if (family100.hasOwnProperty(m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/family100.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 5m\nHadiah *+3499*`)
				family100[m.chat] = {
					soal: hasil.soal,
					jawaban: hasil.jawaban,
					terjawab: Array.from(hasil.jawaban, () => false),
					id: key.id
				}
				await sleep(300000)
				if (family100.hasOwnProperty(m.chat)) {
					m.reply('Waktu Habis\nJawaban:\n- ' + family100[m.chat].jawaban.join('\n- '))
					delete family100[m.chat]
				}
			}
			break
			case 'susunkata': {
				if (iGame(susunkata, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/susunkata.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Susun Kata Berikut :\n\n${hasil.soal}\nTipe : ${hasil.tipe}\n\nWaktu : 60s\nHadiah *+2989*`)
				susunkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(susunkata, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + susunkata[m.chat + key.id].jawaban)
					delete susunkata[m.chat + key.id]
				}
			}
			break
			case 'tebakkimia': {
				if (iGame(tebakkimia, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkimia.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Kimia Berikut :\n\n${hasil.unsur}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkimia[m.chat + key.id] = {
					jawaban: hasil.lambang.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkimia, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakkimia[m.chat + key.id].jawaban)
					delete tebakkimia[m.chat + key.id]
				}
			}
			break
			case 'caklontong': {
				if (iGame(caklontong, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/caklontong.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Jawab Pertanyaan Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+9999*`)
				caklontong[m.chat + key.id] = {
					...hasil,
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(caklontong, m.chat, key.id)) {
					m.reply(`Waktu Habis\nJawaban: ${caklontong[m.chat + key.id].jawaban}\n"${caklontong[m.chat + key.id].deskripsi}"`)
					delete caklontong[m.chat + key.id]
				}
			}
			break
			case 'tebaknegara': {
				if (iGame(tebaknegara, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebaknegara.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Negara Dari Tempat Berikut :\n\n*Tempat : ${hasil.tempat}*\n\nWaktu : 60s\nHadiah *+3499*`)
				tebaknegara[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebaknegara, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebaknegara[m.chat + key.id].jawaban)
					delete tebaknegara[m.chat + key.id]
				}
			}
			break
			case 'tebakgambar': {
				if (iGame(tebakgambar, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakgambar.json');
				const hasil = pickRandom(soal);
				let { key } = await naze.sendFileUrl(m.chat, hasil.img, `🎮 Tebak Gambar Berikut :\n\n${hasil.deskripsi}\n\nWaktu : 60s\nHadiah *+3499*`, m)
				tebakgambar[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakgambar, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakgambar[m.chat + key.id].jawaban)
					delete tebakgambar[m.chat + key.id]
				}
			}
			break
			case 'tebakbendera': {
				if (iGame(tebakbendera, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakbendera.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Bendera Berikut :\n\n*Bendera : ${hasil.bendera}*\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakbendera[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakbendera, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakbendera[m.chat + key.id].jawaban)
					delete tebakbendera[m.chat + key.id]
				}
			}
			break
			case 'tebakangka': case 'butawarna': case 'colorblind': {
				if (iGame(tebakangka, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/random/color_blind.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply({
					text: `Pilih Jawaban Yang Benar!\nPilihan: ${[hasil.number, ...hasil.similar].sort(() => Math.random() - 0.5).join(', ')}`,
					contextInfo: {
						externalAdReply: {
							renderLargerThumbnail: true,
							thumbnailUrl: hasil.color_blind[0],
							body: `Level : ${hasil.lv}`,
							previewType: 0,
							mediaType: 1,
						}
					}
				});
				tebakangka[m.chat + key.id] = {
					jawaban: hasil.number,
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakangka, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakangka[m.chat + key.id].jawaban)
					delete tebakangka[m.chat + key.id]
				}
			}
			break
			case 'kuismath': case 'math': {
				const { genMath, modes } = require('./lib/math');
				const inputMode = ['noob', 'easy', 'medium', 'hard','extreme','impossible','impossible2'];
				if (iGame(kuismath, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
				if (!inputMode.includes(text.toLowerCase())) return m.reply('Mode tidak ditemukan!')
				let result = await genMath(text.toLowerCase())
				let { key } = await m.reply(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu : ${(result.waktu / 1000).toFixed(2)} detik`)
				kuismath[m.chat + key.id] = {
					jawaban: result.jawaban,
					mode: text.toLowerCase(),
					id: key.id
				}
				await sleep(kuismath, result.waktu)
				if (rdGame(m.chat + key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + kuismath[m.chat + key.id].jawaban)
					delete kuismath[m.chat + key.id]
				}
			}
			break
			case 'ulartangga': case 'snakeladder': case 'ut': {
				if (!m.isGroup) return m.reply(mess.group)
				if (ulartangga[m.chat] && !(ulartangga[m.chat] instanceof SnakeLadder)) {
					ulartangga[m.chat] = Object.assign(new SnakeLadder(ulartangga[m.chat]), ulartangga[m.chat]);
				}
				switch(args[0]) {
					case 'create': case 'join':
					if (ulartangga[m.chat]) {
						if (Object.keys(ulartangga[m.chat].players).length > 8) return m.reply(`Jumlah Pemain Sudah Maksimal\nSilahkan Memulai Permainan\n${prefix + command} start`);
						if (ulartangga[m.chat].players.some(a => a.id == m.sender)) return m.reply('Kamu Sudah Bergabung!')
						ulartangga[m.chat].players.push({ id: m.sender, move: 0 });
						m.reply('Sukses Join Sesi Game')
					} else {
						ulartangga[m.chat] = new SnakeLadder({ id: m.chat, host: m.sender });
						ulartangga[m.chat].players.push({ id: m.sender, move: 0 });
						ulartangga[m.chat].time = Date.now();
						m.reply('Sukses Membuat Sesi Game')
					}
					break
					case 'start':
					if (!ulartangga[m.chat]) return m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
					if (ulartangga[m.chat].players.length < 2) return m.reply('Jumlah Pemain Kurang!\nMinimal 2 Pemain!')
					if (ulartangga[m.chat].start) return m.reply('Sesi Sudah dimulai Sejak Awal!')
					if (ulartangga[m.chat].host !== m.sender) return m.reply(`Hanya Pembuat Room @${ulartangga[m.chat].host.split('@')[0]} yang bisa Memulai Sessi!`)
					let { key } = await m.reply({ image: { url: ulartangga[m.chat].map.url }, caption: `🐍🪜GAME ULAR TANGGA\n\n${ulartangga[m.chat].players.map((p, i) => `- @${p.id.split('@')[0]} (Pion ${['Merah', 'Biru Muda', 'Kuning', 'Hijau', 'Ungu', 'Jingga', 'Biru Tua', 'Putih'][i]})`).join('\n')}\n\nGiliran: @${m.sender.split('@')[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: roll/kocok`, mentions: ulartangga[m.chat].players.map(p => p.id)});
					ulartangga[m.chat].id = key.id
					ulartangga[m.chat].start = true
					break
					case 'leave':
					if (!ulartangga[m.chat]) return m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
					if (!ulartangga[m.chat].players.some(a => a.id == m.sender)) return m.reply('Kamu Bukan Pemain!')
					const player = ulartangga[m.chat].players.findIndex(a => a.id == m.sender)
					if (ulartangga[m.chat].start) return m.reply('Game Sudah dimulai!\nTidak Bisa Keluar Sekarang')
					if (ulartangga[m.chat].players.length < 1 || ulartangga[m.chat].host === m.sender) {
						m.reply(ulartangga[m.chat].host === m.sender ? 'Host Meninggalkan Permainan\nPermainan dihentikan!' : 'Pemain Kurang Dari 1, Permainan dihentikan!');
						delete ulartangga[m.chat];
						break;
					}
					ulartangga[m.chat].players.splice(player, 1);
					m.reply('Sukses Meninggalkan Permainan');
					break
					case 'end':
					if (!ulartangga[m.chat]) return m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
					if (ulartangga[m.chat]?.host !== m.sender) return m.reply(`Hanya Pembuat Room @${ulartangga[m.chat].host.split('@')[0]} yang bisa Menghapus Sessi!`)
					delete ulartangga[m.chat]
					m.reply('Berhasil Menghapus Sesi Game')
					break
					default:
					m.reply(`🐍🪜GAME ULARTANGGA\nCommand: ${prefix + command} <command>\n- create\n- join\n- start\n- leave\n- end`)
				}
			}
			break
			case 'chess': case 'catur': case 'ct': {
				const { DEFAUT_POSITION } = require('chess.js');
				if (!m.isGroup) return m.reply(mess.group)
				if (chess[m.chat] && !(chess[m.chat] instanceof Chess)) {
					chess[m.chat] = Object.assign(new Chess(chess[m.chat].fen), chess[m.chat]);
				}
				switch(args[0]) {
					case 'start':
					if (!chess[m.chat]) return m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
					if (!chess[m.chat].acc) return m.reply('Pemain Tidak Lengkap!')
					if (chess[m.chat].player1 !== m.sender) return m.reply('Hanya Pemain Utama Yang bisa Memulai!')
					if (chess[m.chat].turn !== m.sender && !chess[m.chat].start) {
						const encodedFen = encodeURI(chess[m.chat]._fen);
						let boardUrls = [`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside`,`https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside`,`https://chessboardimage.com/${encodedFen}.png`,`https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}`,`https://fen2image.chessvision.ai/${encodedFen}`];
						for (let url of boardUrls) {
							try {
								const { data } = await axios.get(url, { responseType: 'arraybuffer' });
								let { key } = await m.reply({ image: data, caption: `♟️${command.toUpperCase()} GAME\n\nGiliran: @${m.sender.split('@')[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: from to -> b1 c3`, mentions: [m.sender] });
								chess[m.chat].start = true
								chess[m.chat].turn = m.sender
								chess[m.chat].id = key.id;
								return;
							} catch (e) {}
						}
						if (!chess[m.chat].key) {
							m.reply(`Gagal Memulai Permainan!\nGagal Mengirim Papan Permainan!`)
						}
					} else if ([chess[m.chat].player1, chess[m.chat].player2].includes(m.sender)) {
						const isPlayer2 = chess[m.chat].player2 === m.sender
						const nextPlayer = isPlayer2 ? chess[m.chat].player1 : chess[m.chat].player2;
						const encodedFen = encodeURI(chess[m.chat]._fen);
						const boardUrls = [`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside${!isPlayer2 ? '&flip=true' : ''}`,`https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${!isPlayer2 ? '&flip=true' : ''}`,`https://chessboardimage.com/${encodedFen}${!isPlayer2 ? '-flip' : ''}.png`,`https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}&coordinates=true&size=765${!isPlayer2 ? '&orientation=black' : ''}`,`https://fen2image.chessvision.ai/${encodedFen}/${!isPlayer2 ? '?pov=black' : ''}`];
						for (let url of boardUrls) {
							try {
								chess[m.chat].turn = chess[m.chat].turn === m.sender ? m.sender : nextPlayer;
								const { data } = await axios.get(url, { responseType: 'arraybuffer' });
								let { key } = await m.reply({ image: data, caption: `♟️CHESS GAME\n\nGiliran: @${chess[m.chat].turn.split('@')[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: from to -> b1 c3`, mentions: [chess[m.chat].turn] });
								chess[m.chat].id = key.id;
								break;
							} catch (e) {}
						}
					}
					break
					case 'join':
					if (chess[m.chat]) {
						if (chess[m.chat].player1 !== m.sender) {
							if (chess[m.chat].acc) return m.reply(`Pemain Sudah Terisi\nSilahkan Coba Lagi Nanti`)
							let teks = chess[m.chat].player2 === m.sender ? 'TerimaKasih Sudah Mau Bergabung' : `Karena @${chess[m.chat].player2.split('@')[0]} Tidak Merespon\nAkan digantikan Oleh @${m.sender.split('@')[0]}`
							chess[m.chat].player2 = m.sender
							chess[m.chat].acc = true
							m.reply(`${teks}\nSilahkan @${chess[m.chat].player1.split('@')[0]} Untuk Memulai Game (${prefix + command} start)`)
						} else m.reply(`Kamu Sudah Bergabung\nBiarkan Orang Lain Menjadi Lawanmu!`)
					} else m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
					break
					case 'end': case 'leave':
					if (chess[m.chat]) {
						if (![chess[m.chat].player1, chess[m.chat].player2].includes(m.sender)) return m.reply('Hanya Pemain yang Bisa Menghentikan Permainan!')
						delete chess[m.chat]
						m.reply('Sukses Menghapus Sesi Game')
					} else m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
					break
					case 'bot': case 'computer':
					if (chess[m.sender]) {
						delete chess[m.sender];
						return m.reply('Sukses Menghapus Sesi vs BOT')
					} else {
						chess[m.sender] = new Chess(DEFAUT_POSITION);
						chess[m.sender]._fen = chess[m.sender].fen();
						chess[m.sender].turn = m.sender;
						chess[m.sender].botMode = true;
						chess[m.sender].time = Date.now();
						const encodedFen = encodeURI(chess[m.sender]._fen);
						const boardUrls = [`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside`,`https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside`,`https://chessboardimage.com/${encodedFen}.png`,`https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}&coordinates=true&size=765`,`https://fen2image.chessvision.ai/${encodedFen}/`];
						for (let url of boardUrls) {
							try {
								const { data } = await axios.get(url, { responseType: 'arraybuffer' });
								let { key } = await m.reply({ image: data, caption: `♟️CHESS GAME\n\nGiliran: @${chess[m.sender].turn.split('@')[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: from to -> b1 c3`, mentions: [chess[m.sender].turn] });
								chess[m.sender].id = key.id;
								break;
							} catch (e) {}
						}
					}
					break
					default:
					if (/^@?\d+$/.test(args[0])) {
						if (chess[m.chat]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
						if (m.mentionedJid.length < 1) return m.reply('Tag Orang yang Mau diajak Bermain!')
						chess[m.chat] = new Chess(DEFAUT_POSITION);
						chess[m.chat]._fen = chess[m.chat].fen();
						chess[m.chat].player1 = m.sender
						chess[m.chat].player2 = m.mentionedJid ? m.mentionedJid[0] : null
						chess[m.chat].time = Date.now();
						chess[m.chat].turn = null
						chess[m.chat].acc = false
						m.reply(`♟️${command.toUpperCase()} GAME\n\n@${m.sender.split('@')[0]} Menantang @${m.mentionedJid[0].split('@')[0]}\nUntuk Bergabung ${prefix + command} join`)
					} else {
						m.reply(`♟️${command.toUpperCase()} GAME\n\nExample: ${prefix + command} @tag/number\n- start\n- leave\n- join\n- computer\n- end`)
					}
				}
				
			}
			break
			case 'blackjack': case 'bj': {
				let session = null;
				for (let id in blackjack) {
					if (blackjack[id].players.find(p => p.id === m.sender)) {
						session = blackjack[id];
						break;
					}
				}
				if (session && !(session instanceof Blackjack)) {
					session = Object.assign(new Blackjack(session), session)
				}
				if (blackjack[m.chat] && !(blackjack[m.chat] instanceof Blackjack)) {
					blackjack[m.chat] = Object.assign(new Blackjack(blackjack[m.chat]), blackjack[m.chat])
				}
				switch(args[0]) {
					case 'create': case 'join':
					if (!m.isGroup) return m.reply(mess.group)
					if (blackjack[m.chat] || session) {
						if (blackjack[m.chat]?.players?.some(a => a.id === m.sender)) return m.reply('Kamu Sudah Bergabung!')
						if (session) return m.reply('Kamu sudah bergabung di sesi Grup lain! Keluar dulu sebelum bergabung di sesi baru.');
						if (blackjack[m.chat].players.length > 10) return m.reply(`Jumlah Pemain Sudah Maksimal\nSilahkan Memulai Permainan\n${prefix + command} start`);
						blackjack[m.chat].players.push({ id: m.sender, cards: [] });
						m.reply('Sukses Join Game Blackjack')
					} else {
						blackjack[m.chat] = new Blackjack({ id: m.chat, host: m.sender });
						blackjack[m.chat].players.push({ id: m.sender, cards: [] });
						m.reply('Sukses Create Game Blackjack')
					}
					break
					case 'start':
					if (!m.isGroup) return m.reply(mess.group)
					if (!blackjack[m.chat]) return m.reply('Tidak Ada Sesi Game Blackjack yang Sedang Berjalan!')
					if (blackjack[m.chat]?.host !== m.sender) return m.reply(`Hanya Pembuat Room @${blackjack[m.chat].host.split('@')[0]} yang bisa Memulai Sessi!`)
					if (blackjack[m.chat].players.length < 2) return m.reply('Minimal 2 Pemain Untuk Memulai Permainan!');
					if (blackjack[m.chat].started) return m.reply('Game Sudah Dimulai Sejak Awal!')
					blackjack[m.chat].distributeCards();
					m.reply(`🃏GAME BLACKJACK♦️\nStart Card: ${blackjack[m.chat].startCard.rank + blackjack[m.chat].startCard.suit}\nDeck Count: ${blackjack[m.chat].deck.length}\n${blackjack[m.chat].players.map(a => `- @${a.id.split('@')[0]} : (${a.cards.length} kartu)`).join('\n')}\n\nCek Private Chat\nwa.me/${botNumber.split('@')[0]}`);
					for (let p of blackjack[m.chat].players) {
						const startCard = blackjack[m.chat].startCard;
						let buttons = p.cards.map(a => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${a.rank}${a.suit}`, id: `.${command} play ${a.rank}${a.suit}` })}));
						if (!blackjack[m.chat].hasMatching(p.id)) buttons.push({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: 'Minum', id: `.${command} minum` }) });
						await naze.sendListMsg(p.id, { text: `Start Card: ${startCard.rank + startCard.suit}`, footer: `${p.cards.map(c => c.rank + c.suit).join(', ')}`, buttons }, { quoted: m });
					}
					break
					case 'hit': case 'minum': {
						if (!session) return m.reply('Tidak Ada Sesi Game Blackjack yang Sedang Berjalan!')
						if (!session.started) return m.reply('Game Belum Di Mulai!')
						if (session.players.length < 2) return m.reply('Minimal 2 Pemain Untuk Memulai Permainan!');
						if (!session.players?.some(a => a.id === m.sender)) return m.reply('Kamu belum bergabung!');
						if (!args[0]) return m.reply(`Gunakan format:\n${prefix + command} play <kartu>\nContoh: ${prefix + command} hit`);
						const player = session.players.find(p => p.id === m.sender);
						const hitIndex = player.cards.findIndex(c => (c.rank + c.suit) === (session.startCard.rank + session.startCard.suit));
						if (session.submitCard.some(s => s.id === m.sender) || session.skip.includes(m.sender)) {
							return m.reply('Kamu sudah bermain di ronde ini!');
						}
						if (!session.hasMatching(m.sender)) {
							if (session.deck.length) {
								const newCard = session.deck.shift();
								player.cards.push(newCard);
								await sleep(1000);
								let buttons = player.cards.map(a => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${a.rank}${a.suit}`, id: `.${command} play ${a.rank}${a.suit}` })}));
								if (!session.hasMatching(player.id)) buttons.push({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: 'Minum', id: `.${command} minum` }) });
								await naze.sendListMsg(player.id, { text: `Start Card: ${session.startCard.rank + session.startCard.suit}`, footer: `${player.cards.map(c => c.rank + c.suit).join(', ')}`, buttons }, { quoted: m });
							} else {
								let reuse = session.reuseSubmitCardsForDrinking()
								await m.reply(reuse.msg)
								if (!session.skip.find(a => a.id === player.id)) session.skip.push({ id: player.id });
								await m.reply('Deck sudah habis, kamu tidak bisa mengambil kartu. Dilewati.');
								await naze.sendText(session.id, `@${m.sender.split('@')[0]} dilewati karena deck habis.`, m);
								if ((session.submitCard.length + session.skip.length) === session.players.length) {
									const result = session.resolveRound();
									if (result) {
										await naze.sendText(session.id, result, m);
										if (session.players.length === 1) {
											await naze.sendText(session.id, `Pemain Tersisa 1 (@${session.players[0].id.split('@')[0]}), sesi Blackjack selesai.`, m);
											delete blackjack[session.id];
											return;
										}
										const leaderCards = session.players.find(a => a.id === session.leader);
										let buttons = leaderCards.cards.map(c => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${c.rank}${c.suit}`, id: `.${command} play ${c.rank}${c.suit}` })}));
										await naze.sendListMsg(session.leader, { text: 'Pilih kartu untuk memulai ronde baru', footer: leaderCards.cards.map(c => c.rank + c.suit).join(', '), buttons }, { quoted: m });
									}
								}
							}
						} else m.reply(`Kamu masih punya kartu dengan suit ${session.startCard.suit}, mainkan dulu sebelum minum!`);
						if ((session.submitCard.length + session.skip.length) === session.players.length) {
							const result = session.resolveRound();
							if (result) {
								await naze.sendText(session.id, result, m);
								if (session.players.length === 1) {
									await naze.sendText(session.id, `Pemain Tersisa 1 (@${session.players[0].id.split('@')[0]}), sesi Blackjack selesai.`, m);
									delete blackjack[session.id];
									return;
								}
								const leaderCards = session.players.find(a => a.id === session.leader);
								let buttons = leaderCards.cards.map(c => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${c.rank}${c.suit}`, id: `.${command} play ${c.rank}${c.suit}` })}));
								await naze.sendListMsg(session.leader, { text: 'Pilih kartu untuk memulai ronde baru', footer: leaderCards.cards.map(c => c.rank + c.suit).join(', '), buttons }, { quoted: m });
							}
						}
					}
					break
					case 'play': {
						if (!session) return m.reply('Tidak Ada Sesi Game Blackjack yang Sedang Berjalan!')
						if (!session.started) return m.reply('Game Belum Di Mulai!')
						if (session.players.length < 2) return m.reply('Minimal 2 Pemain Untuk Memulai Permainan!');
						if (!session.players?.some(a => a.id === m.sender)) return m.reply('Kamu belum bergabung!');
						if (!args[1]) return m.reply(`Gunakan format:\n${prefix + command} play <kartu>\nContoh: ${prefix + command} play 3♥️`);
						const player = session.players.find(p => p.id === m.sender);
						const idx = player.cards.findIndex(c => normalize(c.rank + c.suit) === normalize(args[1]));
						if (idx === -1) return m.reply('Kartu tidak valid!');
						if (session.submitCard.some(s => s.id === m.sender) || session.skip.includes(m.sender)) return m.reply('Kamu sudah bermain di ronde ini!');
						const card = player.cards[idx];
						if (Object.keys(session.startCard).length) {
							if (card.suit !== session.startCard.suit) return m.reply(`Kartu tidak sesuai! Harus suit ${session.startCard.suit}`);
						} else if (m.sender !== session.leader) return m.reply('Hanya pemimpin ronde yang boleh memulai!');
						player.cards.splice(idx, 1);
						session.secondDeck.push(card);
						session.submitCard.push({ id: m.sender, card: card });
						await sleep(1000);
						if (player.cards.length === 0) {
							session.winner.push({ id: player.id });
							session.leader = '';
							session.submitCard = [];
							session.players = session.players.filter(p => p.id !== player.id);
							await naze.sendText(session.id, `@${m.sender.split('@')[0]} memenangkan permainan!\nSisa Kartu: 0`, m);
							if (session.players.length === 1) {
								await naze.sendText(session.id, `Pemain Tersisa 1 (@${session.players[0].id.split('@')[0]}), sesi Blackjack selesai.`, m);
								delete blackjack[session.id];
								return;
							}
						}
						if (Object.keys(session.startCard).length === 0) {
							session.startCard = card;
							await naze.sendText(session.id, `@${m.sender.split('@')[0]} memulai putaran dengan ${card.rank}${card.suit}`, m);
							for (let s of session.players) {
								if (s.id === session.leader) continue;
								const startCard = session.startCard;
								let buttons = s.cards.map(a => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${a.rank}${a.suit}`, id: `.${command} play ${a.rank}${a.suit}` })}));
								if (!session.hasMatching(s.id)) buttons.push({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: 'Minum', id: `.${command} minum` }) });
								await naze.sendListMsg(s.id, { text: `Start Card: ${startCard.rank + startCard.suit}`, footer: `${s.cards.map(c => c.rank + c.suit).join(', ')}`, buttons }, { quoted: m });
							}
							return;
						}
						if ((session.submitCard.length + session.skip.length) === session.players.length) {
							const result = session.resolveRound();
							if (result) {
								await naze.sendText(session.id, result, m);
								if (session.players.length === 1) {
									await naze.sendText(session.id, `Pemain Tersisa 1 (@${session.players[0].id.split('@')[0]}), sesi Blackjack selesai.`, m);
									delete blackjack[session.id];
									return;
								}
								const leaderCards = session.players.find(a => a.id === session.leader);
								let buttons = leaderCards.cards.map(c => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${c.rank}${c.suit}`, id: `.${command} play ${c.rank}${c.suit}` })}));
								await naze.sendListMsg(session.leader, { text: 'Pilih kartu untuk memulai ronde baru', footer: leaderCards.cards.map(c => c.rank + c.suit).join(', '), buttons }, { quoted: m });
							}
						}
						await m.reply(`Kamu memainkan ${card.rank}${card.suit}`);
						await naze.sendText(session.id, `@${m.sender.split('@')[0]} memainkan ${card.rank}${card.suit}`, m);
					}
					break
					case 'info':
					if (!session) return m.reply('Tidak Ada Sesi Game Blackjack yang Sedang Berjalan!')
					if (!session.players?.some(a => a.id === m.sender)) return m.reply('Kamu belum bergabung!');
					const players = session.players.map((p, i) => `${i + 1}. @${p.id.split('@')[0]} ${p.id === session.host ? '(HOST) ' : p.id === session.leader ? '(Leader)' : ''}`).join('\n');
					if (m.isGroup) {
						m.reply(`🃏INFO GAME BLACKJACK ♦️\n*Jumlah Pemain:* ${session.players.length}\n*Host:* @${session.host.split('@')[0]}\n*Status:* ${session.started ? 'Dimulai' : 'Belum Mulai'}${Object.keys(session.startCard).length > 1 ? `\n*Start Card:* ${session.startCard.rank + session.startCard.suit}` : ''}\n*Sisa Kartu Deck:* ${session.deck.length}\n\n*Daftar Pemain:*\n${players}${session.secondDeck.length ? `\n\n*Riwayat Kartu:* ${session.secondDeck.map(c => `${c.rank}${c.suit}`).join(', ')}` : ''}`)
					} else {
						const player = session.players.find(p => p.id === m.sender);
						const cards = player.cards?.map(c => `${c.rank}${c.suit}`).join(', ') || 'Belum ada kartu';
						m.reply(`🃏INFO GAME BLACKJACK ♦️\n*Jumlah Pemain:* ${session.players.length}\n*Host:* @${session.host.split('@')[0]}\n*Status:* ${session.started ? 'Dimulai' : 'Belum Mulai'}${Object.keys(session.startCard).length > 1 ? `\n*Start Card:* ${session.startCard.rank + session.startCard.suit}` : ''}\n*Sisa Kartu Deck:* ${session.deck.length}\n\n*Daftar Pemain:*\n${players}\n\n*Kartu Kamu:*\n${cards}${session.secondDeck.length ? `\n\n*Riwayat Kartu:* ${session.secondDeck.map(c => `${c.rank}${c.suit}`).join(', ')}` : ''}`)
					}
					break
					case 'end':
					if (!m.isGroup) return m.reply(mess.group)
					if (!blackjack[m.chat]) return m.reply('Tidak Ada Sesi Game Blackjack yang Sedang Berjalan!')
					if (blackjack[m.chat]?.host !== m.sender) return m.reply(`Hanya Pembuat Room @${blackjack[m.chat].host.split('@')[0]} yang bisa Menghapus Sessi!`)
					delete blackjack[m.chat]
					m.reply('Berhasil Menghapus Sesi Game Blackjack')
					break
					default:
					m.reply(`🃏GAME BLACKJACK♦️\nCommand: ${prefix + command} <command>\n- create\n- join\n- start\n- info\n- hit\n- deck\n- end`)
				}
			}
			break
			
			// Menu
			case 'menu': {
				if (args[0] == 'set') {
					if (['1','2','3'].includes(args[1])) {
						set.template = parseInt(Number(args[1]))
						m.reply('Sukses Mengubah Template Menu')
					} else m.reply(`Silahkan Pilih Templat:\n- 1 (Button Menu)\n- 2 (List Menu)\n- 3 (Document Menu)`)
				} else await templateMenu(naze, set.template, m, prefix, setv, db, { botNumber, author, packname, isVip, isPremium })
			}
			break
			case 'allmenu': {
				let profile
				try {
					profile = await naze.profilePictureUrl(m.sender, 'image');
				} catch (e) {
					profile = fake.anonim
				}
				const menunya = `
╭──❍「 *USER INFO* 」❍
├ *Nama* : ${m.pushName ? m.pushName : 'Tanpa Nama'}
├ *Id* : @${m.sender.split('@')[0]}
├ *User* : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}
├ *Limit* : ${isVip ? 'VIP' : db.users[m.sender].limit }
├ *Money* : ${db.users[m.sender] ? db.users[m.sender].money.toLocaleString('id-ID') : '0'}
╰─┬────❍
╭─┴─❍「 *BOT INFO* 」❍
├ *Nama Bot* : ${db?.set?.[botNumber]?.botname || 'Naze Bot'}
├ *Powered* : @${'0@s.whatsapp.net'.split('@')[0]}
├ *Owner* : @${ownerNumber[0].split('@')[0]}
├ *Mode* : ${naze.public ? 'Public' : 'Self'}
├ *Prefix* :${set.multiprefix ? '「 MULTI-PREFIX 」' : ' *'+prefix+'*' }
├ *Premium Feature* : 🔸️
╰─┬────❍
╭─┴─❍「 *ABOUT* 」❍
├ *Tanggal* : ${tanggal}
├ *Hari* : ${hari}
├ *Jam* : ${jam} WIB
╰──────❍
╭──❍「 *BOT* 」❍
│${setv} ${prefix}profile
│${setv} ${prefix}claim
│${setv} ${prefix}buy [item] (nominal)
│${setv} ${prefix}transfer
│${setv} ${prefix}leaderboard
│${setv} ${prefix}request (text)
│${setv} ${prefix}react (emoji)
│${setv} ${prefix}tagme
│${setv} ${prefix}runtime
│${setv} ${prefix}totalfitur
│${setv} ${prefix}speed
│${setv} ${prefix}ping
│${setv} ${prefix}afk
│${setv} ${prefix}rvo (reply pesan viewone)
│${setv} ${prefix}inspect (url gc)
│${setv} ${prefix}addmsg
│${setv} ${prefix}delmsg
│${setv} ${prefix}getmsg
│${setv} ${prefix}listmsg
│${setv} ${prefix}setcmd
│${setv} ${prefix}delcmd
│${setv} ${prefix}listcmd
│${setv} ${prefix}lockcmd
│${setv} ${prefix}q (reply pesan)
│${setv} ${prefix}menfes (62xxx|fake name)
│${setv} ${prefix}confes (62xxx|fake name)
│${setv} ${prefix}roomai
│${setv} ${prefix}jadibot 🔸️
│${setv} ${prefix}stopjadibot
│${setv} ${prefix}listjadibot
│${setv} ${prefix}donasi
│${setv} ${prefix}addsewa
│${setv} ${prefix}delsewa
│${setv} ${prefix}listsewa
╰─┬────❍
╭─┴❍「 *GROUP* 」❍
│${setv} ${prefix}add (62xxx)
│${setv} ${prefix}kick (@tag/62xxx)
│${setv} ${prefix}promote (@tag/62xxx)
│${setv} ${prefix}demote (@tag/62xxx)
│${setv} ${prefix}warn (@tag/62xxx)
│${setv} ${prefix}unwarn (@tag/62xxx)
│${setv} ${prefix}setname (nama baru gc)
│${setv} ${prefix}setdesc (desk)
│${setv} ${prefix}setppgc (reply imgnya)
│${setv} ${prefix}delete (reply pesan)
│${setv} ${prefix}linkgrup
│${setv} ${prefix}revoke
│${setv} ${prefix}tagall
│${setv} ${prefix}pin
│${setv} ${prefix}unpin
│${setv} ${prefix}hidetag
│${setv} ${prefix}totag (reply pesan)
│${setv} ${prefix}listonline
│${setv} ${prefix}group set
│${setv} ${prefix}group (khusus admin)
╰─┬────❍
╭─┴❍「 *SEARCH* 」❍
│${setv} ${prefix}ytsearch (query)
│${setv} ${prefix}spotify (query)
│${setv} ${prefix}pixiv (query)
│${setv} ${prefix}pinterest (query)
│${setv} ${prefix}wallpaper (query)
│${setv} ${prefix}ringtone (query)
│${setv} ${prefix}google (query)
│${setv} ${prefix}gimage (query)
│${setv} ${prefix}npm (query)
│${setv} ${prefix}style (query)
│${setv} ${prefix}cuaca (kota)
│${setv} ${prefix}tenor (query)
│${setv} ${prefix}urban (query)
╰─┬────❍
╭─┴❍「 *DOWNLOAD* 」❍
│${setv} ${prefix}ytmp3 (url)
│${setv} ${prefix}ytmp4 (url)
│${setv} ${prefix}instagram (url)
│${setv} ${prefix}tiktok (url)
│${setv} ${prefix}tiktokmp3 (url)
│${setv} ${prefix}facebook (url)
│${setv} ${prefix}spotifydl (url)
│${setv} ${prefix}mediafire (url)
╰─┬────❍
╭─┴❍「 *QUOTES* 」❍
│${setv} ${prefix}motivasi
│${setv} ${prefix}quotes
│${setv} ${prefix}truth
│${setv} ${prefix}bijak
│${setv} ${prefix}dare
│${setv} ${prefix}bucin
│${setv} ${prefix}renungan
╰─┬────❍
╭─┴❍「 *TOOLS* 」❍
│${setv} ${prefix}get (url) 🔸️
│${setv} ${prefix}hd (reply pesan)
│${setv} ${prefix}toaudio (reply pesan)
│${setv} ${prefix}tomp3 (reply pesan)
│${setv} ${prefix}tovn (reply pesan)
│${setv} ${prefix}toimage (reply pesan)
│${setv} ${prefix}toptv (reply pesan)
│${setv} ${prefix}tourl (reply pesan)
│${setv} ${prefix}tts (textnya)
│${setv} ${prefix}toqr (textnya)
│${setv} ${prefix}brat (textnya)
│${setv} ${prefix}bratvid (textnya)
│${setv} ${prefix}ssweb (url) 🔸️
│${setv} ${prefix}sticker (send/reply img)
│${setv} ${prefix}colong (reply stiker)
│${setv} ${prefix}smeme (send/reply img)
│${setv} ${prefix}dehaze (send/reply img)
│${setv} ${prefix}colorize (send/reply img)
│${setv} ${prefix}hitamkan (send/reply img)
│${setv} ${prefix}emojimix 🙃+💀
│${setv} ${prefix}nulis
│${setv} ${prefix}readmore text1|text2
│${setv} ${prefix}qc (pesannya)
│${setv} ${prefix}translate
│${setv} ${prefix}wasted (send/reply img)
│${setv} ${prefix}triggered (send/reply img)
│${setv} ${prefix}shorturl (urlnya)
│${setv} ${prefix}gitclone (urlnya)
│${setv} ${prefix}fat (reply audio)
│${setv} ${prefix}fast (reply audio)
│${setv} ${prefix}bass (reply audio)
│${setv} ${prefix}slow (reply audio)
│${setv} ${prefix}tupai (reply audio)
│${setv} ${prefix}deep (reply audio)
│${setv} ${prefix}robot (reply audio)
│${setv} ${prefix}blown (reply audio)
│${setv} ${prefix}reverse (reply audio)
│${setv} ${prefix}smooth (reply audio)
│${setv} ${prefix}earrape (reply audio)
│${setv} ${prefix}nightcore (reply audio)
│${setv} ${prefix}getexif (reply sticker)
╰─┬────❍
╭─┴❍「 *AI* 」❍
│${setv} ${prefix}ai (query)
│${setv} ${prefix}simi (query)
│${setv} ${prefix}gemini (query)
│${setv} ${prefix}txt2img (query)
╰─┬────❍
╭─┴❍「 *ANIME* 」❍
│${setv} ${prefix}waifu
│${setv} ${prefix}neko
╰─┬────❍
╭─┴❍「 *GAME* 」❍
│${setv} ${prefix}tictactoe
│${setv} ${prefix}akinator
│${setv} ${prefix}suit
│${setv} ${prefix}slot
│${setv} ${prefix}math (level)
│${setv} ${prefix}begal
│${setv} ${prefix}ulartangga
│${setv} ${prefix}blackjack
│${setv} ${prefix}catur
│${setv} ${prefix}casino (nominal)
│${setv} ${prefix}samgong (nominal)
│${setv} ${prefix}rampok (@tag)
│${setv} ${prefix}tekateki
│${setv} ${prefix}tebaklirik
│${setv} ${prefix}tebakkata
│${setv} ${prefix}tebakbom
│${setv} ${prefix}susunkata
│${setv} ${prefix}colorblind
│${setv} ${prefix}tebakkimia
│${setv} ${prefix}caklontong
│${setv} ${prefix}tebakangka
│${setv} ${prefix}tebaknegara
│${setv} ${prefix}tebakgambar
│${setv} ${prefix}tebakbendera
╰─┬────❍
╭─┴❍「 *FUN* 」❍
│${setv} ${prefix}coba
│${setv} ${prefix}dadu
│${setv} ${prefix}bisakah (text)
│${setv} ${prefix}apakah (text)
│${setv} ${prefix}kapan (text)
│${setv} ${prefix}siapa (text)
│${setv} ${prefix}kerangajaib (text)
│${setv} ${prefix}cekmati (nama lu)
│${setv} ${prefix}ceksifat
│${setv} ${prefix}cekkhodam (nama lu)
│${setv} ${prefix}rate (reply pesan)
│${setv} ${prefix}jodohku
│${setv} ${prefix}jadian
│${setv} ${prefix}fitnah
│${setv} ${prefix}halah (text)
│${setv} ${prefix}hilih (text)
│${setv} ${prefix}huluh (text)
│${setv} ${prefix}heleh (text)
│${setv} ${prefix}holoh (text)
╰─┬────❍
╭─┴❍「 *RANDOM* 」❍
│${setv} ${prefix}coffe
╰─┬────❍
╭─┴❍「 *STALKER* 」❍
│${setv} ${prefix}wastalk
│${setv} ${prefix}telestalk
│${setv} ${prefix}igstalk
│${setv} ${prefix}tiktokstalk
│${setv} ${prefix}githubstalk
│${setv} ${prefix}genshinstalk
╰─┬────❍
╭─┴❍「 *OWNER* 」❍
│${setv} ${prefix}bot [set]
│${setv} ${prefix}setbio
│${setv} ${prefix}setppbot
│${setv} ${prefix}join
│${setv} ${prefix}leave
│${setv} ${prefix}block
│${setv} ${prefix}listblock
│${setv} ${prefix}openblock
│${setv} ${prefix}listpc
│${setv} ${prefix}listgc
│${setv} ${prefix}ban
│${setv} ${prefix}unban
│${setv} ${prefix}mute
│${setv} ${prefix}unmute
│${setv} ${prefix}creategc
│${setv} ${prefix}clearchat
│${setv} ${prefix}addprem
│${setv} ${prefix}delprem
│${setv} ${prefix}listprem
│${setv} ${prefix}addlimit
│${setv} ${prefix}adduang
│${setv} ${prefix}setbotauthor
│${setv} ${prefix}setbotname
│${setv} ${prefix}setbotpackname
│${setv} ${prefix}addowner
│${setv} ${prefix}delowner
│${setv} ${prefix}getmsgstore
│${setv} ${prefix}bot --settings
│${setv} ${prefix}bot settings
│${setv} ${prefix}getsession
│${setv} ${prefix}delsession
│${setv} ${prefix}delsampah
│${setv} ${prefix}upsw
│${setv} ${prefix}backup
│${setv} $
│${setv} >
│${setv} <
╰──────❍`
				await m.reply({
					document: fake.docs,
					fileName: ucapanWaktu,
					mimetype: pickRandom(fake.listfakedocs),
					fileLength: '100000000000000',
					pageCount: '999',
					caption: menunya,
					contextInfo: {
						mentionedJid: [m.sender, '0@s.whatsapp.net', ownerNumber[0] + '@s.whatsapp.net'],
						forwardingScore: 10,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: my.ch,
							serverMessageId: null,
							newsletterName: 'Join For More Info'
						},
						externalAdReply: {
							title: author,
							body: packname,
							showAdAttribution: false,
							thumbnailUrl: profile,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							mediaUrl: my.gh,
							sourceUrl: my.gh,
						}
					}
				})
			}
			break
			case 'botmenu': {
				m.reply(`
╭──❍「 *BOT* 」❍
│${setv} ${prefix}profile
│${setv} ${prefix}claim
│${setv} ${prefix}buy [item] (nominal)
│${setv} ${prefix}transfer
│${setv} ${prefix}leaderboard
│${setv} ${prefix}request (text)
│${setv} ${prefix}react (emoji)
│${setv} ${prefix}tagme
│${setv} ${prefix}runtime
│${setv} ${prefix}totalfitur
│${setv} ${prefix}speed
│${setv} ${prefix}ping
│${setv} ${prefix}afk
│${setv} ${prefix}rvo (reply pesan viewone)
│${setv} ${prefix}inspect (url gc)
│${setv} ${prefix}addmsg
│${setv} ${prefix}delmsg
│${setv} ${prefix}getmsg
│${setv} ${prefix}listmsg
│${setv} ${prefix}setcmd
│${setv} ${prefix}delcmd
│${setv} ${prefix}listcmd
│${setv} ${prefix}lockcmd
│${setv} ${prefix}q (reply pesan)
│${setv} ${prefix}menfes (62xxx|fake name)
│${setv} ${prefix}confes (62xxx|fake name)
│${setv} ${prefix}roomai
│${setv} ${prefix}jadibot 🔸️
│${setv} ${prefix}stopjadibot
│${setv} ${prefix}listjadibot
│${setv} ${prefix}donasi
│${setv} ${prefix}addsewa
│${setv} ${prefix}delsewa
│${setv} ${prefix}listsewa
╰──────❍`)
			}
			break
			case 'groupmenu': {
				m.reply(`
╭──❍「 *GROUP* 」❍
│${setv} ${prefix}add (62xxx)
│${setv} ${prefix}kick (@tag/62xxx)
│${setv} ${prefix}promote (@tag/62xxx)
│${setv} ${prefix}demote (@tag/62xxx)
│${setv} ${prefix}warn (@tag/62xxx)
│${setv} ${prefix}unwarn (@tag/62xxx)
│${setv} ${prefix}setname (nama baru gc)
│${setv} ${prefix}setdesc (desk)
│${setv} ${prefix}setppgc (reply imgnya)
│${setv} ${prefix}delete (reply pesan)
│${setv} ${prefix}linkgrup
│${setv} ${prefix}revoke
│${setv} ${prefix}tagall
│${setv} ${prefix}pin
│${setv} ${prefix}unpin
│${setv} ${prefix}hidetag
│${setv} ${prefix}totag (reply pesan)
│${setv} ${prefix}listonline
│${setv} ${prefix}group set
│${setv} ${prefix}group (khusus admin)
╰──────❍`)
			}
			break
			case 'searchmenu': {
				m.reply(`
╭──❍「 *SEARCH* 」❍
│${setv} ${prefix}ytsearch (query)
│${setv} ${prefix}spotify (query)
│${setv} ${prefix}pixiv (query)
│${setv} ${prefix}pinterest (query)
│${setv} ${prefix}wallpaper (query)
│${setv} ${prefix}ringtone (query)
│${setv} ${prefix}google (query)
│${setv} ${prefix}gimage (query)
│${setv} ${prefix}npm (query)
│${setv} ${prefix}style (query)
│${setv} ${prefix}cuaca (kota)
│${setv} ${prefix}tenor (query)
│${setv} ${prefix}urban (query)
╰──────❍`)
			}
			break
			case 'downloadmenu': {
				m.reply(`
╭──❍「 *DOWNLOAD* 」❍
│${setv} ${prefix}ytmp3 (url)
│${setv} ${prefix}ytmp4 (url)
│${setv} ${prefix}instagram (url)
│${setv} ${prefix}tiktok (url)
│${setv} ${prefix}tiktokmp3 (url)
│${setv} ${prefix}facebook (url)
│${setv} ${prefix}spotifydl (url)
│${setv} ${prefix}mediafire (url)
╰──────❍`)
			}
			break
			case 'quotesmenu': {
				m.reply(`
╭──❍「 *QUOTES* 」❍
│${setv} ${prefix}motivasi
│${setv} ${prefix}quotes
│${setv} ${prefix}truth
│${setv} ${prefix}bijak
│${setv} ${prefix}dare
│${setv} ${prefix}bucin
│${setv} ${prefix}renungan
╰──────❍`)
			}
			break
			case 'toolsmenu': {
				m.reply(`
╭──❍「 *TOOLS* 」❍
│${setv} ${prefix}get (url) 🔸️
│${setv} ${prefix}hd (reply pesan)
│${setv} ${prefix}toaudio (reply pesan)
│${setv} ${prefix}tomp3 (reply pesan)
│${setv} ${prefix}tovn (reply pesan)
│${setv} ${prefix}toimage (reply pesan)
│${setv} ${prefix}toptv (reply pesan)
│${setv} ${prefix}tourl (reply pesan)
│${setv} ${prefix}tts (textnya)
│${setv} ${prefix}toqr (textnya)
│${setv} ${prefix}brat (textnya)
│${setv} ${prefix}bratvid (textnya)
│${setv} ${prefix}ssweb (url) 🔸️
│${setv} ${prefix}sticker (send/reply img)
│${setv} ${prefix}colong (reply stiker)
│${setv} ${prefix}smeme (send/reply img)
│${setv} ${prefix}dehaze (send/reply img)
│${setv} ${prefix}colorize (send/reply img)
│${setv} ${prefix}hitamkan (send/reply img)
│${setv} ${prefix}emojimix 🙃+💀
│${setv} ${prefix}nulis
│${setv} ${prefix}readmore text1|text2
│${setv} ${prefix}qc (pesannya)
│${setv} ${prefix}translate
│${setv} ${prefix}wasted (send/reply img)
│${setv} ${prefix}triggered (send/reply img)
│${setv} ${prefix}shorturl (urlnya)
│${setv} ${prefix}gitclone (urlnya)
│${setv} ${prefix}fat (reply audio)
│${setv} ${prefix}fast (reply audio)
│${setv} ${prefix}bass (reply audio)
│${setv} ${prefix}slow (reply audio)
│${setv} ${prefix}tupai (reply audio)
│${setv} ${prefix}deep (reply audio)
│${setv} ${prefix}robot (reply audio)
│${setv} ${prefix}blown (reply audio)
│${setv} ${prefix}reverse (reply audio)
│${setv} ${prefix}smooth (reply audio)
│${setv} ${prefix}earrape (reply audio)
│${setv} ${prefix}nightcore (reply audio)
│${setv} ${prefix}getexif (reply sticker)
╰──────❍`)
			}
			break
			case 'aimenu': {
				m.reply(`
╭──❍「 *AI* 」❍
│${setv} ${prefix}ai (query)
│${setv} ${prefix}simi (query)
│${setv} ${prefix}gemini (query)
│${setv} ${prefix}txt2img (query)
╰──────❍`)
			}
			break
			case 'randommenu': {
				m.reply(`
╭──❍「 *RANDOM* 」❍
│${setv} ${prefix}coffe
╰──────❍`)
			}
			break
			case 'stalkermenu': {
				m.reply(`
╭──❍「 *STALKER* 」❍
│${setv} ${prefix}wastalk
│${setv} ${prefix}telestalk
│${setv} ${prefix}igstalk
│${setv} ${prefix}tiktokstalk
│${setv} ${prefix}githubstalk
│${setv} ${prefix}genshinstalk
╰──────❍`)
			}
			break
			case 'animemenu': {
				m.reply(`
╭──❍「 *ANIME* 」❍
│${setv} ${prefix}waifu
│${setv} ${prefix}neko
╰──────❍`)
			}
			break
			case 'gamemenu': {
				m.reply(`
╭──❍「 *GAME* 」❍
│${setv} ${prefix}tictactoe
│${setv} ${prefix}akinator
│${setv} ${prefix}suit
│${setv} ${prefix}slot
│${setv} ${prefix}math (level)
│${setv} ${prefix}begal
│${setv} ${prefix}ulartangga
│${setv} ${prefix}blackjack
│${setv} ${prefix}catur
│${setv} ${prefix}casino (nominal)
│${setv} ${prefix}samgong (nominal)
│${setv} ${prefix}rampok (@tag)
│${setv} ${prefix}tekateki
│${setv} ${prefix}tebaklirik
│${setv} ${prefix}tebakkata
│${setv} ${prefix}tebakbom
│${setv} ${prefix}susunkata
│${setv} ${prefix}colorblind
│${setv} ${prefix}tebakkimia
│${setv} ${prefix}caklontong
│${setv} ${prefix}tebakangka
│${setv} ${prefix}tebaknegara
│${setv} ${prefix}tebakgambar
│${setv} ${prefix}tebakbendera
╰──────❍`)
			}
			break
			case 'funmenu': {
				m.reply(`
╭──❍「 *FUN* 」❍
│${setv} ${prefix}coba
│${setv} ${prefix}dadu
│${setv} ${prefix}bisakah (text)
│${setv} ${prefix}apakah (text)
│${setv} ${prefix}kapan (text)
│${setv} ${prefix}siapa (text)
│${setv} ${prefix}kerangajaib (text)
│${setv} ${prefix}cekmati (nama lu)
│${setv} ${prefix}ceksifat
│${setv} ${prefix}cekkhodam (nama lu)
│${setv} ${prefix}rate (reply pesan)
│${setv} ${prefix}jodohku
│${setv} ${prefix}jadian
│${setv} ${prefix}fitnah
│${setv} ${prefix}halah (text)
│${setv} ${prefix}hilih (text)
│${setv} ${prefix}huluh (text)
│${setv} ${prefix}heleh (text)
│${setv} ${prefix}holoh (text)
╰──────❍`)
			}
			break
			case 'ownermenu': {
				m.reply(`
╭──❍「 *OWNER* 」❍
│${setv} ${prefix}bot [set]
│${setv} ${prefix}setbio
│${setv} ${prefix}setppbot
│${setv} ${prefix}join
│${setv} ${prefix}leave
│${setv} ${prefix}block
│${setv} ${prefix}listblock
│${setv} ${prefix}openblock
│${setv} ${prefix}listpc
│${setv} ${prefix}listgc
│${setv} ${prefix}ban
│${setv} ${prefix}unban
│${setv} ${prefix}mute
│${setv} ${prefix}unmute
│${setv} ${prefix}creategc
│${setv} ${prefix}clearchat
│${setv} ${prefix}addprem
│${setv} ${prefix}delprem
│${setv} ${prefix}listprem
│${setv} ${prefix}addlimit
│${setv} ${prefix}adduang
│${setv} ${prefix}setbotauthor
│${setv} ${prefix}setbotname
│${setv} ${prefix}setbotpackname
│${setv} ${prefix}addowner
│${setv} ${prefix}delowner
│${setv} ${prefix}getmsgstore
│${setv} ${prefix}bot --settings
│${setv} ${prefix}bot settings
│${setv} ${prefix}getsession
│${setv} ${prefix}delsession
│${setv} ${prefix}delsampah
│${setv} ${prefix}upsw
│${setv} ${prefix}backup
│${setv} $
│${setv} >
│${setv} <
╰──────❍`)
			}
			break

			default:
			if (budy.startsWith('>')) {
				if (!isCreator) return
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('<')) {
				if (!isCreator) return
				try {
					let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('$')) {
				if (!isCreator) return
				if (!text) return
				exec(budy.slice(2), (err, stdout) => {
					if (err) return m.reply(`${err}`)
					if (stdout) return m.reply(stdout)
				})
			}
			if ((!isCmd || isCreator) && budy.toLowerCase() != undefined) {
				if (m.chat.endsWith('broadcast')) return
				if (!(budy.toLowerCase() in db.database)) return
				await naze.relayMessage(m.chat, db.database[budy.toLowerCase()], {})
			}
		}
	} catch (e) {
		console.log(e);
		if (e?.message?.includes('No sessions')) return;
		const errorKey = e?.code || e?.name || e?.message?.slice(0, 100) || 'unknown_error';
		const now = Date.now();
		if (!errorCache[errorKey]) errorCache[errorKey] = [];
		errorCache[errorKey] = errorCache[errorKey].filter(ts => now - ts < 600000);
		if (errorCache[errorKey].length >= 3) return;
		errorCache[errorKey].push(now);
		m.reply('Error: ' + (e?.name || e?.code || e?.output?.statusCode || e?.status || 'Tidak diketahui') + '\nLog Error Telah dikirim ke Owner\n\n')
		return naze.sendFromOwner(ownerNumber, `Halo sayang, sepertinya ada yang error nih, jangan lupa diperbaiki ya\n\nVersion : *${require('./package.json').version}*\n\n*Log error:*\n\n` + util.format(e), m, { contextInfo: { isForwarded: true }})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});

