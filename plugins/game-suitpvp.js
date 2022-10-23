/*
  Made by https://github.com/syahrularranger
  Jangan di hapus credit nya :)
*/

let timeout = 60000
let poin = 500
let poin_lose = -100
let handler = async(m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
  let who = m.mentionedJid[0]

  if(Object.values(conn.suit).find(room => room.id.startsWith("suit") && [room.p, room.p2].includes(m.sender))) throw "Selesaikan suit mu yang sebelumnya"
  if(!who) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya.. Contoh\n\n${usedPrefix}suitpvp @${owner[0][0]}`, m.chat, { contextInfo: { mentionedJid: [owner[0][0] + "@s.whatsapp.net"] } })
  if(Object.values(conn.suit).find(room => room.id.startsWith("suit") && [room.p, room.p2].includes(who))) throw "Orang yang kamu tantang sedang bermain suit bersama orang lain :("

  let id = "suit_" + new Date() * 1
  let caption = `
_*SUIT PvP*_

@${m.sender.split("@")[0]} menantang @${who.split("@")[0]} untuk bermain suit

Silahkan @${who.split("@")[0]}
`.trim()
  let footer = "Ketik \"terima/ok/gas\" untuk memulai suit\nKetik \"tolak/gabisa/nanti\" untuk menolak"
  conn.suit[id] = {
    chat: await conn.sendButton(m.chat, caption, footer, null, [[ "Terima", "ok"], [ "Tolak", "tolak"]], m, { mentions: conn.parseMention(caption) }),
    id: id,
    p: m.sender,
    p2: who,
    status: "wait",
    waktu: setTimeout(() => {
      if(conn.suit[id]) conn.reply(m.chat, "_Waktu suit habis_", m)
      delete conn.suit[id]
    }, timeout), poin, poin_lose, timeout
  }
}
handler.tags = ["game"]
handler.help = ["suitpvp", "suit"].map(v => v + " @tag")
handler.command = /^suit(pvp)?$/i

handler.group = true
handler.game = true

export default handler
