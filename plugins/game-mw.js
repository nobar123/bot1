import minesweeper from '../lib/mwgrip.js'
import db from "../lib/database.js"
global.mines = {}
var game = false

let handler = async (m, { conn, command, args, usedPrefix }) => {
        const orgs = args[0]
	const oX = args[1]
	const oY = args[2]
	const F = args[3]
	const x = 10
        //kyk Kordinat
	const y = 10
	const bomb = 15
	if (!orgs) return m.reply(`*👾 Minesweeper Game👾*
*▶️ start* - <Start The Game/Memulai Permainan>
*🔓 open* - <to open/Untuk Membuka>
*🔽Surend/Nyerah* - <to give up/menyerah>

*example:* .Minesweeper start
©FearTeam`)
   
    switch (orgs.toLowerCase()) {
case "start": 
if (mines[m.sender]) return m.reply("sedang ada sesi permainan/there is a game session")
var map = minesweeper.generate(x, y, bomb)
var empty = await minesweeper.generate_empty(x, y)
conn.sendHydrated(m.chat, minesweeper.generate_string(empty)+ '\n\nExp: 9000', author, null, "https://www.whatsapp.com/otp/copy/.mw open nomor nomor", "Jalan", null, null, [['Giveup🖐️', usedPrefix + 'mw nyerah']], m, {viewOnce: true})
                 
return mines[m.sender] = { 'map': map, 'current': empty }

case "nyerah": case "surrend":
 if (!mines[m.sender]) throw "Tidak Ada Sesi Game"
delete mines[m.sender]
return conn.sendButton(m.chat, `Anda Menyerah`, author, null, [['Ok', 'ok'], ['Play Again', usedPrefix + 'mw start']], m)

case "open" : 
if (!mines[m.sender]) return m.reply("tidak ada sesi permainan/No session Game")
if (oX > 10) throw "Tidak bisa melebihi 11"
var g = global.mines[m.sender]

if (!oX || !oY) return m.reply("masukkan parameter yang benar.. contoh: /minesweeper open 2 5")
//Eror keknya 
if(F){
                if(F === 'f' && g.current[oY - 1][oX - 1] === 'e'){
                    g.current[oY - 1][oX - 1] = 'f'
                }
            } 
      else {
                g.current[oY - 1][oX - 1] = g.map[oX - 1][oY - 1]
                    if(g.map[oY - 1][oX - 1] === 0){
                        let zero = minesweeper.detect_zero(g.map, oX, oY)
                        for(var i = 0; i < zero.length; i++){
                            g.current[zero[i][0]][zero[i][1]] = g.map[zero[i][0]][zero[i][1]]
                        }                       
                       } else if(g.map[oY - 1][oX - 1] === 'x'){
                         global.db.data.users[m.sender].exp += 9000
                        conn.sendButton(m.chat, 'YOU WIN🎊🎉\n\n *🎁Hadiah/gift:* 9000Exp🧬', author, null, [['Play Again', usedPrefix + 'mw start']], m)
                        delete mines[m.sender]
                        
                      global.db.data.users[m.sender].exp += 9000
                     
                      return conn.sendButton(m.chat, await minesweeper.generate_string(g.map) + '\n' + '*You Got exp🧬* Exp 9000', author, null, [['Again', usedPrefix + 'mw start']], m)
                    }
                }
              conn.sendHydrated(m.chat, await minesweeper.generate_string(g.current) + '\n\nExp: 9000Exp', author, null, "https://www.whatsapp.com/otp/copy/.mw open nomor nomor", "jalan", null, null , [['Giveup🖐️', usedPrefix + 'mw nyerah']], m, {viewOnce: true})
           }
        }
     /**
    MADE BY FAUZAN REKODE OR FIX BY RIZXYU
    **/
handler.help = ['mw', 'minesweeper'].map(v => v + ' <select>' + '<number>'+ '<number>')
handler.tags = ['game']
handler.command = /^(minesweeper|mw)$/i

// LO TAU GAK UDH CAPEK CAPEK BIKIN MALAH DI COMOT ORANG
export default handler
