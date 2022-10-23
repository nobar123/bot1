//Module
import { plugins } from '../lib/plugins.js'
import db from "../lib/database.js"
let handler = async (m, { conn,text, usedPrefix, command}) => {
  if (!text) throw `Mau cari command apa?`
  
  cpt = `Helper command.
 Command: null
 Tags: null
 prefix:
 Description: null
  `
  m.reply(cpt)
}
handler.help = ["help <command>"]
handler.tags = ["main"]
handler.desc = ["Untuk melihat cara penggunaan pada setiap command"]
handler.command = /^help$/i
export default handler