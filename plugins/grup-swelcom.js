import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, text, isROwner, isOwner }) => {
  if (text) {
    db.data.chats[m.chat].sWelcome = text
    m.reply('Welcome berhasil diatur\n@user (Mention)\n@subject (Judul Grup)\n@desc')
  } else throw 'example: '+usedPrefix+command+" hola @user Welcome in gc @subject \nThis desk @desc"
}
handler.help = ['setwelcome <teks>']
handler.tags = ['group']
handler.command = /^setwelcome$/i

handler.group = true
handler.admin = true

export default handler
