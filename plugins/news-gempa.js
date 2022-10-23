import { gempa } from "../lib/scrape.js"
let handler = async (m, { conn, args, usedPrefix, command }) => {
let hasil = await gempa()
let { Waktu, Lintang, Bujur, Magnitudo, Kedalaman, Wilayah, Map} = hasil
conn.sendFile(m.chat, Map, "gempa.jpg", `*GEMPA NOW*

*Waktu:* ${Waktu}
*Lintang:* ${Lintang}
*Bujur:* ${Bujur}
*Magnitudo:* ${Magnitudo}
*Kedalaman:* ${Kedalaman}
*Wilayah:* ${Wilayah}
`, m)
}
handler.help = ['gempa', 'gempanow']
handler.tags = ['news']
handler.desc = ["melihat berita gempa yg terjadi"]
handler.command = /^(gempa|gempanow)$/i

export default handler
