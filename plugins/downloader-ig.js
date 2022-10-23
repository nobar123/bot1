import instagramGetUrl from 'instagram-url-direct'
import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from "@bochilteam/scraper"
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
    const p = await instagramGetUrl(args[0])
    console.log(p)
    const results = (await instagramGetUrl(args[0])).url_list[0]

    conn.sendFile(m.chat, results, 'instagram.mp4', `*INSTAGRAM DOWNLOADER*`, m)
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.desc = ["mendownload video ataupun Foto di Instagram"]
handler.command = /^(ig(dl)?)$/i

export default handler