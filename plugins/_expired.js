import db from '../lib/database.js'

export async function all(m) {
    if (!m.isGroup)
        return
    let chats = db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, 'Grup Melewati batas Hari/Jatuh Tempo\nBye🖐 bot akan Keluar.. Untuk memasukan bot kembali hubungi DEVELOPER bot')
        await this.sendContact(m.chat, (["6282328303332", "DEVELOPER (Shen)"]), m)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}