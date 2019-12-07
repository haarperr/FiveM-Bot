module.exports = class setlvl {
        constructor() {
            this.name = 'setlvl',
                this.alias = ['setlvl'],
                this.usage = '?setlvl', '??setlvl', 'doc?setlvl'
        }

        async run(client, message, args) {
            const Discord = require('discord.js')
            await message.delete();
            var user = message.mentions.users.first().id || message.author.id
            var name = message.mentions.users.first().username
            var levelstoset = args.slice(2).join(' ')
            var leveling = require('discord-leveling')

            if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`You do not have permission to use this!`)

            if (levelstoset == isNaN) return message.reply(`Invalid Usage | **IE: ?setlv @IceyyM8 100**`)

            if (!user) return message.reply('Please mention a user!')

            if (!levelstoset) return message.reply(`Invalid Usage | **IE: ?setlv @IceyyM8 100**`)

            if (user && levelstoset) {
                var current = leveling.Fetch(user) 
                const embed = new Discord.MessageEmbed()
                .setAuthor(`${name}'s level was updated!`)
                .setColor('#0071C1')
                .addField(`New Level`, `${levelstoset}`)
                .setFooter(`Saved! Set by ${message.author.username}`)
                message.channel.send(embed)
                leveling.SetLevel(user, levelstoset)
                console.log(`[DEBUG] ${name}'s level was set to ${levelstoset} by ${message.author.username}`)
            }
        }
    }