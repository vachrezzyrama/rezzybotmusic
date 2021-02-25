module.exports = client => {
    const channelId = '812723636053344266'

    const updateMembers = guild => {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`ALL Members: ${guild.memberCount.toLocaleString()}`)
    }
    client.on('guildMemberAdd', member => updateMembers(member.guild))
    client.on('guildMemberRemove', member => updateMembers(member.guild))

    const guild = client.guilds.cache.get('566657987322839040')
    updateMembers(guild)
}