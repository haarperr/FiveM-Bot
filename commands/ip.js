module.exports = class ip {
        constructor() {
            this.name = 'ip',
                this.alias = ['ip'],
                this.usage = '?ip', '??ip', 'doc?ip'
        }

        async run(bot, message, args) {
                const Discord = require('discord.js')
                const config = require("./config/config.json")
                var color = config.color
                var ip = config.ip 
                var logo = config.logo
                var shortname = config.shortname
                await message.delete();
                const embed = new Discord.MessageEmbed()
                .setColor(`${color}`)
                .setThumbnail(`${logo}`)
                .setAuthor(`${shortname} Bot`)
                .addField("Join us here:", `${ip}`)
                .setFooter("Don't know how to join? Simply open FiveM go to direct connect and paste our IP!")
                message.channel.send(embed)
        }
    }