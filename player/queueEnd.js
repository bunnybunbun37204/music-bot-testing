module.exports = (client, message, queue) => {
        const channel = client.channel.get(message.guild.me.voice.channel.id);
        const delayTimeMs = 1 * 60000;
        channel.join().then(connection => {
            // Yay, it worked!
            console.log("Successfully connected.");
          }).catch(e => {
            // Oh no, it errored! Let's log it to console :)
            console.error(e);
          });
        message.channel.send(`${client.emotes.error} - Music stopped as there is no more music in the queue !`);
};