import { join } from 'path'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  
  let _package = JSON.parse(await fsd.readFileSync(join('./package.json')))
  
  cpt = `Bot Version Now  _*${_package.version}*_
  
Support me to better ${trakteer}
Jika Menemukan Eror atau Bug silahkan ketik /Report bug

${changelog}`
  m.reply(cpt)
}
 handler.help = ['changelog']
handler.tags = ['main']
handler.command = /^(changelog)$/i
export default handler
