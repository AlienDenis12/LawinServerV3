const { Client, Intents } = require("discord.js");
const { config } = require("dotenv");
config(); // Load environment variables from .env file

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fs = require("fs");

const log = require("../structs/log.js");

client.once("ready", () => {
    log.bot("Discord Bot is online!");

    let commands = client.application.commands;

    fs.readdirSync("./DiscordBot/commands").forEach(fileName => {
        const command = require(`./commands/${fileName}`);

        commands.create(command.commandInfo);
    });
});

client.on("interactionCreate", interaction => {
    if (!interaction.isApplicationCommand()) return;

    if (fs.existsSync(`./DiscordBot/commands/${interaction.commandName}.js`)) {
        require(`./commands/${interaction.commandName}.js`).execute(interaction);
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);
