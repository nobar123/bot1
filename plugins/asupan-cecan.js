
import fetch from "node-fetch"

let handler = async (m, { conn, command }) => {
  m.reply(wait)
  let result = await fetch("https://yog-apikey.herokuapp.com/api/asupan/santuy?apikey=YogGanz")
  let wak = await result.json()
  //
  await conn.sendFile(m.chat, wak.result.url, "asupan2.mp4", "nihh asupan", m)
}
handler.help = ["asupan2"]
handler.tags = ["asupan"]
handler.desc = ["asupan masbro"]
handler.command = /^asupan2/i
handler.premium = true
export default handler