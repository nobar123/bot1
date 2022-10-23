import db from "../lib/database.js"
let handler = async (m, { conn, args }) => {
	
	let list = Object.entries(db.data.users)
	let lim = !args || !args[0] ? 0 : isNumber(args[0]) ? parseInt(args[0]) : 0
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.limit = lim)))
	
		conn.reply(m.chat, `*berhasil reset limit user*`, m)
}
handler.help = ['resetlimit'].map(v => 'reset' + v)
handler.tags = ['owner', 'host']
handler.command = /^(resetlimit)$/i

handler.rowner = true

export default handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}
