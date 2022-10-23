import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, text, isROwner, isOwner }) => {
  if (text) {
    db.data.chats[m.chat].sDemote = text
    m.reply('Demote berhasil diatur\n@user (Mention)')
  } else throw 'example: '+usedPrefix+command+" @user Telah Diunadmin"
}
handler.help = ['setdemote <teks>']
handler.tags = ['group']
handler.command = /^setdemote/i

handler.group = true
handler.admin = true

export default handler
