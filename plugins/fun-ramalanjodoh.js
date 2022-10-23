import {ramalanJodoh} from "../lib/scrape.js"

let handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]||!args[1]) throw "contoh: " + usedPrefix+command + " rizky renita"
  let result = await ramalanJodoh(args[0], args[1])
  await conn.sendFile(m.chat, result.thumb, "ramalanjodoh.jpg", `*Ramalan jodoh dari:* ${args[0]} dan ${args[1]}
*Positif:* ${result.positif}
*Negatif:* ${result.negatif}`, m)
}
handler.help = ["ramalanjodoh (nama|pasangan)"]
handler.tags = ["fun"]
handler.command = /^ramalanjodoh$/i

export default handler