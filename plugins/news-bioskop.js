import { bioskop } from "@bochilteam/scraper"

let handler = async (m, {conn, text, usedPrefix, command}) => {
  let result = await bioskop()
  let teks = result.map(v => {
    
    return `*📽️FILM BIOSKOP*
    
*Judul:* ${v.title}
*Genre:* ${v.genre}
*Durasi:* ${v.duration}
*Rilis:* ${v.release}
*Link:* ${v.url}
*Direktur:* ${v.director}
*Cast:* ${v.cast}
*Image:* ${v.img}
 ` }).filter(v => v).join('\n\n—————————————————\n\n')
  const msg = await m.reply(teks)
}
handler.help = ["bioskop"]
handler.tags = ["news"]
handler.desc = ["List Film yg cocok untuk ditonton di bioskop"]
handler.command = /^bioskop/i
export default handler
