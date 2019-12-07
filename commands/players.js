module.exports = class players {
    constructor() {
        this.name = 'players',
            this.alias = ['players'],
            this.usage = '?players', '??players', 'doc?players'
    }

    async run(bot, message, args) {
        const Discord = require('discord.js')
        await message.delete();
        const config = require("./config/config.json")
        var color = config.color
        var logo = config.logo
        var ip = config.ip
        const fivem = require('fivem-api')

        var online = await fivem.getServerInfo(ip)
        var max = online.infos.vars.sv_maxClients
        let embed = new Discord.MessageEmbed()
            .setAuthor(`${config.shortname} Players Online`)
            .setThumbnail(`${logo}`)
            .setColor(`${color}`)
            .addField(`Online`, `${online.players.length}/${max}`, true)
            .setFooter(`IP: ${ip}`)
        message.channel.send(embed)
    }
}