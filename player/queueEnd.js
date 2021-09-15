const delayTimesMillisec = 1*60000;

module.exports = (client, message, queue) => {
    if (!client.player.getQueue(message)) {
        setTimeout(function () {
            client.player.pause(message);
        }, delayTimesMillisec);
        message.channel.send(`${client.emotes.error} - Music stopped as there is no more music in the queue !`);
    }
};