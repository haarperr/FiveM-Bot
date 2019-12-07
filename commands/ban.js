module.exports = class ban {
        constructor() {
            this.name = 'ban',
                this.alias = ['ban'],
                this.usage = '?ban', '??ban', 'doc?ban'
        }

        async run(client, message, args) {
            const Discord = require('discord.js')
            await message.delete();
            const config = require('./config/config.json')
            var color = config.color;
            var logo = config.logo;
            var logginchannel = config.logchan;
            var shortname = config.shortname
            const toban = message.mentions.users.first()
            const member = message.guild.member(toban)
            const banner = message.author.id
            var reason = args.slice(2).join(' ');
            const loggingchannelban = message.guild.channels.find(channel => channel.name === `${logginchannel}`);
            
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Error, you do not have permission!");

            if (!toban) return message.reply(`You must mention a user to ban!`)
           
            if (!member.bannable) return message.reply(`There was an error, possibly role or permissions error!`)

            if (!reason) reason = `No reason provided | Banned by <@${banner}>`

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${shortname} Bans`)
            .setDescription(`Reason: ${reason}`)
            .setColor(`#FF0000`)
            .setImage(`https://media1.tenor.com/images/b7cded2e6c866a147425f525eeb1e56e/tenor.gif`)
            .addField(`User Banned`, `${toban}`, true)
            .addField(`Banned By`, `<@${banner}>`, true)
            .setTimestamp()
            loggingchannelban.send(embed)
            await member.ban(`${reason}`)
            console.log(`${toban} was banned from the server!`)
            message.reply(`${toban} was succesfully banned from ${shortname} for ${reason}`)
        }
    }
