// const { Permissions } = require('discord.js');
if(cmd_name === 'kick')
	if (args.length === 0)
		return message.reply('Please provide an ID');
	const member = message.guild.members.cache.get(args[0]);
	// const member = message.guild.members.cache.get(args[0]);
	// if (!member.permissions.has(Permissions.FLAGS.KICK_MEMBERS))
	// 	return message.reply('You do not have perms.');
	if (member) {
		member.kick()
		.then((member) => message.channel.send(`${member} was kicked`))
		.catch((err) => message.channel.send('Does not have permissions.'));
	} else {
		message.channel.send('The user does not exists in the server');
	}