import { webp2mp4 } from '../lib/webp2mp4.js'

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `balas stiker dengan caption *${usedPrefix + command}*`
   let q = m.quoted ? m.quoted : m
   let mime = (q.msg || q).mimetype || ''
    if (!/webp/g.test(mime)) throw `balas stiker dengan caption *${usedPrefix + command}*`
    let media = await q.download?.()
    let out = Buffer.alloc(0)
    if (/webp/g.test(mime)) {
        out = await webp2mp4(media)
    }
   await conn.sendFile(m.chat, out, 'out.gif', "Done" , m, 0, { thumbnail: Buffer.alloc(0) })
}

handler.help = ['togif (reply media)']
handler.tags = ['sticker']
handler.command = /^(togif)$/i

export default handler
