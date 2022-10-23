
import fetch from "node-fetch"

let handler = async (m, { conn, command }) => {
  m.reply(wait)
  let result = "https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz"
  //
  await conn.sendFile(m.chat, result, "bokep.mp4", "nihh asupan", m)
}
handler.help = ["bkp"]
handler.tags = ["asupan"]
handler.desc = ["asupan masbro"]
handler.command = /^bkp$/i
handler.premium = true
export default handler