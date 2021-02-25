module.exports = client => {
    const channelId = '812738084851679272'

    client.on('guildMemberAdd', (member) => {
        console.log(member)

        const message = `Selamat Datang <@${member.id}> Di Rezzy Server`

        const channel = member.client.channels.cache.get(channelId)
        channel.send(message)
    })
}