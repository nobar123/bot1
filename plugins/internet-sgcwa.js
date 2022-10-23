import { groupWA } from "@bochilteam/scraper"

let handler = async (m, {conn, text, usedPrefix, command}) => {
  let result = await groupWA(text)
  let teks = result.map(v => {
    
    return `*GROUP WA SEARCH*
   *Nama Grup:* ${v.subject}
   *Link:* ${v.url}
 ` }).filter(v => v).join('\n\n—————————————————\n\n')
  const msg = await m.reply(teks).catch(fail)
}
handler.help = ["gcwa", "groupwa"]
handler.tags = ["internet"]
handler.desc = ["Mencari grup wa"]
handler.command = /^(g(c)?(roup)?(wa)?)/i
export default handler