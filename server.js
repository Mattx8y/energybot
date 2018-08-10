const Eris = require('eris');
 
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);   
 
bot.on('ready', () => {                                
    console.log('Ready!');                             
});

bot.on('messageCreate', (msg) => {
  if(msg.content.split('!')[0]=="") {
  switch(msg.content.split('!')[1]) {
    case "help":    
      bot.createMessage(msg.channel.id, '**EnergyBot Help**\n\n`!help`: *Shows a list of commands*\n`!info`: *Shows information about the bot*')
      break;
    case "info":
      bot.createMessage(msg.channel.id, '**EnergyBot**\nCreated by iWillBanU#2863\nMy prefix here is `!`\n\n`Invite me:` *https://www.energybot.ml/login*\n`Support`: discord.gg/7mcKKVh')
      break;
    default:
      bot.createMessage(msg.channel.id, 'Unknown command. Use `!help` for help.');
      break;
    }
}
});
 
bot.connect();                                         
