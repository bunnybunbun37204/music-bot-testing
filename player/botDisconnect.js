const delayInMilliseconds = 15*60000;

module.exports = (client, message, queue) => {
    setTimeout(function () {
        //add your code here to execute
        message.channel.send(`${client.emotes.error} - Music stopped as i have been disconnected from the channel !`);
    }, delayInMilliseconds);
};
