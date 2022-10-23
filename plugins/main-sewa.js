let handler = async (m, { conn, args, usedPrefix, command }) => {
  
  cpt = `*=== PREMIUM BOT ====*
  10rb / 1 Minggu (Saweria)(Pulsa)
  25k / 1 bulan (Saweria)(Pulsa)
  
== SEWA BOT KE GC ==
15rb /1 bulan 2 hari (Pulsa)
30rb /2 bulan (Pulsa)

10rb /1 bln (Saweria)
25rb / 1 bulan 2 minggu (saweria)

SPECIAL FRATURE KHUSUS PREMIUM: 
+ Create Gc(Membuat Grup chat tanpa batas)
+ Limit Tidak Terbatas
+ Bisa menggunakan semua command tanpa takut limit habis.
+ Memasukan Bot Ke grup tanpa batas

VIA: OVO/DANA/PULSA/SAWERIA/TRAKTEER
Kirim Bukti pembayaran ke Developer/Owner/Pemilik

Bisa hubungi Developer ketik /owner
`
m.reply(cpt)
}
handler.help = ['premium', 'Sewa']
handler.tags = ['main']
handler.desc = ["Melihat daftar harga premium dan sewa bot ke group dan juga spesial fitur"]
handler.command = /^(premium(price)?|list(premium)?(sewa)?)$/i
export default handler
