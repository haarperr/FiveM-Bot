module.exports = class report {
        constructor() {
            this.name = 'report',
                this.alias = ['report'],
                this.usage = '?report', '??report', 'doc?report'
        }

        async run(bot, message, args) {
            const mention = message.mentions.users.first()
            const reason = args.slice(2).join(' ');
            const config = require("./config/config.json")
            var reporter = message.author.id
            await message.delete();
            const Discord = require('discord.js')
            const db = require('quick.db')
            var channel = message.channel.name
            var reportc = message.guild.channels.find(channel => channel.name === `${config.reportchan}`);

            if (!mention) return message.reply(`Incorrect usage | EX: **?report @IceyyM8 This is an example**`)

            if (!reason) return message.reply(`Incorrect usage | EX: **?report @IceyyM8 This is an example**`)

            if (!reportc) return message.reply(`The report channel was not found, **please contact staff!**`)

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${config.shortname} Reports!`)
            .addField(`User Reported:`, `${mention}`, true)
            .setDescription(`Reason: ${reason}`)
            .addField(`Reported By`, `<@${reporter}>`, true)
            .addField(`Reported In:`, `#${channel}`, true)
            .setColor(`${config.color}`)
            .setThumbnail(`${config.logo}`)
            .setFooter(`The following is the the time of the report`)
            .setTimestamp()
            reportc.send(embed)
            console.log(`Report message sent to ${reportc}`)
            message.reply(`The report message was sent to staff, deleting these messages in 3 seconds.`)
            setTimeout(function(){
             message.channel.bulkDelete(`1`)
            } , 5000);
        }
    }