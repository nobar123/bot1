import db from '../lib/database.js'

const rewards = {
  exp: 50000,
  money: 15000,
  potion: 5,
  swordskin: "Overwatchs Genji Skin"
}
const cooldown = 86400000
let handler = async (m) => {
  
  let user = db.data.users[m.sender]
  if (user.swordskin) return
  if (new Date - user.lastclaim < cooldown) throw `You have already claimed this daily claim!, wait for *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  m.reply(text.trim())
  user.lastclaim = new Date * 1
}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i

handler.cooldown = cooldown

export default handler
