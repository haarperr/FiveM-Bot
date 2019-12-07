module.exports = class binfo {
        constructor() {
            this.name = 'binfo',
                this.alias = ['binfo'],
                this.usage = '?binfo', '??binfo', 'doc?binfo'
        }

        async run(client, message, args) {
            const config = require('./config/config.json')
            var shortname = config.shortname
            var color = config.color
            var logo = config.logo
            const fs = require('fs')
            const Discord = require('discord.js')
            await message.delete();
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${shortname} Info`)
            .setColor(`${color}`)
            .setThumbnail(`${logo}`)
            .setDescription(`In this message you can view info about our bot`)
            .addField(`Basic Info`, `${client.user.id} ID | ${client.user.tag} Tag | Running ${client.users.size} Users in ${client.channels.size} Channels`)
            .addField(`Development Info`, `${client.ping} Ping | ${process.version} Node Version | ${config.version} Bot Version`)
            .addField(`Extra`, `Made By IceyyM8`)
            .setFooter(`Made for ${shortname}`)
            message.channel.send(embed)
        }
    }