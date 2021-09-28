module.exports = {
    name: 'strawberry',
    aliases: ['strb'],
    category: 'Music',
    utilisation: '{prefix}strawberry',

    execute(client, message, args) {
        //PASSWORD
        const PASSWORD = "123456789";

        const SONGs = "https://youtube.com/playlist?list=PLHe2Mc9eTQTKkJlVZCV_j60yCvv--NW4G";

        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);
        
        if (!args[0]) return message.channel.send(`${client.emotes.error} - Please type a password !`);
        
        if(args[0] === PASSWORD) {
            message.channel.send(`***ฮั่นแหนะ ทำอะไรกันอะ***`);
            client.player.play(message, SONGs, { firstResult: true });
        }
        else {
            message.channel.send(`${client.emotes.error} - WRONG PASSWORD !`);
        }
        
    },
};