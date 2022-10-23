import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup'
    let groupMetadata = await conn.groupMetadata(group)
    const pp = await conn.profilePictureUrl(group, 'image').catch(_ => null) || './src/avatar_contact.png'
    if (!groupMetadata) throw 'groupMetadata is undefined :\\'
    if (!('participants' in groupMetadata)) throw 'participants is not defined :('
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw 'Aku tidak ada di grup itu :('
    if (!me.admin) throw 'Aku bukan admin T_T'
    conn.sendHydrated(m.chat, `Link Group *${groupMetadata.subject}*
    
    https://chat.whatsapp.com/${await conn.groupInviteCode(group)}`, 'Group Link Button', null, `https://www.whatsapp.com/otp/copy/https://chat.whatsapp.com/${await conn.groupInviteCode(group)}`, 'Copy', null, null, [[null,null]], m, { viewOnce: true})
}
handler.help = ['gclink']
handler.tags = ['group']
handler.command = /^(grouplink|gclink|gruplink)$/i
//handler.botAdmin = true

export default handler
