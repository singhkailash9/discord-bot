// const fetch = require('node-fetch');
// const {MessageEmbed} = require('discord.js');

// function getGif(){
// try {
//     const response = await fetch(
//       `https://g.tenor.com/v2/search?q=${arg[0]}&key=${TENOR_API}`
//     );
//     const data = await response.json();
//     // console.log(data);
//     const randomNum = Math.floor(Math.random() * 16);
//     const orgif = data.results[randomNum].media_formats.gif.url
//       const gif = new MessageEmbed()
//         .setColor("#00f2ff")
//         .setImage(orgif)
//         .setTimestamp();
//         message.channel.send({ embeds: [gif] });
//         // return { embeds: [gif] };
//   } catch (error) {
//     message.channel.send("Sorry no gif for you !!");
//     console.log(error)
//   }
// }

// module.exports = {getGif}