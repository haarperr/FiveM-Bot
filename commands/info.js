
module.exports = class info {
    constructor() {
        this.name = 'info',
            this.alias = ['info'],
            this.usage = '?info', '??info', 'doc?info'
    }

    async run(bot, message, args) {
        const Discord = require('discord.js')
        await message.delete();
        const config = require("./config/config.json")
        const ip = config.ip
        var color = config.color
        var logo = config.logo
        const fivem = require('fivem-api')
        const lc = require('letter-count');

        var requester = await fivem.getServerInfo(ip)
        var online = requester.players.length
        var shallowed = requester.infos.vars.sv_scriptHookAllowed
        var hostname = requester.infos.vars.sv_hostname
        var vs = requester.infos.server
        var max = requester.infos.vars.sv_maxClients
        let embed = new Discord.MessageEmbed()
            .setAuthor(`${hostname}`)
            .setThumbnail(`${logo}`)
            .setColor(`${color}`)
            .addField(`Players Online`, `${online}/${max}`)
            .addField(`Script Hook allowed`, `${shallowed}`)
            .addField(`Resources`, `To many to count`)
            .setFooter(`FXVersion: ${vs}`)
        message.channel.send(embed)
    }
}