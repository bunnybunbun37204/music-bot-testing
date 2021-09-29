module.exports = (client, message, queue) => {
    const QUEUE = client.player.getQueue(message);
    console.log(QUEUE.tracks.length);
    message.channel.send(`${client.emotes.error} - Music stopped as there is no more music in the queue !`);
};