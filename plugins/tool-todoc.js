let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw 'Nama file'
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  let dk = await q.download?.()
  if (!/(audio|video|image)/.test(mime)) throw `Balas vn/audio/video/foto yang ingin diubah dengan caption *${usedPrefix + command}*`
  if (!dk) return m.reply("Eror")
  m.reply(wait)
  if (/audio/i.test(mime)) {
conn.sendMessage(m.chat, {document: dk, mimetype: 'audio/mpeg', filename: text + ".mp3", caption: "Success Convert Audio To doccument"}, { quoted: m})
  } else if (/video/i.test(mime)) {
    conn.sendMessage(m.chat, {document: dk, mimetype: 'video/mpeg', filename: text + ".mp4", caption: "Success Convert Video To doccument"}, { quoted: m})
 } else if (/image/i.test(mime)) {
conn.sendFile(m.chat, dk, text + ".jpg", null, m, null, { asDocument: true})
  }
}
  
  handler.help = ['todoc', 'todocument'].map(v =>  v + ` <namafile> <reply chat>`)
handler.tags = ['audio']
handler.command = /^to(doc|document)$/i

handler.exp = 0

export default handler
