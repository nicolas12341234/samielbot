const Discord = require('discord.js');
const Client = new Discord.Client();

const { messageembed } = require('discord.js')


let cooldown = new Set()
module.exports = {
    name: "plsass", //Aquí ponemos el nombre del comando
    alias: [""], //Aquí un alias
    execute(client, message, args) {

        if(cooldown.has(message.author.id)){
            message.channel.send(`${message.author}, Deja de ser tan pajero y espera 10s`)
          
            return;
          }
          
          cooldown.add(message.author.id);
          
          
          setTimeout(() => {
            cooldown.delete(message.author.id);
          
          }, 10000);


        let user = message.mentions.users.first()

        const nonsfw = new Discord.MessageEmbed()
            .setDescription(":x: | Este canal no admite contenido **NSFW**")
            .setColor('RED')
        if (!message.channel.nsfw) {
            return message.channel.send(nonsfw)
        }
        const embed = new Discord.MessageEmbed()

        .setTitle("plsass")
            .setImage('https://cdn.discordapp.com/attachments/835289414221168682/852633358123008020/unknown.png')
            .setColor("RANDOM")
            .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
        const embed1 = new Discord.MessageEmbed()
        .setTitle("plsass")
            .setImage('https://cdn.discordapp.com/attachments/835289414221168682/852634055580319814/unknown.png')
            .setColor("RANDOM")
            .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
        const embed2 = new Discord.MessageEmbed()
        .setTitle("plsass")
            .setImage('https://cdn.discordapp.com/attachments/835289414221168682/852634055580319814/unknown.png')
            .setColor("RANDOM")
            .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
        const embed3 = new Discord.MessageEmbed()
        .setTitle("plsass")
            .setImage('https://cdn.discordapp.com/attachments/831149992613773316/852634504388411432/unknown.png')
            .setColor("RANDOM")
            .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
        //////////////////aca///////////
        const embed4 = new Discord.MessageEmbed()
        .setTitle("plsass")
            .setImage('https://cdn.discordapp.com/attachments/831149992613773316/852634841794871316/unknown.png')
            .setColor("RANDOM")
            .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
        const embed5 = new Discord.MessageEmbed()
        .setTitle("plsass")
            .setImage('https://cdn.discordapp.com/attachments/831149992613773316/852635339746050088/unknown.png')
            .setColor("RANDOM")
            .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
        const embed6 = new Discord.MessageEmbed()
        .setTitle("plsass")
        
            .setImage('https://cdn.boob.bot/ass/4ECF.JPG')
            .setColor("RANDOM")
            .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
        const embed7 = new Discord.MessageEmbed()
        .setTitle("plsass")
            .setImage('https://cdn.boob.bot/ass/4E39.JPG')
            .setColor("RANDOM")
            .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
        const embed8 = new Discord.MessageEmbed()
        .setTitle("plsass")
            .setImage('https://cdn.boob.bot/ass/4D58.JPG')
            .setColor("RANDOM")
            .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
            .setTitle("plsass")
        const embed9 = new Discord.MessageEmbed()
        .setTitle("plsass")
            .setImage('https://cdn.boob.bot/ass/4C86.JPG')
            .setColor("RANDOM")
            .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
        const embed10 = new Discord.MessageEmbed()

        .setTitle("plsass")
    
            .setThumbnail('https://cdn.boob.bot/Gifs/1883.gif')
            .setColor("RANDOM")
            .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
        const embeds = [embed, embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10]


        let embedfinal = embeds[Math.floor(Math.random() * embeds.length)]


        message.channel.send(embedfinal)
    }
    

}
