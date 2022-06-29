require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
const prefix = '++';
const {getQuote} = require('./commands/quote')
const {getMeme} = require('./commands/meme')
// const {getGif} = require('./commands/slap')
const fetch = require('node-fetch');
const embed = require('./events/embed')
const {MessageEmbed} = require('discord.js');
// const {getGif} = require('./commands/gif')

client.once('ready', () => {
	console.log(`${client.user.tag} has logged in`);
});

client.on( 'messageCreate', async (message)=>{
	if (message.author.bot) return;
	console.log(`[${message.author.tag}]: ${message.content}`);
	if(message.content === 'hello'){
		message.channel.send('hello');
	}
	if(message.content === 'bankai'){
		message.channel.send('Definitely not lurking');
	}
	if(message.content.startsWith(prefix)){
		const [cmd_name, ...args] = message.content.trim().substring(prefix.length).split(/\s+/);
		
		switch(cmd_name) {
			case 'ban':
				message.channel.send('Cannot ban');
			  break;
			case 'kick':
				message.channel.send('Cannot kick');
			  break;
			case 'help':
				message.channel.send('List of commands are: quote, ban/kick, meme, test');
			  break;
			case 'quote':
				getQuote().then(quote => message.channel.send(quote));
			  break;
			case 'test':
				message.channel.send({embeds: [embed]})
			  break;
			case 'meme':
				getMeme().then(meme => message.channel.send({embeds: [meme]}));
			  break;
			case 'gif':
				// getGif().then(gif => message.channel.send({embeds: [gif]}));
				try {
					let query= args[0];
					const response = await fetch(
					  `https://g.tenor.com/v2/search?q=${query}&key=${process.env.TENOR_API}`
					);
					const data = await response.json();
					// console.log(data);
					const randomNum = Math.floor(Math.random() * 16);
					const orgif = data.results[randomNum].media_formats.gif.url
					  const gif = new MessageEmbed()
						.setColor("#d32256")
						.setImage(orgif)
						.setTimestamp();
						message.channel.send({ embeds: [gif] });
				} catch (error) {
					message.channel.send("Sorry no gif for you !!");
					console.log(error)
				  }
			  break;
			case 'slap':
				// getGif().then(slap => message.channel.send({embeds: [slap]}));
				// getGif();
				try {
					const response = await fetch(
					  `https://g.tenor.com/v2/search?q=slap&key=AIzaSyD93bBnm77LNvu09WLC2XNXaNN7oCYPD2M&limit=16`
					);
					const data = await response.json();
					// console.log(data);
					const randomNum = Math.floor(Math.random() * 16);
					const orgif = data.results[randomNum].media_formats.gif.url
					  const gif = new MessageEmbed()
						.setColor("#00f2ff")
						.setImage(orgif)
						.setTimestamp();
						message.channel.send({ embeds: [gif] });
				  } catch (error) {
					message.channel.send("Sorry no gif for you !!");
					console.log(error)
				  }
				  break;
			default:
				message.channel.send(`Not a valid command. Please try ${prefix}help`);
		  }
	}
},)

client.login(process.env.BOT_TOKEN);
