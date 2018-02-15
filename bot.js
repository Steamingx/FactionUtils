// bot.js // usage: cmd > cd <directory> > node bot.js
const Discord = require('discord.js');
var client = new Discord.Client();
const prefix = "!";
var test = 0;
var lastTime;
var key = 1;
var int1;
var NOTIFY_CHANNEL;

function msToTime(timeMS) {
      var timeString;
      var seconds = parseInt((timeMS/1000)%60)
          ,minutes = parseInt((timeMS/(1000*60))%60)
          ,hours = parseInt((timeMS/(1000*60*60))%24);
      if(hours > 0){
        timeString = hours + " hours"
      }else if (minutes > 0) {
        timeString = minutes + " minutes"
      }else if (seconds > 0) {
        timeString = seconds + " seconds"
      }
      return timeString;
}
//starts bot
client.on('ready', () => {
    console.log('Successfully started bot.');
    client.user.setActivity("(!) Protecting Your Walls (!)| steaming.pw/factionutils | " + client.guilds.array().length + " other factions");
    NOTIFY_CHANNEL = client.channels.find("name", "wall-check"); // finds channel to send alerts in

//sets alert intveral
    int1 = setInterval(function steaming(){
    if(test == 1 && (key != 0)){
      const embed = new Discord.RichEmbed()
      .setColor(0xFF0000)
      .setTimestamp()
      .setTitle('FactionUtils')
      .addField('Walls Havent been checked in', "1 Hour")
      .setURL("http://www.steaming.pw/FactionUtils")
      .setThumbnail("https://i.imgur.com/C6MticJ.png");
      NOTIFY_CHANNEL.send(embed)
        NOTIFY_CHANNEL.send('@here @here check walls', {tts: false});
        NOTIFY_CHANNEL.send('@here @here check walls', {tts: false});

    }
    else{
        key = 1
        test = 1}
    }, 1800000);
//1200000 = 20 mins 900000 = 15 mins  1500000 = 25 mins 1800000 = 30 mins https://www.timecalculator.net/seconds-to-milliseconds
} //1 second = 1000 ms
);
//.clear command
client.on('message', message => {
  if (message.content == prefix + 'clear') {
    lastSender = message.guild.lastSender = message.author
    lastTime = new Date()
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setTitle('FactionUtils')
    .addField('Checked By', message.guild.lastSender.username)
    .addField('Check again in', msToTime(30*60*1000 - Math.abs(new Date() - lastTime)))
    .setURL("http://www.steaming.pw/FactionUtils")
    .setThumbnail("https://i.imgur.com/C6MticJ.png");
    NOTIFY_CHANNEL.send(embed)
    key = 0 }
});
//.weewoo command
client.on ('message', message => {
  if (message.content === prefix + "weewoo") {
    NOTIFY_CHANNEL.send('Error, proper usage is:');
    NOTIFY_CHANNEL.send('```!weewoo <east,south,north,west>```');
  }
});
//.weewoo north command
client.on ('message', message => {
  if (message.content === prefix + "weewoo north") {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setTitle('FactionUtils')
    .addField('Alerted By', message.guild.lastSender.username)
    .addField('Buffer Direction','North' )
    .setURL("http://www.steaming.pw/FactionUtils")
    .setThumbnail("https://i.imgur.com/C6MticJ.png");

    NOTIFY_CHANNEL.send(embed)
    NOTIFY_CHANNEL.send('@everyone **LOG IN WERE BEING ATTEMPTED FROM NORTH SIDE**');
    NOTIFY_CHANNEL.send('@everyone **LOG IN WERE BEING ATTEMPTED FROM NORTH SIDE**');
    NOTIFY_CHANNEL.send('@everyone **LOG IN WERE BEING ATTEMPTED FROM NORTH SIDE**');
  }
});
//.weewoo east command
client.on ('message', message => {
  if (message.content === prefix + "weewoo east") {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setTitle('FactionUtils')
    .addField('Alerted By', message.guild.lastSender.username)
    .addField('Buffer Direction','East' )
    .setURL("http://www.steaming.pw/FactionUtils")
    .setThumbnail("https://i.imgur.com/C6MticJ.png");

    NOTIFY_CHANNEL.send(embed)
    NOTIFY_CHANNEL.send('@everyone **LOG IN WERE BEING ATTEMPTED FROM EAST SIDE**');
    NOTIFY_CHANNEL.send('@everyone **LOG IN WERE BEING ATTEMPTED FROM EAST SIDE**');
    NOTIFY_CHANNEL.send('@everyone **LOG IN WERE BEING ATTEMPTED FROM EAST SIDE**');
  }
});
//.weewoo south command
client.on ('message', message => {
  if (message.content === prefix + "weewoo south") {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setTitle('FactionUtils')
    .addField('Alerted By', message.guild.lastSender.username)
    .addField('Buffer Direction','South' )
    .setURL("http://www.steaming.pw/FactionUtils")
    .setThumbnail("https://i.imgur.com/C6MticJ.png");

    NOTIFY_CHANNEL.send(embed)
    NOTIFY_CHANNEL.send('@everyone **LOG IN WERE BEING ATTEMPTED FROM SOUTH SIDE**');
    NOTIFY_CHANNEL.send('@everyone **LOG IN WERE BEING ATTEMPTED FROM SOUTH SIDE**');
    NOTIFY_CHANNEL.send('@everyone **LOG IN WERE BEING ATTEMPTED FROM SOUTH SIDE**');
  }
});
//.weewoo west command
client.on ('message', message => {
  if (message.content === prefix + "weewoo west") {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setTitle('FactionUtils')
    .addField('Alerted By', message.guild.lastSender.username)
    .addField('Buffer Direction','West' )
    .setURL("http://www.steaming.pw/FactionUtils")
    .setThumbnail("https://i.imgur.com/C6MticJ.png");

    NOTIFY_CHANNEL.send(embed)
    NOTIFY_CHANNEL.send('@everyone **LOG IN WERE BEING ATTEMPTED FROM WEST SIDE**');
    NOTIFY_CHANNEL.send('@everyone **LOG IN WERE BEING ATTEMPTED FROM WEST SIDE**');
    NOTIFY_CHANNEL.send('@everyone **LOG IN WERE BEING ATTEMPTED FROM WEST SIDE**');
  }
});
//.weewoo red
client.on ('message', message => {
  if (message.content === prefix + "weewoo red") {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setTitle('FactionUtils')
    .addField('Alerted By', message.guild.lastSender.username)
    .addField('Current Status','Breached!' )
    .setURL("http://www.steaming.pw/FactionUtils")
    .setThumbnail("https://i.imgur.com/C6MticJ.png");
    
    NOTIFY_CHANNEL.send(embed)
    NOTIFY_CHANNEL.send('@everyone **LOG IN! WE ARE BEING RAIDED!**', {tts: true});
    NOTIFY_CHANNEL.send('@everyone **LOG IN! WE ARE BEING RAIDED!**', {tts: true});
    NOTIFY_CHANNEL.send('@everyone **LOG IN! WE ARE BEING RAIDED!**', {tts: true});
  }
});
//.walls command
client.on ('message', message => {
  if (message.content === prefix + 'walls') {
    if (message.guild.lastSender) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setTitle('FactionUtils')
    .addField('Wall Status', 'Last checked by @'+ message.guild.lastSender.username)
    .addField('Last  ```checked```', msToTime(Math.abs(new Date() - lastTime)) + " ago.")
    .addField('Check again in', msToTime(30*60*1000 - Math.abs(new Date() - lastTime)))
    .setURL("http://www.steaming.pw/FactionUtils")
    .setThumbnail("https://i.imgur.com/C6MticJ.png");
      NOTIFY_CHANNEL.send(embed)
    }
    else {
      NOTIFY_CHANNEL.send("```FactionUtils has restarted! Please execute !clear for !walls to update again.```")
    }
  }
});
// .help command
client.on ('message', message => {
  if (message.content === prefix + "help") {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTitle('FactionUtils Help')
    .addField('Command Help')
    .setURL("http://www.steaming.pw/FactionUtils")
    .setThumbnail("https://i.imgur.com/C6MticJ.png");
      NOTIFY_CHANNEL.send(embed)
  }
})


//login token
client.login('NDA2NjQ0ODI1NTg5NTQ3MDE4.DU1-0g.UdNvgyYAsb0o7Oi6AoouF8xvwAk');
