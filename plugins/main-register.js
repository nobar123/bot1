import { createHash } from 'crypto'
import db from '../lib/database.js'
let timeout = 60000
let Reg = /(.*)([.|])([0-9]*)$/i

let handler = async function (m, { conn, text, usedPrefix }) {
var id = m.sender
conn.verify = conn.verify ? conn.verify : {}

let sni = (Math.floor(Math.random() * 4081)) * 1

var jkop = {
  result: sni
}

let sn = `${sni}`

if ( id in conn.verify) {
m.reply('Bruh You in Progress Register')
throw false
}
if (db.data.users[m.sender].registered == true) throw "Kamu Telah Terdaftar"
conn.reply(m.chat, `@${id.split("@")[0]} Code verification Telah dikirim, Silahkan cek Chat pribadi`, m, { contextInfo: { mentionedJid: [id]}})
conn.verify[id] = [
await conn.reply(id, `Peringatan Verifikasi!
Code Verifikasi *${sn}*
*• Gesek Pesan ini*
ends in 1 minute
Lupa code silahkan ketik .getcodeid`, m), 
jkop,
     setTimeout(() => {
            if (conn.verify[id]) conn.reply(id, `Your session end/n If you want to re-register, type the command earlier`, m)
            delete conn.verify[id]
        }, timeout)
      ]
    }
handler.help = ['register']
handler.tags = ['main']
handler.command = /^reg(ister)?$/i
export default handler
