import db from '../lib/database.js'

export async function all(m) {
    if (!m.fromMe)
        return
    let user = db.data.users[m.chat]
    if (!user.premiumTime)
        return !0
    if (+new Date() > user.premiumTime) {
        await this.reply(m.chat, 'Premium Anda Telah Habis')
        user.premiumTime = 0
    }
}