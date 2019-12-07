module.exports = class kill {
    constructor() {
        this.name = 'kill',
            this.alias = ['kill', 'kill'],
            this.usage = '?kill', '??kill', 'doc?kill'
    }

    async run(client, message) {
        const Discord = require('discord.js')
        const config = require("./config/config.json")
        var shortname = config.shortname
        const prefix = '?kill' || '??kill' || 'doc?kill'
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const died = message.mentions.members.first()
        var die1 = `Joe Swanson ran over ${died} with his wheelchair`
        var die2 = `${message.author.username} killed ${died} with their glock`
        var die3 = `Trump deported ${died} and they died at the Border`
        var die4 = `Steven hawking ran over ${died}`
        var die5 = `No one died but JAH is dead!`
        var die6 = `${died} got probed by aliens and died`
        var die7 = `${died} got clapped by god`
        var die8 = `${died} got spawnpeeked by Tachanka`
        var die9 = `Reverse card, everyone died`
        var die10 = `The house of ${died} was swatted, he was shot!`
        var die11 = `${died}'s house collapsed`


        if (!died) return message.reply('Please mention a user')

        var choice = Math.floor(Math.random() * 11);
        if (choice === 0) {
            return message.channel.send(die1);
        }

        if (choice === 1) {
            return message.channel.send(die2);
        }

        if (choice === 2) {
            return message.channel.send(die3);
        }

        if (choice === 3) {
            return message.channel.send(die4);
        }

        if (choice === 4) {
            return message.channel.send(die5);
        }

        if (choice === 5) {
            return message.channel.send(die6);
        }

        if (choice === 6) {
            return message.channel.send(die7);
        }

        if (choice === 7) {
            return message.channel.send(die8);
        }

        if (choice === 8) {
            return message.channel.send(die9);
        }

        if (choice === 9) {
            return message.channel.send(die10);
        }

        if (choice === 10) {
            return message.channel.send(die11);
        }
        message.delete();
        console.log(`[${shortname} | DEBUG] Returned a number of ${choice}`)
    }
}