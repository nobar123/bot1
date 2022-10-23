import db from "../lib/database.js"
let handler = async (m, { conn, text }) => {
  let [teks1, teks2] =text.split("/")
  if (!teks1||!teks2) throw `contoh: S3 HALLOWEEN 🎃/zmzmmzmz`
  db.data.settings[conn.user.jid].season = teks1
  db.data.settings[conn.user.jid].deskseason = teks2
  m.reply("Berhasil ubah season")
}
handler.help = ['setseason']
handler.tags = ['owner', 'host']
handler.command = /^(setseason)$/i

handler.rowner, handler.mods = true

export default handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}