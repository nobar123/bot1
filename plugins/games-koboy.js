/**
 * Dibuat oleh : Muhammad Restu
 * Fix Rizky
 * ©Muhammad Restu 2021
 */
import db from "../lib/database.js"
let handler = (m, { conn, usedPrefix, command, text }) => {
  conn.tembak = conn.tembak || { musuh: [], tembak: [] }
  conn.koboy = conn.koboy ? conn.koboy : {}
  
  conn.koboy[m.sender] = {
    PLAYING: "Starting",
  }
  if (!conn.koboy[m.sender]) throw "Tidak ada sesi game"
   if(/kiri/i.test(text)) {
    let { chat, fromMe, id, isBaileys } = m.quoted
    let kiri = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    if(conn.tembak.tembak.indexOf("🤠") == 0) {
      conn.tembak.tembak = kiri[0]
    } else if(conn.tembak.tembak.indexOf("🤠") == 1) {
      conn.tembak.tembak = kiri[0]
    } else if(conn.tembak.tembak.indexOf("🤠") == 2) {
      conn.tembak.tembak = kiri[1]
    } else if(conn.tembak.tembak.indexOf("🤠") == 3) {
      conn.tembak.tembak = kiri[2]
    } else if(conn.tembak.tembak.indexOf("🤠") == 4) {
      conn.tembak.tembak = kiri[3]
    }

    let pos = conn.tembak.musuh.join(" ") + "\n\n\n" + conn.tembak.tembak.join(" ")

    m.quoted.delete()

    if(conn.tembak.musuh.indexOf("🥷") === conn.tembak.tembak.indexOf("🤠")) return conn.sendButton(m.chat, pos, "©Muhammad Restu", null, [ "Tembak", `${usedPrefix}${command} tembak`], m)
    return conn.sendButton(m.chat, pos, "©Muhammad Restu", null, [ "←", `${usedPrefix}${command} kiri`, "→", `${usedPrefix}${command} kanan`],m)
  } else if(/kanan/i.test(text)) {
    let { chat, fromMe, id, isBaileys } = m.quoted
    let kanan = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    if(conn.tembak.tembak.indexOf("🤠") == 0) {
      conn.tembak.tembak = kanan[1]
    } else if(conn.tembak.tembak.indexOf("🤠") == 1) {
      conn.tembak.tembak = kanan[2]
    } else if(conn.tembak.tembak.indexOf("🤠") == 2) {
      conn.tembak.tembak = kanan[3]
    } else if(conn.tembak.tembak.indexOf("🤠") == 3) {
      conn.tembak.tembak = kanan[4]
    } else if(conn.tembak.tembak.indexOf("🤠") == 4) {
      conn.tembak.tembak = kanan[4]
    }

    let pos = conn.tembak.musuh.join(" ") + "\n\n\n" + conn.tembak.tembak.join(" ")

    m.quoted.delete()

    if(conn.tembak.musuh.indexOf("🥷") === conn.tembak.tembak.indexOf("🤠")) return conn.sendButton(m.chat, pos, "©Muhammad Restu", "Tembak", `${usedPrefix}${command} tembak`)
    return conn.sendButton(m.chat, pos, author, null, ["←", `${usedPrefix}${command} kiri`, "→", `${usedPrefix}${command} kanan`], m)
  } else if(/tembak/i.test(text)) {
    let { chat, fromMe, id, isBaileys } = m.quoted
    if(conn.tembak.tembak.indexOf("🤠") == conn.tembak.musuh.indexOf("🥷")) {
      conn.tembak = {}
      db.data.users[m.sender].money += 1000
      m.reply("Kamu menang!\n\nUang += 1000")
    }
    m.quoted.delete()
  } else {
   var randMusuh = [
      ["🥷", "-", "-", "-", "-"],
      ["-", "🥷", "-", "-", "-"],
      ["-", "-", "🥷", "-", "-"],
      ["-", "-", "-", "🥷", "-"],
      ["-", "-", "-", "-", "🥷"]
    ]
   var randAku = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

   var musuh = random(randMusuh)
   var aku = random(randAku)

    conn.tembak.musuh = musuh
    conn.tembak.tembak = aku

    let pos = conn.tembak.musuh.join(" ") + "\n\n\n" + conn.tembak.tembak.join(" ")

    if(conn.tembak.musuh.indexOf("🥷") === conn.tembak.tembak.indexOf("🤠")) return conn.sendButton(m.chat, pos, author, null, [ "Tembak", `${usedPrefix}${command} tembak`], m)
    return conn.sendButton(m.chat, pos, author, null, ["←", `${usedPrefix}${command} kiri`, "→", `${usedPrefix}${command} kanan`], m)
  }
}


handler.help = ["koboy"]
handler.tags = ["fun"]

handler.command = /^(koboy)/i
handler.desc = [" bermain tembak tembakan koboy"]
export default handler


function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
