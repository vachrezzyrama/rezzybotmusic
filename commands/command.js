module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, Discord) {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('-Help')
        .setURL('https://www.youtube.com/channel/UCblP-_3EmYNent5cjLH_KaQ')
        .setAuthor('Bot Rezzy🔧- command list', 'https://media.discordapp.net/attachments/812475882735534141/812522293540028466/rz.png', 'https://media.discordapp.net/attachments/812475882735534141/812522293540028466/rz.png')
        .setDescription('Help command Music Bot❓')
        .setThumbnail('https://media.discordapp.net/attachments/812475882735534141/812522293540028466/rz.png')
        .addFields(
            { name: '-userinfo', value: 'userinfo🧑‍🤝‍🧑' },
            { name: '\u200B', value: '\u200B' },
            { name: '-p (judul music)', value: 'Music🎶', inline: true },
            { name: '-youtube', value: 'Youtube Channel🔴', inline: true },
        )
        .addField('-ping', 'Test Ping❗️', true)
        .setImage('https://media.discordapp.net/attachments/812475882735534141/812522293540028466/rz.png')
        .setTimestamp()
        .setFooter('Use Command For Help❓', 'https://media.discordapp.net/attachments/812475882735534141/812522293540028466/rz.png');

        message.channel.send(exampleEmbed);
    }
}