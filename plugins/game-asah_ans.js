import similarity from 'similarity'
import db from '../lib/database.js'

const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*(otak)/i.test(m.quoted.text) || /.*(otak)/i.test(m.text)) return !0
    this.asahotak = this.asahotak ? this.asahotak : {}
    if (!(id in this.asahotak)) return this.sendButton(m.chat, 'Soal itu telah berakhir', author, ['asahotak', '/asahotak'], m)
    if (m.quoted.id == this.asahotak[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.asahotak[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            db.data.users[m.sender].
                exp += this.asahotak[id][2]
            this.sendButton(m.chat, `*Benar!*\n+${this.asahotak[id][2]} XP`, author, ['asahotak', '/asahotak'], m)
            clearTimeout(this.asahotak[id][3])
            delete this.asahotak[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

export default handler