let handler = async (m, { conn, text, participants }) => {
if (!text) throw `tag someone`
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'remove')
m.reply(`@${users.split("@")[0]} is Now admin`)
}
handler.help = ['demote', '↓'].map(v => v+'@tag')
handler.tags = ["admin"]
handler.command = /^(demote|↓)$/i
handler.desc = ["Menghapus Jabatan admin di grup"]
handler.botAdmin = true
handler.admin = true
handler.group = true

export default handler


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
/**© 2022 GitHub, Inc.
Terms
Privacy**/