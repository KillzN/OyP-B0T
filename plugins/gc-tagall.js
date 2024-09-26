let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*✨𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎✨ * ${pesan}`
  let teks = `*𝗜𝗡𝗩𝗢𝗖𝗔𝗡𝗗𝗢 𝗣𝗟𝗔𝗡𝗧𝗔𝗦*\n\n ${oi}\n\n➥ _*𝗕𝗢𝗧 𝗣𝘆𝗢: @puntoagu:*_\n`
  for (let mem of participants) {
  teks += `🕸 ⇝ @${mem.id.split('@')[0]}\n`}
  teks += `└ *PʏOBᴏᴛ ⇝ @Puntoagu*`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten|putos|animales)$/i
  handler.admin = true
  handler.group = true
  export default handler