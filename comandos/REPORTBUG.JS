const Discord = require('discord.js');

const Client = new Discord.Client();

const {messageembed } = require('discord.js')

module.exports = {
  name: "reportbug", //Aquí ponemos el nombre del comando
  alias: [""], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

execute (client, message, args){

  const reporte = args.join(" ")


  if (!reporte) return message.channel.send("Debes decir el bug!" +  + message.author.displayName, message.author.avatarURL())

  const embed = new Discord.MessageEmbed()

   .setTitle("Reporte")
   .setDescription(`El usuario **${message.author.username}**ha hecho un reporte desde el servidor**${message.guild.name}**.  REPORTE:\n\n**${reporte}`)


   .setColor("YELLOW")
    

   client.channels.cache.get(`852676838799179837`).send(embed)
   client.users.cache.get(`753067787701846056`).send(embed)
   client.users.cache.get(`566717986040446987`).send(embed)
   client.users.cache.get(`439934888502624256`).send(embed)
 }

} 


//////\ ` //////



