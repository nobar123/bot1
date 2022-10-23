import { happymodSearch } from "../lib/scrape.js"

let handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw "contoh: " + usedPrefix + command + " clash of clans"
  let result = await happymodSearch(text)
  let teks = result.map(v => {
    
    return `*HAPPY MOD SEARCH*
    
*Nama Apk:* ${v.title}
*Rating:* ${v.rating}
*Link:* ${v.link}`
    
    
  }).filter(v => v).join('\n\n—————————————————\n\n')
  const msg = await m.reply(teks)
}
handler.help = ["happymod <namaapk>"]
handler.tag = ["internet"]
handler.command = /^happymod$/i
export default handler