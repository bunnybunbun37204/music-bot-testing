module.exports = (client, message, queue) => {
    console.log(client.player.getQueue(message));
    message.channel.send(`${client.emotes.error} - Music stopped as there is no more music in the queue !`);
};