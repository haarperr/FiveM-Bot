module.exports = class gender {
    constructor() {
        this.name = 'gender',
            this.alias = ['gender'],
            this.usage = '?gender', '??gender', 'doc?gender'
    }

    async run(client, message, args) {
        const Discord = require('discord.js')
        const config = require('./config/config.json')
        var color = config.color
        var logo = config.logo
        var shortname = config.shortname
        await message.delete();
        const db = require('quick.db')
        const identity = message.author.id
        var gender = args[1]

        if (!gender) return message.reply('Please supply a hex | **EX: ?gender Male**')


        const embed = new Discord.MessageEmbed()
            .setAuthor(`${shortname} Profile System`)
            .setColor(`${color}`)
            .setThumbnail(`${logo}`)
            .addField('Your gender was set to', `${gender}`, true)
        message.channel.send(embed)
        db.set(`ICE.gender.${identity}`, `${gender}`)
    }
}