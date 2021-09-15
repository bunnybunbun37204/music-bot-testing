const delayInMilliseconds = 15*60000;

module.exports = (client, message, queue) => {
    setTimeout(function () {
        //add your code here to execute
        message.channel.send(`${client.emotes.error} - Music stopped as there is no more music in the queue !`);
    }, delayInMilliseconds);
};