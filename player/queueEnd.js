module.exports = (client, message, queue) => {
    console.log(queue);
    message.channel.send(`${client.emotes.error} - Music stopped as there is no more music in the queue !`);
};