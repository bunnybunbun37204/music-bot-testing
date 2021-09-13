module.exports = {
    name: 'strawberry',
    aliases: ['strb'],
    category: 'Music',
    utilisation: '{prefix}strawberry',

    execute(client, message) {
        message.channel.send(`***ฮั่นแหนะ ทำอะไรกันอะ***`);
        
        const SONGs = [
            
            "https://www.youtube.com/watch?v=-s5xqtekWnw",
            "https://www.youtube.com/watch?v=Zp6H7y7LVqo",
            "https://www.youtube.com/watch?v=4TR5Rr9qeS0",
            "https://www.youtube.com/watch?v=WJw9waViCno",
            "https://www.youtube.com/watch?v=OvdX1Yod-0A",
            "https://www.youtube.com/watch?v=mPA9AJv8h6c",
            "https://www.youtube.com/watch?v=LjEy-eLT1mQ",
            "https://www.youtube.com/watch?v=ij7TFCsTgc8",
            "https://www.youtube.com/watch?v=UXKrEk0s5cw",
            "https://www.youtube.com/watch?v=uglul_qbY8A",
            "https://www.youtube.com/watch?v=VYIdx0J7SPA",
            "https://www.youtube.com/watch?v=zhAUxNxJDiU",
            "https://www.youtube.com/watch?v=AZUY7wy-1R4",
            "https://www.youtube.com/watch?v=LP3YzitZhmE",
            "https://www.youtube.com/watch?v=bbAMhMAz4Yk",
            "https://www.youtube.com/watch?v=AdclHnNatcA",
            "https://www.youtube.com/watch?v=GhC4uWC1iAM",
            "https://www.youtube.com/watch?v=gv4ZGKSGLtU",
            "https://www.youtube.com/watch?v=77tBqhHihAU",
            "https://www.youtube.com/watch?v=3RFsMs3ldPo"
        ];

        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        for(let i = 0; i < SONGs.length; i++) {
            client.player.play(message, SONGs[i], { firstResult: true });
        }
    },
};