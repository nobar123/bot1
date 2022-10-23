import db from "../lib/database.js"

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who =  m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    let user = db.data.users[who]
    if (!who) return m.reply(`Tag/Mention!\n\nContoh:\n${usedPrefix + command} @0 1\n\nAngka 1 menunjukan total hari`)
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw `Angkanya mana?\n\nContoh:\n${usedPrefix + command} @0 1`
    if (isNaN(txt)) return m.reply(`Hanya angka!\n\nContoh:\n${usedPrefix + command} @0 1`)
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
    user.premium = true
    let timer = ( 86400000 - (new Date - user.premiumTime))
    m.reply(`Berhasil menambahkan *${user.name}* sebagai pengguna Premium selama ${txt} hari.\n\nHitung mundur: ${timer.toTimeString()}`)
}
handler.help = ['addprem [@user] <angka>']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)p(rem)?$/i

handler.rowner = true

export default handler
