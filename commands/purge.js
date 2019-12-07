module.exports = class purge {
        constructor() {
            this.name = 'purge',
                this.alias = ['purge'],
                this.usage = '?purge', '??purge', 'doc?purge'
        }

        async run(client, message, args) {
            const Discord = require('discord.js')
            await message.delete();
            const amount = args.slice(1).join(' ');

           if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`You do not have permissions`)

           if (!amount) return message.reply(`Please supply an amount of messages!`)

           if (isNaN(amount)) return message.reply(`Please use a number!`)

           if (amount !== 0) message.channel.bulkDelete(amount) 
           .catch(error => message.channel.send(`There was an error: ${error}`))
        }
    }