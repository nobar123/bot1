import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, text, isROwner, isOwner }) => {
  if (text) {
    db.data.chats[m.chat].sPromote = text
    m.reply('Promosi berhasil diatur\n@user (Mention)')
  } else throw 'example: '+usedPrefix+command+" @user jadi admin"
}
handler.help = ['setpromote <teks>']
handler.tags = ['group']
handler.command = /^setpromote/i

handler.group = true
handler.admin = true

export default handler
