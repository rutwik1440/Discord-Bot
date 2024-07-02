import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message) => {
    // console.log(message.content);
    if (message.author.bot) return;

    if (message.content.startsWith("create")) {
        const url = message.content.split("create")[1];
        return message.reply({
            content: "Generating shortID for URL" + url,
        });
    }

    message.reply({
        content: "Hello, I am a bot! built by @Rutwik",
    });
});

client.on("interactionCreate", (interaction) => {
    // console.log(interaction);
    interaction.reply("Pong");
})

client.login(Token);