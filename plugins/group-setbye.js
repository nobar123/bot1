import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, text, isROwner, isOwner }) => {
  if (text) {
    db.data.chats[m.chat].sBye = text
    m.reply('Leaving berhasil diatur\n@user (Mention)\n@subject (Judul Grup)')
  } else throw 'example: '+usedPrefix+command+" Selamat tinggal @user dari @subject"
}
handler.help = ['setbye <teks>']
handler.tags = ['group']
handler.command = /^setbye/i

handler.group = true
handler.admin = true

export default handler
