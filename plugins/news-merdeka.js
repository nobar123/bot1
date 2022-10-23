import { merdekaNews } from "../lib/scrape.js"

let handler = async (m, {conn, text, usedPrefix, command}) => {
  let result = await merdekaNews()
  let teks = result.map(v => {
    
    return `*📰MERDEKA NEWS*
    
*Judul:* ${v.title}
*Upload:* ${v.upload_date}
*Link Berita:* ${v.link}
*Image:* ${v.thumb}
 ` }).filter(v => v).join('\n\n—————————————————\n\n')
  const msg = await m.reply(teks)
}
handler.help = ["merdeka"]
handler.tags = ["news"]
handler.command = /^merdeka/i
export default handler