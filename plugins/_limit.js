
import db from "../lib/database.js"

export async function all(m) {
let user = db.data.users[m.sender]
if (user.premium) {
if ((user.limit * 1) > 9999999) {
        user.limit = 9999999
     console.log("Melebihi batas limit")
     this.reply(m.sender, "Limit kamu mencapai batas maksimal", m)
        } else if ((user.limit * 1) < 0) {
        user.limit = 0
        }
} else {
    if ((user.limit * 1) > 10) {
        user.limit = 10
     console.log("Melebihi batas limit")
     this.reply(m.sender, `Hai kak ${this.getName(m.sender)}, Limit kamu melebihi batas ${user.limit}/10, Untuk menikmati Fitur tanpa limit dan tak terbatas silahkan upgrade premium:)`, m)
        } else if ((user.limit * 1) < 0) {
        user.limit = 0
    }
 }
    }