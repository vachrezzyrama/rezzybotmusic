module.exports = client => {
    const channelId = '812818471053557781'

    client.on('guildMemberRemove', (member) => {
        console.log(member)

        const message = `Selamat Tinggal <@${member.id}>`

        const channel = member.client.channels.cache.get(channelId)
        channel.send(message)
    })
}