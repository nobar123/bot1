
import fetch from "node-fetch"

let handler = async (m, { conn, command }) => {
  m.reply(wait)
  let result = "https://yog-apikey.herokuapp.com/api/asupan?apikey=YogGanz"
  //
  await conn.sendFile(m.chat, result, null, "nihh asupan", m)
}
handler.help = ["asupan1"]
handler.tags = ["asupan"]
handler.desc = ["asupan masbro"]
handler.command = /^asupan1$/i
handler.premium = false
export default handler