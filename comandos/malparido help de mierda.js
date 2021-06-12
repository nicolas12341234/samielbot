const Discord = require('discord.js');
const Client = new Discord.Client();

const { MessageEmbed } = require('discord.js');

let cooldown = new Set()
module.exports = {
	name: "help", //Aquí ponemos el nombre del comando
	alias: ["ayuda"], //Aquí un alias

	execute(client, message, args) {

		if(cooldown.has(message.author.id)){
			message.channel.send(`${message.author}, Debes esperar 10s antes de vover a usar el comando`)
		  
			return;
		  }
		  
		  cooldown.add(message.author.id);
		  
		  
		  setTimeout(() => {
			cooldown.delete(message.author.id);
		  
		  }, 10000);

		const embedprincipal = new Discord.MessageEmbed()

			.setTitle("Bienvenido al apartado de ayuda!")
			.setDescription('**s/amor**\nTe dira cuanto se quieren una persona y otra\n\n**s/hola**\nEl bot te saludara\n\n**s/info(@user)**\nTe dara la informacion de un usuario\n\n**s/say(palabra)**\nEl bot dira la palabras que tu quiras\n\n**s/infos**\nTe dara la informacion del servidor\n\n**s/plsass**\n Te mandara una foto +18\n\n**s/reportuser (usuario)  (razon)**\nSe reportara el miembro que creas que meresca ban/kick\n\n**s/sugernecia**\ntodavia en desarrolo xd\n\n**Bienvenido al apartado de moderacion**\nSolo los moderadores podran utilizar los comandos\n\n**s/kick(@user)(@razon)**\nExpulsara al usuario que tu digas\n\n**s/ban(@user)(razon)**\nBaneara el usuario que tu digas')
			.setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
			.setColor("ORANGE")
			
			const embedmoderacion = new Discord.MessageEmbed()

			.setTitle("Apartado de moderacion!")
			.setDescription("**s/amor**\nTe dira cuanto se quieren una persona y otra\n\n**s/hola**\nEl bot te saludara\n\n**s/info(@user)**\nTe dara la informacion de un usuario\n\n**s/say(palabra)**\nEl bot dira la palabras que tu quiras\n\n**s/infos**\nTe dara la informacion del servidor")
			.setColor("RED")

			const embedcomandos = new Discord.MessageEmbed()

			.setTitle("Apartado de comandos para todos!")
			.setDescription("**s/kick(@user)(@razon)**\nExpulsara al usuario que tu digas\n\n**s/ban(@user)(razon)**\nBaneara el usuario que tu digas")
		    .setColor("Green")


			message.channel.send(embedprincipal).then(msg => {


				msg.react('✅')
				msg.react('☑️')
				msg.react('⭐')

				msg.awaitReactions((reaction, user) => {
					if(message.author.id !== user.id) return;
					if(reaction.emoji.name === '✅'){
						msg.edit(embedcomandos)
					}
					if(reaction.emoji.name === '☑️'){
						msg.edit(embedmoderacion)
					}
					if(reaction.emoji.name === '⭐☑️'){
						msg.edit(embedprincipal)
					}
				})
			})
	}

}
