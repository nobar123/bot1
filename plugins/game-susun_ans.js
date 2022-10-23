import similarity from 'similarity'
import db from '../lib/database.js'

const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*(susun|sus)/i.test(m.quoted.text) || /.*(susun|sus)/i.test(m.text)) return !0
    this.susunkata = this.susunkata ? this.susunkata : {}
    if (!(id in this.susunkata)) return this.sendButton(m.chat, 'Soal itu telah berakhir', author, ['susunkata', '/susunkata'], m)
    if (m.quoted.id == this.susunkata[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.susunkata[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].
                exp += this.susunkata[id][2]
            this.sendButton(m.chat, `*Benar!*\n+${this.susunkata[id][2]} XP`, author, ['susunkata', '/susunkata'], m)
            clearTimeout(this.susunkata[id][3])
            delete this.susunkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

export default handler