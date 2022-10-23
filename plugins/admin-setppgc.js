let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Media tidak didukung!`
    if (/image/.test(mime)) {
        let img = await q.download?.()
        await conn.updateProfilePicture(m.chat, img).then(_=> {m.reply("Succes mengubah pp grup")})
    } else throw `Balas gambar dengan perintah *${usedPrefix + command}*`
}
handler.help = ['setppgc']
handler.tags = ['admin']
handler.des = ["mengubah foto profil grup"]
handler.command = /^setppgc$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
