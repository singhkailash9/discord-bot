const {MessageEmbed} = require('discord.js');

const botHelp = new MessageEmbed()
    .setTitle('Bot Help')
    .setDescription('[Click here for list of commands!](https://singhkailash9.github.io/discord-bot/Bot%20Help%20Website/)')
    .setColor('#d32256')
    .setImage('https://cdn.discordapp.com/avatars/758960989596418088/3466a43d11271c5266f98eeb189ccc9b.png?size=128')
    .setFooter({
        text: "Discord Bot by BanKai",
        iconURL: "https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
    })

module.exports = botHelp;