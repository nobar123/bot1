import db from "../lib/database.js"

let handler = async (m, { conn, isPrems, isOwner}) => {
  let user = db.data.users[m.sender]
  user.swordskin = isPrems ? seasonclaim.claim("swordp") : seasonclaim.claim("sword")
  m.reply(`YOU HAVE BEEN CLAIMED
 Sword ${isPrems ? seasonclaim.claim("swordp") : seasonclaim.claim("sword")}
 
 Money ${isPrems ? seasonclaim.claim("money") : ""}`)
}
handler.help = ["claimseason"]
handler.tags = ["rpg"]
handler.command = /^claimseason$/i
handler.premium
export default handler

global.seasonclaim = {
  claim(query) {
    query = query.toLowerCase()
    let cc = {
    sword: "Overwatchs Genji Skin",
    swordp: "Skeleton Dark burn Skin",
    armor: "The Skeleton pumpkin hat skin",
    exp: 10000,
    expp: 30000,
    money: 15000,
    moneyp: 35000,
    limit: 2,
    limitp: 5
  }
  let results = Object.keys(cc).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(query))
    if (!results.length) return ''
    else return cc[results[0][0]]
}
}