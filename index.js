const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, ] });
require("dotenv").config();

client.on('ready', () => {
    console.log('Bot is Ready');
});

client.on('messageCreate', async message => {
	if (message.channel.id === process.env.CHANNEL_ID) {
	  if (message.author.bot || isNaN(message.content)) return;
	  let next_count = parseInt(message.content);
      message.channel.send((next_count + 1).toString());
	}
});

client.login(process.env.DISCORD_TOKEN);
