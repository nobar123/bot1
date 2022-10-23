import { asahotak } from '@bochilteam/scraper'

let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.asahotak[id][0])
        throw false
    }
    const json = await asahotak()
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*

*Soal:* ${json.soal}

Ketik ${usedPrefix}otak untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.asahotak[id] = [
        await conn.sendButton(m.chat, caption, author, ['hint', `${usedPrefix}otak`], m),
        json, poin,
        setTimeout(() => {
            if (conn.asahotak[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, ['Asah otak', '/asahotak'], conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asa(h)?(otak)?/i

export default handler