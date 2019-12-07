module.exports = class rules {
        constructor() {
            this.name = 'rules',
                this.alias = ['rules'],
                this.usage = '?rules', '??rules', 'doc?rules'
        }

        async run(bot, message, args) {
                const Discord = require('discord.js')
                const config = require("./config/config.json")
                await message.delete();
                const embed = new Discord.MessageEmbed()
                .setTitle(`${config.shortname} Rules (Click Me)`)
                .setURL(`${config.ruleslink}`)
                .setThumbnail(`${config.logo}`)
                .setColor(`${config.color}`)
                .setDescription(`Above you can review all our rules, please keep in mind not knowing a rule is not an excuse for breaking it.`)
                .setFooter(`Simply click the title`)
                message.channel.send(embed)
        }
    }