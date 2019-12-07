module.exports = class profile {
        constructor() {
            this.name = 'profile',
                this.alias = ['profile'],
                this.usage = '?profile', '??profile', 'doc?profile'
        }

        async run(bot, message, args) {
            const Discord = require('discord.js')
            const config = require("./config/config.json")
            await message.delete();
            const identity = message.mentions.users.first().id
            const db = require('quick.db')
            var name = db.get(`ICE.name.${identity}`)
            var hex = db.get(`ICE.hex.${identity}`)
            var age = db.get(`ICE.age.${identity}`)
            var gender = db.get(`ICE.gender.${identity}`)
            var discordn = message.mentions.users.first().username
            var commened = db.get(`ICE.commened.${identity}`)

            if (!message.mentions.users) return message.reply("Please mention a user")

            if (name == undefined) name = "Roleplay Name not Set!"

            if (hex == undefined) hex = "Hex not set"

            if (age == undefined) age = "Age not set"

            if (gender == undefined) gender = "No Gender Specified"

            if (commened == undefined) commened = "This user hasnt been commended, be the first to do so!"

            const embed = new Discord.MessageEmbed()
            .setAuthor(`${discordn}'s profile`)
            .setDescription('Dont know how to update your profile? Use ?help')
            .setColor(`${config.color}`)
            .setThumbnail(`${config.logo}`)
            .addField(`Roleplay Name`, `${name}`, true)
            .addField(`Steam Hex`, `${hex}`, true)
            .addField(`Age`, `${age}`, true)
            .addField(`Gender`, `${gender}`, true)
            .addField(`Commeneds`, `${commened}`)
            .setFooter(`Profile for ${discordn} requested by ${message.author.username}`)
            message.channel.send(embed)
        }
    }