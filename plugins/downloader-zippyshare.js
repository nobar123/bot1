import fetch from 'node-fetch'
import { zippydl } from "../lib/scrape.js"
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw 'where link ZippyShare?'

let res = await zippydl(args[0])
if (!res.link) throw "Can\'t get video!"
m.reply(wait)
await conn.reply(m.chat, `*Title:* ${res.title}
*FileSize:* ${res.filesize}
*Upload:* ${res.upload}
*Link:* ${res.link}`, m)
//await conn.sendFile(m.chat, res.link, res.title + '.mp3', null, m, null, { asDocument: true})
await conn.sendMessage(m.chat, { document: { url: res.link}, mimetype: 'video/mpeg', fileName: `${res.title}`}, {quoted: m})

}
handler.help = ['zippyshare', "zippydl","zippy"].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(zippy(share)?(dl)?)$/i
export default handler
