import crypto from "crypto"

let handler = async(m, { conn, text, usedPrefix, command, isPrems }) => {
  conn.menfess = conn.menfess ? conn.menfess : {}

  let type = text.split(" ")[0].toLowerCase()
  let argumen = text.split(" ").slice(1).join(" ")

  if(type == "send" || type == "kirim") {
    let [nomor] = argumen.split("|")
    nomor = nomor.replace(/[^0-9]/g, "")
    let jid = nomor + "@s.whatsapp.net"
    let teks = argumen.split("|").slice(1).join("|")
    let id = crypto.randomBytes(5).toString("hex")

    if(!argumen || !nomor || !teks) return m.reply(`example: ${usedPrefix}${command} kirim ${global.owner[0][0]}|hai`)
    
    if(!(await conn.onWhatsApp(jid))[0]) return m.reply("Nomor tidak ada di WhatsApp!\n\nPastikan nomor di awali 628 bukan 08")
    //if(jid == m.sender) return m.reply("Tidak dapat mengirim pesan ke diri sendiri :|")
    if(jid == conn.user.jid) return m.reply("Tidak dapat mengirim pesan ke bot :|")
    if(jid == "0@s.whatsapp.net") return m.reply("Tidak dapat mengirim pesan ke Official WhatsApp :|")

    m.reply("Pesan sudah dikirim ke nomor yg dituju\n\nID : " + id)
    conn.copyLink(jid, `*BOT CONFESS/MENFESS*\n\nHai Kamu Menerima pesan *Rahasia* nih\n\n*Dari:* _Rahasia_\n*Isi Pesan :* ${teks}\n\nUntuk melihat siapa si pengirim ketik ${usedPrefix}${command} lihat ${id} < masukkan id`, author, `${usedPrefix}${command} balas ${id}|text`, "Balas")

    if(!conn.menfess[jid]) conn.menfess[jid] = {}
    conn.menfess[jid][id] = {
      from: m.sender,
      at: m.messageTimestamp.low * 1000 + (1000*60*60*7),
      message: teks
    }
  } else if(type == "get" || type == "lihat") {
    if(!(Object.keys(conn.menfess[m.sender] || {}))[0]) return m.reply("Tidak ada yg mengirim confess kepada Anda :|")
    if (!isPrems) throw "Upgrade ke premium untuk membuka fitur ini"
    let id = argumen
    let search = conn.menfess[m.sender][id]

    if(!search) return m.reply("Pesan tidak ditemukan!")

    let _at = new Date(search.at)
    let at = (_at.getFullYear() + "-" + (_at.getMonth() + 1) + "-" + _at.getDate()).split("-").map(v => v.padStart(2, "0")).join("-")
    at += ", "
    at += (_at.getHours() + ":" + _at.getMinutes() + ":" + _at.getSeconds()).split(":").map(v => v.padStart(2, "0")).join(":")
    cpt = `[ Melihat Isi Confess ]\n\n*Pengirim :* @${search.from.split("@")[0]}\n*Waktu :* ${at}\n*Pesan :* ${search.message}\n\nKetik *${usedPrefix}${command} balas ${id}|text* Untuk membalas`
    conn.reply(m.chat, cpt, m, { mentions: conn.parseMention(cpt)})
  } else if(type == "reply" || type == "balas") {
    if(!(Object.keys(conn.menfess[m.sender] || {}))[0]) return m.reply("Tidak ada yg mengirim confess kepada Anda :|")

    let id = argumen.split("|")[0]
    let teks = argumen.split("|").slice(1).join("|")
    let search = conn.menfess[m.sender][id]

    if(!search) return m.reply("Pesan tidak ditemukan!")

    m.reply(`\n@${m.sender.split("@")[0]} Telah membalas pesan anda!\n\n*Balasan :* ${teks}\n`, search.from, { mentions: [m.sender] })
    m.reply("Berhasil membalas ke id " + id)

    delete conn.menfess[m.sender][id]
  } else if(type == "list") {
    if(!(Object.keys(conn.menfess[m.sender] || {}))[0]) return m.reply("Tidak ada yg mengirim confess kepada Anda :|")

    let menfess = conn.menfess[m.sender]
    let str = "\n[ *List Confess* ]\n\n" + "-".repeat(50) + "\n"
    for(let i in menfess) {
      let _at = new Date(menfess[i].at)
      let at = (_at.getFullYear() + "-" + (_at.getMonth() + 1) + "-" + _at.getDate()).split("-").map(v => v.padStart(2, "0")).join("-")
      at += ", "
      at += (_at.getHours() + ":" + _at.getMinutes() + ":" + _at.getSeconds()).split(":").map(v => v.padStart(2, "0")).join(":")
      str += `*ID :* ${i}\n*Waktu :* ${at}`
      str += "\n" + "-".repeat(50) + "\n"
    }
    m.reply(str)
  } else return m.reply(`\n[ *Argumen* ]\n\n1. Mengirim pesan ke orang\n- ${usedPrefix}${command} send 628XXXXXXXXXX|Halo\n- ${usedPrefix}${command} kirim 628XXXXXXXXXX|Hello\n\n2. Melihat pesan dari id\n- ${usedPrefix}${command} get id\n- ${usedPrefix}${command} lihat id\n\n3. Membalas pesan lewat id\n- ${usedPrefix}${command} reply id|text\n- ${usedPrefix}${command} balas id|text\n\n4. Melihat semua pesan\n- ${usedPrefix}${command} list\n`)
}
handler.help = ["confess", "menfess"]
handler.tags = ["main"]
handler.desc = ["Mengirim pesan tidak dikenal ke nomor yg ingin dikirim ke nomor yg dituju"]
handler.command = /^(confess|menfes(s)?)$/i

export default handler
