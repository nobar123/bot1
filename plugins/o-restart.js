async function handler(m, { conn, isROwner }) {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (conn.user.jid == conn.user.jid) {
    conn.sendButton(m.chat, 'Mengaktifkan ulang bot...', "Restart bot", null, [['Ping', '.ping']], m).then(_=> {
      process.send('reset')
    })
  } else throw '_Wadahellll..._'
}
handler.help = ['restart']
handler.tags = ['host']
handler.desc = ["Untuk merestart Bot"]
handler.command = /^(res(tart)?)$/i

handler.owner = true
export default handler