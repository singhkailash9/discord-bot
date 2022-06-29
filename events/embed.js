
const {MessageEmbed} = require('discord.js');

const embed = new MessageEmbed()
.setTitle('Title')
.setDescription('Description')
.setImage('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg')
.setColor('#d32256')
.setTimestamp()
.setFooter({
  text: 'Footer'
});

module.exports = embed;