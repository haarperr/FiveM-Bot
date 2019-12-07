module.exports = class bug {
    constructor() {
        this.name = 'bug',
            this.alias = ['bug'],
            this.usage = '?bug', '??bug', 'doc?bug'
    }

    async run(bot, message, args) {
        const reason = args.slice(1).join(' ');
        var reporter = message.author.id
        const config = require('./config/config.json');
        var color = config.color;
        var logo = config.logo
        var shortname = config.shortname;
        var bugchan = config.bugchan;
        await message.delete();
        const Discord = require('discord.js')
        var channel = message.channel.name
        var reportc = message.guild.channels.find(channel => channel.name === `${bugchan}`);


        if (!reason) return message.reply(`Incorrect usage | EX: **?bug This is an example**`)

        if (!reportc) return message.reply(`The bugs channel was not found, **please contact staff!**`)

        const embed = new Discord.MessageEmbed()
            .setAuthor(`${shortname} Bug Report!`)
            .setDescription(`Bug: ${reason}`)
            .addField(`Sent by`, `<@${reporter}>`, true)
            .addField(`Channel sent in`, `#${channel}`, true)
            .setColor(`${color}`)
            .setThumbnail(`${logo}`)
            .setTimestamp()
        reportc.send(embed)
        console.log(`Bug message sent to ${reportc}`)
        message.reply(`The bug was sent to staff, deleting this message in 3 seconds.`)
        setTimeout(function () {
            message.channel.bulkDelete(`1`)
        }, 5000);
    }
}