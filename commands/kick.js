module.exports = class kick {
        constructor() {
            this.name = 'kick',
                this.alias = ['kick'],
                this.usage = '?kick', '??kick', 'doc?kick'
        }

        async run(client, message, args) {
            const Discord = require('discord.js')
            const db = require('quick.db')
            const config = require("./config/config.json")
            var logchan = config.logchanname
            var shortname = config.shortname
            await message.delete();
            const kicker = message.author.id
            const user = message.mentions.users.first()
            const member = message.guild.member(user)
            let why = args.slice(2).join(' ');
            const loggingchannelkick = message.guild.channels.find(channel => channel.name === `${logchan}`);

             if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Error, you do not have permission!");

             if (!user) return message.reply(`Please mention a user to kick`)

             if (!why) why = `No reason provided | kicked by <@${kicker}>`;

             await member.kick(why)
             .catch(error => message.reply(`${message.author} attempted to kick ${member} but there was an error: ${error}`));
             const kicked = new Discord.MessageEmbed()
            .setAuthor(`${shortname} Kicks`)
            .setDescription(`Reason: ${why}`)
            .setColor(`#FFA500`)
            .setImage(`https://media1.tenor.com/images/b7cded2e6c866a147425f525eeb1e56e/tenor.gif`)
            .addField(`User Kicked`, `${user}`, true)
            .addField(`Kicked By`, `<@${kicker}>`, true)
            .setTimestamp()
            loggingchannelkick.send(kicked)
            message.channel.send(`${message.author.username} kicked ${user} for ${why}`)
        }
    }