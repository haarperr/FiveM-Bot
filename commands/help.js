module.exports = class help {
    constructor() {
        this.name = 'help',
            this.alias = ['hlp'],
            this.usage = '?help', '??help', 'doc?help'
    }

    async run(bot, message, args) {
        const Discord = require('discord.js')
        const config = require('./config/config.json');
        var color = config.color
        var shortname = config.shortname
        var version = config.version
        var prefixes = config.prefixes
        var logo = config.logo
        var version = config.version
        var footer = `${shortname} Bot was made by IceyyM8 | Verison: ${version}`
        await message.delete();

        if (footer !== 
            `${shortname}
            Bot was made by IceyyM8 | Verison: ${version} `) footer = `
            ${shortname}
            Bot was made by IceyyM8 | Verison: ${version} `
        const embed = new Discord.MessageEmbed()
        .setColor(`${color}`)
        .setAuthor(`${shortname} Bot`)
        .setDescription(`I am the bot made for ${shortname}, you can view all my commands down below! We have 3 prefixes you can use ?,?? or doc?`)
        .setThumbnail(`${logo}`)
        .addField(`Info Commands:`, "`help` `ip` `rules` `binfo`")
        .addField(`Admin Commands`, "`kick` `ban` `purge`")
        .addField(`Server Commands`, "`players` `info` `status`")
        .addField(`User Commands`, "`userinfo` `report @user` `open` `bug` `level` `commend @user`")
        .addField(`Profile Commands`, "`age` `hex` `gender` `rpname` `profile @user`")
        .addField(`Developer Commands`, "`restart` `kill` `setlvl` `restartfx` `fxconfig` `query` `restartrsc` `kickid` `announcefx`")
        .setFooter(`${footer}`)
        .setTimestamp();
        message.channel.send(embed)
    }
}