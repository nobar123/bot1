function handler(m, { conn }) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
 // const dta = global.mods.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
//  conn.sendContact(m.chat, dta.map(([id, name]) => [id, name]), m)
  m.reply("INI ADALAH NOMOR CS\n\nJika Bot mengalami Masalah bisa hubungi kontak tersebut")
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
