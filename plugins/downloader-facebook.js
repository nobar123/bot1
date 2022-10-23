import { facebookdlv3, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/`
    const { result } = await facebookdlv2(args[0])
    //const { url } = result
    if (!result[0].url) return m.reply(fail)
    await conn.sendFile(m.chat, result[0].url, `facebook.mp4`,`Kualitas: ${result[0].quality}`, m)
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.limit = false

export default handler
