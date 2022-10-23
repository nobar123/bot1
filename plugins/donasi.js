let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel ${pulsa}
╰────

╭─「 Donasi • Non Pulsa 」
│ • ${saweria}
│ • ${trakteer}
│ • Dana 083197563509 
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
