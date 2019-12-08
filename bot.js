const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./commands/config/config.json')
const db = require('quick.db')
var version = config.version
const fetch = require('node-fetch')
const request = require('request')
//Information things
var token = config.token
var color = config.color
var ip = config.connect
var logo = config.logo
var version = config.version
var shortname = config.shortname
var leveling = require('discord-leveling')
const fs = require('fs')
var emojiname = [""];

// Command Handler, alot easier than all commands inside the entry point
const {
    CommandHandler
} = require("djs-commands")
const CH = new CommandHandler({
    folder: __dirname + '/commands/',
    prefix: ['?', '??', 'doc?']
});

client.removeAllListeners(); // Basically prevents duplicate listeners

client.on('message', async (message) => {
    if (message.channel.type === 'dm') return undefined;

    let args = message.content.split(" ");
    let command = args[0].toLowerCase();
    let cmd = CH.getCommand(command);
    if (cmd) {
        try {
            await cmd.run(client, message, args, config, db, leveling); //Add vars here
        } catch (error) {
            console.error(error)
            await console.error(`[${shortname}] An error was recieved Error: ${error}`);
            await console.error(`[${shortname}] Error Message: ${error.message}`);
        }
    }
});


client.on("ready", () => {
    console.log(`\u001b[31m`, `------------[ ${shortname} BOT | Made by IceyyM8  ]---------`)
    console.log(`\u001b[32 m`, `[${shortname}] Stats | ${client.users.size} users, ${client.channels.size} channels`)
    console.log(`\u001b[32 m`, `[${shortname}] Invite | https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
    console.log(`\u001b[32 m`, `[${shortname}] The bot connected to the api and is online with a ping of ${client.ping}ms`)
    console.log(`\u001b[31m`, `------------[ ${shortname} BOT | Made by IceyyM8 ]---------`)
    client.user.setActivity(`${config.activity}`, {
        type: "LISTENING" 
    })
});

client.login(token)

client.on('guildMemberAdd', member => {
      const wchannel = member.guild.channels.find(channel => channel.name === `${config.joinchan}`);
      var color = config.color
      var tag = member.user.tag
      var messages = ['The real', 'The legend', 'Calm Down!', 'OMG,', 'Yooo!', 'Oh no,', 'Wait!' || "Hol up" || "No way," || 'Oh yeah,' || 'Keep in mind' || 'The amazing']
      var randomMessage = messages[Math.floor(Math.random() * messages.length)];
      console.log(`Returned ${randomMessage} for welcomes!`)
      var embed = new Discord.MessageEmbed()
      .setColor(color)
      .setDescription(`${randomMessage} **${tag}** joined the server`)
      wchannel.send(embed)
})

client.on('guildMemberRemove', member => {
    const channell = member.guild.channels.find(channel => channel.name === `${config.joinchan}`);
    var tagl = member.user.tag
    var leavemessaged = ['Im sad,', 'Please keep note,', 'The loser', 'Come back!', "Brace yourselves,", 'Whoops!', 'Come back!', 'Party is over!', 'Commander!', 'NOOOOO,', 'Is he lost?']
    var randomLeave = leavemessaged[Math.floor(Math.random() * leavemessaged.length)];
    console.log(`Returned ${randomLeave} for welcomes!`)
    var leaveEmbed = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setDescription(`${randomLeave} **${tagl}** just left the server!`)
    channell.send(leaveEmbed)
})

    client.on('message', message => {
        var args = message.content.split(" ");
        var command = args[0].toLowerCase();
       if (command === `?restart`) {
           if (!message.member.hasPermission(`${config.mainpermission}`)) return message.reply("Error, you do not have permission!");
           message.channel.send(`Restarting...`)
           message.delete();
           console.clear();
           client.destroy()
           client.login(config.token);
           message.channel.send(`${shortname} Bot was restarted!`);
           return;
    }
});

    client.on('message', message => {
        var args = message.content.split(" ");
        var command = args[0].toLowerCase();
        if (command === `?kill`) {
            if (!message.member.hasPermission(`${config.mainpermission}`)) return message.reply("Error, you do not have permission!");
            message.channel.send(`Killing ${shortname} Bot`)
            message.delete();
            console.clear();
            client.destroy()
            return;
        }
    });

client.on('message', async (message) => {
    var profile = await leveling.Fetch(message.author.id)
    const channeltosend = message.guild.channels.find(channel => channel.id === `${config.botmsgchan}`);
    var prefix = `?`
    var prefix2 = `??`
    var prefix3 = `doc?`
    if (!message.content.startsWith(prefix || prefix2 || prefix3)) return;
    leveling.AddXp(message.author.id, 10)
    if (profile.xp + 10 > 200) {
        await leveling.AddLevel(message.author.id, 1)
        await leveling.SetXp(message.author.id, 0)
        const levelembed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} just leveled up!`)
        .setThumbnail(`${logo}`)
        .setColor(`${color}`)
        .addField(`Previous Level`, `${profile.level}`)
        .addField(`New Level`, `${profile.level + 1}`)
        .addField(`Points until next level`, `200 Points`)
        .setFooter(`Levels based of frequent messages`)
        channeltosend.send(levelembed)
        console.log(`[${shortname}] ${message.author.username} just leveled up to ${profile.level + 1}`)
    }})

client.on('messageDelete', message => {
    const loggingchannelmsg = message.guild.channels.find(channel => channel.name === `${config.logchan}`);
    if (message.cleanContent.startsWith("?" || "??" || "doc?")) return console.log(`A command was ran in ${message.channel.name}`)
    let delmsgembed = new Discord.MessageEmbed()
    .setAuthor(`${shortname} Discord logs`) 
    .setColor(color)
    .setThumbnail(logo)
    .setDescription(`A message was deleted, view info below`)
    .addField(`Channel`, `<#${message.channel.id}>`, true)
    .addField(`Author`, `${message.author.username}`, true)
    .addField(`Message Content`, `${message.cleanContent}`)
    .addField(`Date`, `${new Date()}`, true)
    loggingchannelmsg.send(delmsgembed)
});


