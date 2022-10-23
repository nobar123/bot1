let handler = async (m, { conn, text, usedPrefix, command }) => {
  let [amoun, curen, teks, fro, ...imeg ] = text.split('|')
    
  if (!amoun || !curen || !teks || !fro || !imeg) throw `${usedPrefix + command} 90|USD|Bayar Utang Lo|6282328303332@s.whatsapp.net|https;//pin/example`
  conn.sendPayment(m.chat, amoun, curen, teks, fro, null)
}
  handler.help = ['payment'].map(v => v + ' <amount> <currency> <text> <nomor> <image>')
handler.tags = ['tool']
handler.command = /^(payment)$/i
export default handler