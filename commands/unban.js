module.exports = class unban {
        constructor() {
            this.name = 'unban',
                this.alias = ['unban'],
                this.usage = '?unban', '??unban', 'doc?unban'
        }

        async run(client, message, args) {
            const Discord = require('discord.js')
            const config = require("./config/config.json")
            await message.delete();
            const loggingchanneluban = message.guild.channels.find(channel => channel.name === `${config.logchan}`);


            if (!message.member.hasPermission("ADMINISTRATOR", "BAN_MEMBERS")) return message.reply(`You do not have permission to use this!`)
            
            let bannedMember = await client.fetchUser(args[0])
              if(!bannedMember) return message.reply(`Please provide a user ID!`)

        let reason = args.slice(1).join(" ")
        if (!reason) reason = "No reason provided"
        try{
            const admin = message.author.id
            message.guild.unban(bannedMember, {reason: reason})
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${config.shortname} Unban System`)
            .setColor(`#1919FF`)
            .setThumbnail(`${config.logo}`)
            .addField(`User Unbanned`, `${bannedMember.tag}`)
            .addField(`Unbanned By`, `<@${admin}>`)
            .setTimestamp()
            loggingchanneluban.send(embed)
        } catch(e) {
            console.log(e.message)
            message.reply(`There was an error: ${e.message}`)
        }
    }
}
