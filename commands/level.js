 module.exports = class level {
         constructor() {
             this.name = 'level',
                 this.alias = ['level'],
                 this.usage = '?level', '??level', 'doc?level'
         }

         async run(client, message, args) {
             const leveling = require('discord-leveling')
             const Discord = require('discord.js')
             const config = require("./config/config.json")
             var shortname = config.shortname
             var color = config.color
             var logo = config.logo
 var user = message.mentions.users.first() || message.author
  await message.delete();
 var output = await leveling.Fetch(user.id)
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${shortname} Levels`)
 .setColor(`${color}`)
 .setThumbnail(`${logo}`)
 .setDescription(`${user.username}'s profile`)
 .addField(`User tag`, `${user.tag}`, true)
 .addField(`Current Level`, `${output.level}`, true)
 .addField(`Next Level`, `${output.level + 1}`)
 message.channel.send(embed)
         }
        }