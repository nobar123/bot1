import TinyColor from 'tinycolor2'
import jimp  from "jimp"
let handler = async (m, { conn, command, text, usedPrefix }) => {

if (!text) throw "*Contoh:* " + usedPrefix + command + " #FFFFFF Replyfoto"

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''

if (!mime) throw `Balas gambar dengan perintah *${usedPrefix + command}*`
//if (/image/.test(mime)) throw "reply gambarnya"

let orang = await jimp.read(await q.download?.())
await orang.background(arbitraryColorToInt(text ? text : "#FFFFFF"))
let wah = await orang.getBufferAsync(jimp.MIME_JPEG)
conn.sendFile(m.chat, wah, null, "Done", m)

}
handler.help = ["setbg"]
handler.tags = ["tools"]
handler.command = /^setbg$/i

export default handler

function arbitraryColorToInt (val) {
    val = val || 0; // 0, null, undefined, NaN
    if (typeof val === 'number') 
        return Number(val);
    var color = new TinyColor(val);
    return parseInt(color.toHex8(), 16);
}
