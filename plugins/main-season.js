import db from "../lib/database.js"
let handler = async ( m, {conn}) => {
  cpt =  `${db.data.settings[conn.user.jid].season ? db.data.settings[conn.user.jid].season : "Tidak ada riwayat season" }
  
  ${db.data.settings[conn.user.jid].deskseason ? "*Deskripsi season:*\n" + db.data.settings[conn.user.jid].deskseason : ""}`
  conn.sendFile(m.chat, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLyQL2t9bE0vJwbfwYMLpLoMapwFsoohMwRw&usqp=CAU", '', cpt, m)
}
handler.help = ["seasonnow", "season"]
handler.tags = ["main"]
handler.desc = ["melihat informasi tentang season saat ini"]
handler.command = /^(season(now)?)$/i
export default handler