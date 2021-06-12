const Discord = require('discord.js');


let cooldown = new Set()


module.exports = {
  name: "estadobot", //Aquí ponemos el nombre del comando
  alias: [], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

execute (client, message, args){

  if(cooldown.has(message.author.id)){
    message.channel.send(`${message.author}, Debes esperar 10s antes de vover a usar el comando`)
  
    return;
  }
  
  cooldown.add(message.author.id);
  
  
  setTimeout(() => {
    cooldown.delete(message.author.id);
  
  }, 10000);
    message.channel.send("Estado del bot: @PHANTHOM#3419  VUELVAME A DAÑAR Y ME SUICIDO")

 }

} 

