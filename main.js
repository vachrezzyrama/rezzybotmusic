const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');

const memberCounter = require('./counters/member-counters');
const welcome = require('./commands/welcome')
const goodbye = require('./commands/goodbye')
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}



client.once('ready', () => {
    console.log('Rezzy Bot Is Onilne');
    memberCounter(client);
    
    welcome(client);
    goodbye(client);

    
    
    client.user.setActivity("Rezzy Server🔧", {
        type: "WATCHING"
    })
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '🎧friend');

    guildMember.roles.add(welcomeRole);

});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    }
    if(command === 'command'){
        client.commands.get('command').execute(message, args, Discord);
    }
    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }
    if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }
    if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }
    if(command === 'userinfo'){
        client.commands.get('userinfo').execute(message, args, Discord);
    }
    if(command === 'avatar'){
        client.commands.get('avatar').execute(message, args, Discord);
    }
});

client.login('ODEyMjIyNjAzNTMyMDQyMjQx.YC9nPw.dZTNLBneSbFm7xSUc31h2IcQj04');