module.exports = (client, message, queue) => {
    const id = message.guild.me.voice.channel.id;
    const channel = client.channels.cache.get(id.toString());
    const delayTimeMs = 1 * 60000;
    setTimeout(function () {
        channel.join().then(connection => {
            // Yay, it worked!
            console.log("Successfully connected.");
        }).catch(e => {
            // Oh no, it errored! Let's log it to console :)
            console.error(e);
        });
    }, delayTimeMs);
    console.log(message.guild.me.voice.channel.id);
    message.channel.send(`${client.emotes.error} - Music stopped as there is no more music in the queue !`);
};