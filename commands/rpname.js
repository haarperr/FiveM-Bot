module.exports = class rpname {
    constructor() {
        this.name = 'rpname',
            this.alias = ['rpname'],
            this.usage = '?rpname', '??rpname', 'doc?rpname'
    }

    async run(client, message, args) {
        const Discord = require('discord.js')
        const config = require("./config/config.json")
        await message.delete();
        const db = require('quick.db')
        const identity = message.author.id
        var name = args.slice(1).join(' ');

        if (!name) return message.reply('Please supply a hex | **EX: ?rpname Jordan Ice**')

        const embed = new Discord.MessageEmbed()
            .setAuthor(`${config.shortname} Profile System`)
            .setColor(`${config.color}`)
            .setThumbnail(`${config.logo}`)
            .addField('Your rp name was set to', `${name}`, true)
        message.channel.send(embed)
        db.set(`ICE.name.${identity}`, `${name}`)
    }
}