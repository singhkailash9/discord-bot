// const fetch = require('node-fetch');
// const {MessageEmbed} = require('discord.js');

  
// function getGif() {
    // const site = "https://g.tenor.com/v1/random?q=loli&key=8MSN5W12C1WF&limit=15"

    // const options = {
    // "results": {
    //     "id": "14046888331786085067",
    //     // "gif": {
    //     //     "duration": 0,
    //     // }
    // }
    // // };
	// return fetch(site)
	//   .then(res => {
	// 	return res.json()
	//   })
	//   .then(async data => {
    //     const gifEmbed = new MessageEmbed()
    //         .setTitle('Get Slapped!!')
    //         .setDescription('Slap GIF')
    //         .setImage(data.url)
    //         .setColor('#d32256')
    //         .setTimestamp()
    //         .setFooter({
    //             text: 'Powered by Tenor'
    //         });
    //         console.log(gifEmbed);
//     try {
//         const response = await fetch(
//           `https://g.tenor.com/v1/random?q=loli&key=8MSN5W12C1WF&limit=15`
//         );
//         const data = await response.json();
//         const randomNum = Math.floor(Math.random() * 16);
//         const orgif = data.results[randomNum].media[0].gif.url
//           const gif = new MessageEmbed()
//             .setColor("#00f2ff")
//             .setImage(orgif)
//             .setTimestamp();
//           msg.channel.send({ embeds: [gif] });
//       } catch (error) {
//         msg.channel.send("Sorry no gif for you !!");
//         console.log(error)
//       }
//             return gifEmbed;
// 	  }
    

//   module.exports = {getGif}