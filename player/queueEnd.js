module.exports = (client, message, queue) => {
    const channel_id = message.guild.me.voice.channel.id;
    join_server(client, channel_id);
    message.channel.send(`${client.emotes.error} - Music stopped as there is no more music in the queue !`);
};

const join_server = (client, channel_id) => {
    client.on('ready', () => {
        const channel = client.channels.get(channel_id);
        channel.join()
        console.log("Bot has join");
      });
}