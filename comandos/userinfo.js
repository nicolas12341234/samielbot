const Discord = require('discord.js');
const Client = new Discord.Client();

const {messageembed } = require('discord.js')

let cooldown = new Set();
module.exports = {
  name: "userinfo", //Aquí ponemos el nombre del comando
  alias: ["info"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

execute (client, message, args){

  if(cooldown.has(message.author.id)){
    message.channel.send(`${message.author}, acosador de mierda espera 10s`)
  
    return;
  }
  
  cooldown.add(message.author.id);
  
  
  setTimeout(() => {
    cooldown.delete(message.author.id);
  
  }, 10000);

  let estados = {
      "online": "en linea",
      "idle": "Ausente",
      "dnd": "No molestar",
      "offline":"Desconectado/invisible"

  };
  const member = message.mentions.members.first() || message.member;
  function formateDate (template, date){
  var tiempo = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now()  - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i ){

  }, template)
}
  const embedinfo = new Discord.MessageEmbed()

  .setColor("BLUE")
  .setDescription(`**informacion de ${member}:**`)
  .addField(`**Nombre:`, `**${member.user.tag}**`)
  .addField("**ID:**", `**${member.user.id}**` )
  .addField("**Apodo del usuario:**", `${member.nickname !==null ? `${member.nickname}`: 'ninguno'}`)
  .addField("Union al servidor:**", formateDate('DD/MM/YYYY, a las HH:MM:SS', member.joinedAT))
  .addField("**ROLES:**", member.roles.cache.map(roles => `\`${roles.name}\``).join(','))
  .addField("**Boosts:", member.premiumSince ? 'Usuario booster' : 'Usuario no booster')
  .addField("Estado", estados[member.user.presence.status])
  
  
  .setThumbnail(member.user.displayAvatarURL(  {format: 'png', dynamic:'true'}))


  const embed10 = new Discord.MessageEmbed()

  .setTitle("Informacion:")
  .setDescription("se te envio la informacion a mensajes directos")
  .setColor("RANDOM")


  message.channel.send(embed10)

  message.author.send(embedinfo)
  
   
   

 }

} 