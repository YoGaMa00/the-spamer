const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("NTc5MDcyOTIwNzU2OTQ0OTEz.XTztmA.d_VAoplAgkHIbN_AQGlZ3dV9Yp0")
setInterval(function() {
channel.send(انا هبقى مليونير);
}, 30)
})

client.login(process.env.BOT_TOKEN);