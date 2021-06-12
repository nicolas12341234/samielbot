const Discord = require('discord.js');
const Client = new Discord.Client();

const {messageembed } = require('discord.js')



let cooldown = new Set()


module.exports = {
  name: "kick", //Aquí ponemos el nombre del comando
  alias: ["expulsar"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

execute (client, message, args){



  if(cooldown.has(message.author.id)){
    message.channel.send(`${message.author}, Debes esperar 10s antes de vover a usar el comando`)
  
    return;
  }
  
  cooldown.add(message.author.id);
  
  
  setTimeout(() => {
    cooldown.delete(message.author.id);
  
  }, 10000);

  var perms = message.member.hasPermission("KICK_MEMBERS")
  if(!perms) return message.channel.send("No tienes permisos necesarios para utilizar este comando!")

  const user = message.mentions.members.first()
  if(!user)return message.channel.send("Debes seleccionar un miembro! ")

  if(user === message.author ) return message.channel.send("No te puede expulsar a ti mismo")

  var razon = args.slice(1).join('')
  if(!razon){
      razon = 'No especificada'

  }

  message.guild.member(user).kick(razon);

  message.channel.send(`El usuario **${user}** fue expulsado por ${razon}\nModerador: ${message.author}`)
 }

}