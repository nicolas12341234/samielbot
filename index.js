const Discord = require('discord.js'); //Definimos discord
const client = new Discord.Client();
const { Client, MessageEmbed, Collection, Guild } = require('discord.js'); //Definimos guild, MessageEmbed y otras cosas importantes
require('dotenv').config();
const keepAlive = require('./server.js'); //Definimos keepAlive que nos servirá para tener el bot 24/7
const config = require('./config.json')

const fs = require('fs')


//////////handler//////////
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
}





client.on('message', (message) => { //Abrimos un evento message, esto es muy importante porque es donde estarán los comandos

    let prefix = 's/' //Definimos un prefix para usar

    if (message.author.bot) return; //Con esto hacemos que el bot no responda a mensajes de otros bots lo cual evitará que entre en bucles
    if (!message.content.startsWith(prefix)) return; //Aquí hacemos que si el mensaje no empieza con el prefix el bot no responda

    let usuario = message.mentions.members.first() || message.member; //Definimos el usuario
    const args = message.content.slice(prefix.length).trim().split(/ +/g); //Definimos los argumentos
    const command = args.shift().toLowerCase(); //Definimos el comando

    //Aquí irían los comandos que pondremos más adelante

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (command === "hola") {


    }///ciomando///
    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if (cmd) {
        cmd.execute(client, message, args)

    }

    /////////emebs////////////////
    if (command === 'infos') {
        const embed = new Discord.MessageEmbed()
            .setTitle('Información del servidor')
            .setColor(0x5E9DE4)
            .setDescription('Información actual del servidor')
            .addField('Nombre del servidor', message.guild.name, true)
            .addField('Integrantes', message.guild.memberCount, true)
            .setAuthor(client.user.username, client.user.avatarURL())
            .setThumbnail('https://media.giphy.com/media/dahnt6nqwan1S/giphy.gif')
            .setImage('https://cdn.todamateria.com/imagenes/informacion-og.jpg')
            .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
            .setTimestamp()
            .setURL('https://www.youtube.com/channel/UCa6KCEgU2DaXM0U5QCNcTeA');
        //NOMBRE DEL BOT: client.user.username
        //AVALAR DE BOT: client.user.avatarURL()
        //NOMBRE DE USUARIO: message.member.displayName
        //AVATAR DE USUARIO: message.author.avatarURL()
        message.channel.send(embed);


    }
})
//Cerramos el evento


/////////////////////PRESENCIA//////////////
const estados = ['s/help']


client.on('ready', () => {

    setInterval(() => {
        function presence() {
            client.user.setPresence({
                status: 'dnd',
                activity: {
                    name: estados[Math.floor(Math.random() * estados.length)],

                    type: "PLAYING"

                }
            })
        }
        presence()
    }, 999999999);


    console.log('samibot esta listo')

});

//////////////////////////final presencia/////////////





client.login(config.TOKEN)