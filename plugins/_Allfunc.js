
import db from "../lib/database.js"
import axios from "axios"
import cheerio from "cheerio"
import FormData from "form-data"
import instagramGetUrl from 'instagram-url-direct'

//Auto respon other
export async function all(m, { isPrems, isOwner}) {
    
    let setting = db.data.settings[this.user.jid]
    let user = db.data.users[m.sender]
 
    //GC INVIT
    if ((m.mtype === 'groupInvitem.senderssage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
      
    this.reply(m.chat,"```Auto Responder```" + "\n" + "Ketik *.join linkgrup* - untuk permintaan masukan bot kedalam grup yg diminta atau hubungi developer",m)
      
    }
    /**
     * 
     * Doc Buat Fake reply
     * 
    **/
    global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocum.sendernt.presentationml.presentation", "application/msword", "application/pdf"])
		
		/**
		 *
		 * 
		 * Module
		 * 
		**/
		global.nowS = "Season 3 🎃- Hellowen 9 Sep s/d 9 November"
global.fetch = (await import('node-fetch')).default
    global.skrep = (await import("@bochilteam/scraper"));
    global.skrep2 = ( await import('../lib/scrape.js'))
    global.axios = axios
    global.cheerio = cheerio
    global.foda = FormData
    global.canva = ( await import("canvacord")).default
    global.fs = (await import("fs")).promises
    global.fsd = (await import("fs")).default
     global.user = db.data.users[m.sender]
     global.changelog = `*V3.8.7 (STABIL) - 11 Oktober 1:48 PM*
     penambahan fitur react
     penambahan koboy (BETA)
     Penambahan Setppgc setdesk setname
     menambahkan pencarian group wa
     menambahkan restart bot khusus pemilik bot
     Menambahkan emojimix
     Penstabilan bot
     Fix bug Tiktok`
    // global.m.chat = m.chat
    // global.zyz = m.chat
    global.bendera = ("🇦🇨🇦🇩🇦🇪🇦🇫🇦🇬🇦🇮🇦🇱🇦🇲🇦🇴🇦🇶🇦🇷🇦🇸🇦🇹🇦🇺🇦🇼🇦🇽🇦🇿🇧🇦🇧🇧🇧🇩🇧🇪🇧🇫🇧🇬🇧🇭🇧🇮🇧🇯🇧🇱🇧🇲🇧🇳🇧🇴🇧🇶🇧🇷🇧🇸🇧🇹🇧🇻🇧🇼🇧🇾🇧🇿🇨🇦🇨🇨🇨🇩🇨🇫🇨🇬🇨🇭🇨🇮🇨🇰🇨🇱🇨🇲🇨🇳🇨🇴🇨🇵🇨🇷🇨🇺🇨🇻🇨🇼🇨🇽🇨🇾🇨🇿🇩🇪🇩🇬🇩🇯🇩🇰🇩🇲🇩🇴🇩🇿🇪🇦🇪🇨🇪🇪🇪🇬🇪🇭🇪🇷🇪🇸🇪🇹🇪🇺🇫🇮🇫🇯🇫🇰🇫🇲🇫🇴🇫🇷🇬🇦🇬🇧🇬🇩🇬🇪🇬🇫🇬🇬🇬🇭🇬🇮🇬🇱🇬🇲🇬🇳🇬🇵🇬🇶🇬🇷🇬🇸🇬🇹🇬🇺🇬🇼🇬🇾🇭🇰🇭🇳🇭🇷🇭🇹🇭🇺🇮🇨🇮🇩🇮🇪🇮🇱🇮🇲🇮🇳🇮🇴🇮🇶🇮🇷🇮🇸🇮🇹🇯🇪🇯🇲🇯🇵🇰🇪🇰🇬🇰🇭🇰🇮🇰🇲🇰🇳🇰🇵🇰🇷🇰🇼🇰🇾🇰🇿🇱🇦🇱🇧🇱🇨🇱🇮🇱🇰🇱🇷🇱🇸🇱🇹🇱🇺🇱🇻🇱🇾🇲🇦🇲🇨🇲🇩🇲🇪🇲🇫🇲🇬🇲🇭🇲🇰🇲🇱🇲🇲🇲🇳🇲🇴🇲🇵🇲🇶🇲🇷🇲🇸🇲🇹🇲🇺🇲🇻🇲🇼🇲🇽🇲🇾🇲🇿🇳🇦🇳🇨🇳🇪🇳🇫🇳🇬🇳🇮🇳🇱🇳🇴🇳🇵🇳🇷🇳🇺🇳🇿🇴🇲🇵🇦🇵🇪🇵🇫🇵🇬🇵🇭🇵🇰🇵🇱🇵🇲🇵🇳🇵🇷🇵🇸🇵🇹🇵🇼🇵🇾🇶🇦🇷🇪🇷🇴🇷🇸🇷🇺🇷🇼🇸🇦🇸🇨🇸🇩🇸🇪🇸🇬🇸🇭🇸🇮🇸🇯🇸🇰🇸🇱🇸🇲🇸🇳🇸🇴🇸🇷🇸🇸🇸🇹🇸🇻🇸🇽🇸🇾🇸🇿🇹🇦🇹🇨🇹🇩🇹🇫🇹🇬🇹🇭🇹🇯🇹🇰🇹🇱🇹🇲🇹🇳🇹🇴🇹🇷🇹🇹🇹🇻🇹🇼🇹🇿🇺🇦🇺🇬🇺🇲🇺🇳🇺🇸🇺🇾🇺🇿🇻🇦🇻🇨🇻🇪🇻🇬🇻🇮🇻🇳🇻🇺🇼🇫🇼🇸🇽🇰🇾🇹🇿🇦🇿🇲🇿🇼🏴󠁧󠁢󠁥󠁮󠁧󠁿🏴󠁧󠁢󠁳󠁣󠁴󠁿🏴󠁧󠁢󠁷󠁬󠁳󠁿")
    
     global.db = ( await import("../lib/database.js"))
     global.wrong = "*Salah*"
     global.fact = "*Benar*"
     global.eror = "Terjadi Kegagalan fatal pada kode"
     global.wait = "Sedang diproses... Tunggu beberapa *Menit* atau *Detik*"
     global.
     global.fail = "Gagal Mendapatkan data"
     global.viwon = "viewOnce: true"//Hehe
     global.cpt = ""//Mempermudanh
     global.beta = "FITUR INI MASIH DALAM PENGEMBANGAN, JIKA ADA EROR HUBUNGI DEVELOPER BOT"
     //global.we = db.data.users[you]
    /**
     * 
     * 
     *
     * db
     * 
     **/
    
        
}




  
      

  







function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
