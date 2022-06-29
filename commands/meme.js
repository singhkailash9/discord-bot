const fetch = require('node-fetch');
const {MessageEmbed} = require('discord.js');
function getMeme() {
	return fetch("https://meme-api.herokuapp.com/gimme")
	  .then(res => {
		return res.json()
	  })
	  .then(async data => {
        const memeEmbed = new MessageEmbed()
            .setTitle(data.title)
            .setDescription(data.postLink)
            .setImage(data.url)
            .setColor('#d32256')
            .setTimestamp()
            .setFooter({
                text: `${data.author} ${data.subreddit}`
            });
            return memeEmbed;
	  })
  }

  module.exports = {getMeme};