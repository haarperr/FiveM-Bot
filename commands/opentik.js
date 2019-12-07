module.exports = class open {
        constructor() {
            this.name = 'open',
                this.alias = ['open'],
                this.usage = '?open', '??open', 'doc?open'
        }

        async run(client, message, args) {
            const Discord = require('discord.js')
            await message.delete();
            var ticket = args.slice(1).join(' ');
            const config = require("./config/config.json")
            var ticketchan = config.ticketchan
            var logo = config.logo
            const user = message.author.id
            const ticketchannel = message.guild.channels.find(channel => channel.name === `${ticketchan}`);
            
            if (!ticket) return message.reply(`Invalid command usage | **EX: ??open ticket text here, up to 1500 char**`)

            if (!ticketchannel) return message.reply(`No ticket channel found, **please contact staff**`)

            const embed1 = new Discord.MessageEmbed()
            .setAuthor(`Your Ticket was sent, view a preview below`)
            .setColor(`#7CFC00`)
            .setThumbnail(`${logo}`)
            .addField(`Ticket Text`, `${ticket}`)
            .setTimestamp()
            .setFooter(`We will review and reply to your ticket within 24 hours`)
            message.channel.send(embed1)

            const embed2 = new Discord.MessageEmbed()
            .setAuthor(`A Ticket Recieved!`)
            .setColor(`#7CFC00`)
            .setThumbnail(`${logo}`)
            .setDescription(`Ticket Text: ${ticket}`)
            .addField(`Opened By:`, `<@${user}>`)
            ticketchannel.send(embed2)
            console.log(`Ticket sent!`)
        }
    }