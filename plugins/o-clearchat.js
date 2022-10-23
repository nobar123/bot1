import Connection from '../lib/connection.js'


let handler = async (m, { conn, command, args }) => {
  let chats = args.length > 0 && /group|gc/i.test(args[0]) ? Object.entries(Connection.store.chats).filter(([_, chat]) => chat.isChats).map(v => v[0]) : [m.chat]
  let isDelete = /^(clear|delete)/i.test(command)
  for (let id of chats) {
    if (isDelete) await conn.chatModify( 'delete', conn.user.jid).catch(console.log)
   // await conn.chatModify(id, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3, ).catch(console.log)//
  }
  conn.reply(m.chat, chats.length + ' chat grup telah dib' + (isDelete ? 'ersihkan' : 'isukan selamanya'), m)
}
handler.help = ['deletechat', 'deletechat group', 'mutechat', 'mutechat group']
handler.tags = ['owner']
handler.drsc = ["menghapus chat"]
handler.command = /^(clear|delete|mute)chat$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler
