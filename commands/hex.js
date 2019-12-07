module.exports = class hex {
        constructor() {
            this.name = 'hex',
                this.alias = ['hex'],
                this.usage = '?hex', '??hex', 'doc?hex'
        }

        async run(client, message, args) {
            const Discord = require('discord.js')
            const config = require("./config/config.json")
            await message.delete();
            const db = require('quick.db')
            const identity = message.author.id
            var shex = args[1]

            if (!shex) return message.reply('Please supply a hex | **EX: ?hex 12345678**')

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${config.shortname} Profile System`)
            .setColor(`#0071C1`)
            .setThumbnail(`${config.logo}`)
            .addField('Your hex was set to', `${shex}`, true)
            message.channel.send(embed)
            db.set(`ICE.hex.${identity}`, `${shex}`)
        }
    }
               