import fetch from 'node-fetch'
import {scdl} from "../lib/scrape.js"
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw 'where link?'

let res = await scdl(args[0])
if (!res.link) throw "Can\'t get audio!"
await conn.sendFile(m.chat, res.thumb, 'scdl.jpg', `*SOUNDCLOUD DL*\n*Judul:* ${res.title}\n*Link:* ${res.link ? res.link : "None"}\n\nSupport Me ${saweria}`
, m)
//await conn.sendFile(m.chat, res.link, res.title + '.mp3', null, m, null, { asDocument: true})
await conn.sendMessage(m.chat, { document: { url: res.link}, mimetype: 'audio/mpeg', fileName: `${res.title}.mp3`}, {quoted: m})

}
handler.help = ['soundcloud'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(sound(cloud)?(dl)?(cdl)?)$/i
export default handler
