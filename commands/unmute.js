module.exports = {
    name: 'unmute',
    description: "This unmute Member",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === '🎧friend');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> Has ben unmuted`);
        } else {
            message.channel.send('Cant Find that member!');
        }
    }
}