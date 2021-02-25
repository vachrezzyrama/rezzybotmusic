module.exports = {
    name: 'userinfo',
    description: "Show User information on mentioned user.",
    execute(message, args, Discord) {
        let mentionedMember = message.mentions.members.first();
        let mentionedUser = message.mentions.users.first();

        const exampleEmbed = new Discord.MessageEmbed()
        .setTitle(`User Information for ${mentionedUser.username}`)
        .addField('Username:', `${mentionedUser.username}`)
        .addField('User ID:', `${mentionedUser.id}`)
        .addField('Account created:', `${mentionedUser.createdAt}`)
        .addField('Joined The server at:', `${mentionedMember.joinedAt}`)
        .addField('User status:', `${mentionedUser.presence.status}`)
        .addField("Game:", `${mentionedUser.presence.game ? mentionedUser.presence.game.name : 'Not Playing a Game'}`, true)

        message.channel.send(exampleEmbed);

    }
}