import db from "../lib/database.js"
let handler = async (m, { conn, args }) => {
	
	let list = Object.entries(db.data.users)
	let lim = !args || !args[0] ? 0 : isNumber(args[0]) ? parseInt(args[0]) : 0
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.exp = lim)))
	list.map(([user, data], i) => (Number(data.level = lim)))
list.map(([user, data], i) => (Number(data.season = "S1🌿, S2👺, S2.5🏖️, S3🎃, S4❄️(Next)")))
		conn.reply(m.chat, `*berhasil Db user*`, m)
}
handler.help = ['resetdb'].map(v => 'reset' + v)
handler.tags = ['owner', 'host']
handler.command = /^(resetdb)$/i

handler.rowner, handler.mods = true

export default handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}
