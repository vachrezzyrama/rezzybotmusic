module.exports = {
    name: 'clear',
    description: "Clear Messages",
    async execute(message, args) {
        if(!args[0]) return message.reply("Please Enter The Amount Of The Messages!");
        if(isNaN(args[0])) return message.reply("please Enter a real Number!");

        if(args[0] > 100) return message.reply("you cannot delete more than 100 messages!");
        if(args[0] < 1) return message.reply("you must delete at least one messages!");

        await message.channel.messages.fetch({Limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);

        });
    }

}
