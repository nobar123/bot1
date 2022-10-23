
import fetch from "node-fetch"

let handler = async (m, { conn, command }) => {
  m.reply(wait)
  let result = "https://betabotz-api.herokuapp.com/api/asupan/hijaber?apikey=BetaBotz"
  //
  await conn.sendFile(m.chat, result, "hijaber.mp4", "nihh asupan", m)
}
handler.help = ["hijaber"]
handler.tags = ["asupan"]
handler.desc = ["asupan masbro"]
handler.command = /^hijaber/i
handler.premium = true
export default handler