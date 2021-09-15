module.exports = (client, message, queue) => {
    const id = message.guild.me.voice.channel.id;
    const channel = client.channels.cache.get(id.toString());
    const delayTimeMs = 15 * 60000;
    setTimeout(function () {
        channel.join().then(connection => {
            // Yay, it worked!
            console.log("Successfully connected.");
        }).catch(e => {
            // Oh no, it errored! Let's log it to console :)
            console.error(e);
        });
    }, 100);
    console.log(message.guild.me.voice.channel.id);
    
    setTimeout(function () {
       const success = client.player.stop(message);
       if(success) message.channel.send(`${client.emotes.error} - Music stopped as there is no more music in the queue !`);
    }, delayTimeMs);

};