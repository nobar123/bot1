import { tebakbendera } from "@bochilteam/scraper"

let timeout = 120000
let poin = 7000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakbendera[id][0])
        throw false
    }
    const json = await tebakbendera()
    let caption = `*TEBAK BENDERA*
    
Timeout *${(timeout / 1000).toFixed(2)} detik*
*Bendera:* ${json.flag}
Silahkan Tebak Bendera Tersebut
Ketik ${usedPrefix}bender untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakbendera[id] = [
        await conn.sendButton(m.chat, caption, author, json.img, ['hint', `${usedPrefix}bender`], m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.sendButton(m.chat, `Waktu habis!\nnamenya adalah *${json.name}*`, author, ['Tebak bendera', '/tebakbendera'], conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i

export default handler