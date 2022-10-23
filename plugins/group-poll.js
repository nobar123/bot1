
let handler = async ( m, { conn, text, command, usedPrefix }) => {
  let [name, polls1, polls2, polls3] = text.split('|')
  if (!name) throw "contoh: " + usedPrefix + command + " Textname|isi1|iisi2"
await conn.sendPoll(m.chat, name, [polls1 ? polls1 : null, polls2 ? polls2 : null , polls3 ? polls3 : null]).then(_ => m.reply("Succes send Poll"))
}
handler.help = ["sendpoll name|polls1|polls2"]
handler.tags = ["group"]
handler.command = /^sendpoll$/i
handler.group = true
export default handler