import crypto from "crypto"

let handler = async (m, { conn, text, command, isCreator }) => {
const data = owner.filter(([id, _, isCreator]) => id && isCreator).map(v => v[0])// owner
conn.cs = conn.cs ? conn.cs : {}
const coy = `@${m.sender.split("@")[0]} Your Req/Report It has been sent`
let id = crypto.randomBytes(5).toString("hex")
//
  if (/^(re(quest)|req)$/.test(command)) {
    if (!text) return m.reply("what do you report?")
    conn.reply(m.chat, coy, m, { mentions: conn.parseMention(coy)})
    conn.cs[m.sender][id] = {
      id: id,
      from: m.sender,
      type: "REQUEST",
      teks: text,
    }
  cpt = `*REQUEST|PERMINTAAN*

*Id:* ${id}
*From:* @${m.sender.split(`@`)[0]}
_text:_ ${text}
`.trim()

await conn.reply(data + "@s.whatsapp.net", cpt, m, { mentions: conn.parseMention(cpt) })
conn.copyLink(data + "@s.whatsapp.net", cpt, author, ".balas " + id + "|wow", "balas")
   } else if (/^(re(port)|bug)$/.test(command)) {
   if (!text) return m.reply("what do you report?")
     conn.reply(m.chat, coy, m, { mentions: conn.parseMention(coy)})
  var caption2 = `*REPORT|LAPORAN*

*From:* @${m.sender.split(`@`)[0]}
_text:_ ${text}
`.trim()

conn.reply(data + "@s.whatsapp.net", caption2, m, { mentions: conn.parseMention(caption2) })
  } else if (/^balas$/.test(command)){
   let search = conn.cs[m.sender][id]
    cpt = `BALAS DARI ${search.type}
    
    Laporan dari @${search.from} , isi ${command}
    ${text}
    `
    conn.reply(search.from, cpt, m, { mentions: conn.parseMention(cpt) })
    delete conn.cs[search.from][id]
  }
}
handler.help = ['request', 'report'].map(v => v + '[teks]')
handler.tags = ['main']
handler.desc = ["Melaporkan dan Masukan"]
handler.command = /^(re(quest|port)|req|bug|balas)$/i

export default handler
