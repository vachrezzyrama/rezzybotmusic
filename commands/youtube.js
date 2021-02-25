module.exports = {
    name: 'youtube',
    description: "sends the youtube link!",
    execute(message, args){
        
        if(message.member.roles.cache.has('758977885661822998')){
            message.channel.send('https://www.youtube.com/channel/UCblP-_3EmYNent5cjLH_KaQ')
        
        
        
        } else {
            message.channel.send('kepo ya Kamu');
            message.member.roles.add('758977885661822998')
        }


    }
}