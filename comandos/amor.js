const Discord = require('discord.js');
const Client = new Discord.Client();

const { messageembed } = require('discord.js')


let cooldown = new Set();



module.exports = {


  name: "amor", //Aquí ponemos el nombre del comando
  alias: [], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

  execute(client, message, args) {

if(cooldown.has(message.author.id)){
  message.channel.send(`${message.author}, Debes esperar 10s antes de vover a usar el comando`)

  return;
}

cooldown.add(message.author.id);


setTimeout(() => {
  cooldown.delete(message.author.id);

}, 10000);



//////\ ` //////
    let user = message.mentions.users.first()

    if (!user) return message.channel.send("Debes mencionar a alguien!.")


    const embed = new Discord.MessageEmbed()

      .setTitle("amor")
      .setDescription(`${message.author.username}y ${user.username} se quieren un 2%`)
      .setColor("RANDOM")

    const embed1 = new Discord.MessageEmbed()

      .setTitle("amor")
      .setDescription(`${message.author.username}y ${user.username} se quieren un 12%`)
      .setColor("RANDOM")

    const embed2 = new Discord.MessageEmbed()

      .setTitle("amor")
      .setDescription(`${message.author.username}y ${user.username} se quieren un 23%`)
      .setColor("RANDOM")

    const embed3 = new Discord.MessageEmbed()

      .setTitle("amor")
      .setDescription(`${message.author.username}y ${user.username} se quieren un 37%`)
      .setColor("RANDOM")

    const embed4 = new Discord.MessageEmbed()

      .setTitle("amor")
      .setDescription(`${message.author.username}y ${user.username} se quieren un 45%`)
      .setColor("RANDOM")

    const embed5 = new Discord.MessageEmbed()
      .setTitle("amor")
      .setDescription(`${message.author.username}y ${user.username} se quieren un 59%`)
      .setColor("RANDOM")

    const embed6 = new Discord.MessageEmbed()

      .setTitle("amor")
      .setDescription(`${message.author.username}y ${user.username} se quieren un 65%`)
      .setColor("RANDOM")

    const embed7 = new Discord.MessageEmbed()

      .setTitle("amor")
      .setDescription(`${message.author.username}y ${user.username} se quieren un 77%`)
      .setColor("RANDOM")

    const embed8 = new Discord.MessageEmbed()

      .setTitle("amor")
      .setDescription(`${message.author.username}y ${user.username} se quieren un 81%`)
      .setColor("RANDOM")

    const embed9 = new Discord.MessageEmbed()

      .setTitle("amor")
      .setDescription(`${message.author.username}y ${user.username} se quieren un 93%`)
      .setColor("RANDOM")

    const embed10 = new Discord.MessageEmbed()

      .setTitle("amor")
      .setDescription(`${message.author.username}y ${user.username} se quieren un 100%`)
      .setColor("RANDOM")


    const embeds = [embed, embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10]

    let embedfinal = embeds[Math.floor(Math.random() * embeds.length)]


    message.channel.send(embedfinal)

  }

}

