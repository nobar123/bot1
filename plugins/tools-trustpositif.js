import {trustpositif} from "../lib/scrape.js"
let handler = async(m, {conn, text }) => {
if (!text) m.reply("Masukkan Link yg ingin dicek")

let result = await trustpositif(text)

m.reply("*Cek Trust Positif*\n\n*Link:* " + text+ "\n*Status:* "+ result == false ? "Aman" : "Tidak Aman")
}
handler.help = ["trustpositif <link>"]
handler.tags = ["internet"]
handler.desc = ["Mengecek Website"]
handler.command = /^trustpositif$/i
export default handler
