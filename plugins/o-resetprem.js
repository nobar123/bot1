import db from "../lib/database.js"
let handler = async (m, { conn, args }) => {
	
	let list = Object.entries(db.data.users)
	
	list.map(([user, data], i) => (Number(data.premiumTime = 0)))
	list.map(([user, data], i) => (Number(data.premium = false)))
	
		conn.reply(m.chat, `*berhasil reset premium user*`, m)
}
handler.help = ['resetpremium'].map(v => 'reset' + v)
handler.tags = ['owner', 'host']
handler.command = /^(resetpremium)$/i

handler.rowner = true

export default handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}
