import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    cpt = `*[ AFK ]*
  @${m.sender.split("@")[0]} (${conn.getName(m.sender)}) is now AFK${text ? ': ' + text : ''}`
    conn.reply(m.chat, cpt, false, { mentions: conn.parseMention(cpt)})
  
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler