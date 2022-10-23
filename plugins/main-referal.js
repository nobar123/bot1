import db from "../lib/database.js"

let handler = async(m, {conn, text })=> {
  if (!text) throw 'Tolong isi dengan kode referal'
  let user = db.data.users[m.sender]
  var jumlahHari = 86400000 * 3
    var now = new Date() * 1
  let kode = db.data.settings[conn.user.jid].kode
  if (!user.kodereferal) throw "Kode referal expired"
  if (text(kode)) {
   // user.kodereferal = text
    //user.premium += now + jumlahHari
  m.reply("Kode referal telah diklaim\nSelamat anda mendapatkan premium 3 hari")
  } throw " kode yg dimasukkan invalid"
}
handler.help = ["kodereferal"]
handler.tags = ["main"]
handler.command = /^(koderef(eral)?)$/i
export default handler
