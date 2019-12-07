module.exports = class commend {
        constructor() {
            this.name = 'commend',
                this.alias = ['commend'],
                this.usage = '?commend', '??commend', 'doc?commend'
        }

        async run(client, message, args) {
            const Discord = require('discord.js')
            const config = require('./config/config.json')
            var color = config.color;
            var logo = config.logo
            await message.delete();
            var user = message.mentions.users.first().id
            var reason = args.slice(2).join(' ');
            const db = require('quick.db');

            if (user === undefined) return message.reply(`You must mention a user to commend them!`)

            if (!reason) reason = `No reason provided | Commended by ${message.author.user.tag}`

            if (user) {
                let Embed = new Discord.MessageEmbed()
                .setAuthor(`You commeneded a user!`)
                .setColor(`${color}`)
                .setThumbnail(`${logo}`)
                .setDescription(`Reason for commened: ${reason}`)
                .addField(`User Commended`, `<@${user}>`)
                .addField(`Commended by`, `<@${message.author.id}>`)
                .setFooter(`View your commendes by doing ?profile`)
                db.push(`ICE.commened.${user}`,`${reason} | By ${message.author.tag}`)
                message.channel.send(Embed)
            }
        }
    };