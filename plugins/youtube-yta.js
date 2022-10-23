
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import db from '../lib/database.js'

let limit = 100
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  
  let chat = db.data.chats[m.chat]
  //
  conn.yta = conn.yta ? conn.yta : {}
  /**
   * 
   * 
   * 
   **/
  const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 2000 : limit) * 1024
  let audio, source, res, link, lastError, isLimit
  for (let i in _audio) {
    try {
      audio = _audio[i]
      if (isNaN(audio.fileSize)) continue
      isLimit = limitedSize < audio.fileSize
      if (isLimit) continue
      link = await audio.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      audio = link = source = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download audio')
  switch(args[1]) {
    case 'todoc':
      m.reply(wait)
   /**await conn.sendFile(m.chat, source, title + '.mp3', `
*📌Title:* ${title}
*🗎 Filesize:* ${audio.fileSizeH}
`.trim(), m, null, {
    asDocument: true
  })**/
  await conn.sendMessage(m.chat, { document: { url: link}, mimetype: 'audio/mpeg', fileName: `${title}.mp3`, caption: `DONT FORGET TO SUPPORT ME!`}, {quoted: m})

  delete conn.yta[m.sender]
 // await m.quoted.delete()
    break
  case "opus":
    m.reply(wait)
await conn.sendFile(m.chat, source, title + '.mp3', `
*📌Title:* ${title}
*🗎 Filesize:* ${audio.fileSizeH}
`.trim(), m, null, {
    asDocument: chat.useDocument
  })
  delete conn.yta[m.sender]
 // await m.quoted.delete()
  break
 case "batal":
   m.reply("Membatalkan Unduhan")
   delete conn.yta[m.sender]
   break
  default:
  await conn.sendButton(m.chat, `*YOUTUBE DOWNLOADER*\n
*📌Title:* ${title}
*🗎 Filesize:* ${audio.fileSizeH}

Ketuk tombol dibawah untuk memilih tipe file
`.trim(), author, thumbnail, [["Dokumen", ".yta " + args[0]+ " todoc"], ["OPUS", ".yta " + args[0] + " opus"], ["Video", ".ytv "+ args[0]]], m)
  }
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i

handler.limit = true

export default handler

