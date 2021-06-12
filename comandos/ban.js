const Discord = require('discord.js');
const Client = new Discord.Client();

const { messageembed } = require('discord.js')


module.exports = {
  name: "ban", //Aquí ponemos el nombre del comando
  alias: ["banear"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

  execute(client, message, args) {

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tengo suficientes permisos!");

    let user = message.mentions.members.first();


    let banReason = args.join('').slice(1);

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tienes permisos para usar este comando!")

    if (!user) return message.channel.send("Debes mencionar a alguien!")

    if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("No puedes banear a una persona igual a ti o con un poder mayor!")

    if (user === message.author) return message.channel.send("No te puedes autobanear!")

    if (!banReason) return message.channel.send("Debes escribir una razon")

    user.ban({ reason: banReason })

    message.channel.send(`El usuario **${user}** fue baneado por **${banReason} correctamente!`)

  }
}