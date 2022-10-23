let handler = async (m, { conn, text }) => {
   
   if (!text) return m.reply('_Masukkan Nama Grup!_')
   try{
    m.reply(wait)
    let group = await conn.groupCreate(text, [m.sender])
    let link = await conn.groupInviteCode(group.gid)
    let url = 'https://chat.whatsapp.com/' + link;
    await conn.reply(m.sender, '_Berhasil Membuat Grup *' + text + '*_\n\n*Nama:* ' + text + '\n*ID:* ' + group.gid + '\n*Link:* ' + url, m)
             m.reply("SILAHKAN CEK CHAT PRIBADI UNTUK DAPAT LINK GCNYA")
       } catch (e) {
    m.reply(`Error`)
  }
}
handler.help = ['creategroup']
handler.tags = ['premium']
handler.desc = ["bot Membuat grup"]
handler.command = /^((create|buat)(gc|grup|group))$/

handler.premium = true

export default handler