let userData = {
    avatar: `$replaceText[$userAvatar[$mentioned[1;yes]];webp;png]`,
    xp: `$getGlobalUserVar[xp;$mentioned[1;yes]]`,
    rexp: `$getGlobalUserVar[xpmik;$mentioned[1;yes]]`,
    level: `$getGlobalUserVar[level;$mentioned[1;yes]]`,
    status: `$status[$mentioned[1;yes]]`,
    name: `$username[$mentioned[1;yes]]`,
    discrim: `$discriminator[$mentioned[1;yes]]`,
    color: `$getGlobalUserVar[color;$mentioned[1;yes]]`,
    bg: `$getGlobalUserVar[bg;$mentioned[1;yes]]`,
    position: `$getLeaderboardInfo[level;$mentioned[1;yes];globaluser;top]` 
   };
   
   module.exports = ({
    name: "profil",
    aliases: ['rank', 'karakter-bilgi'],
    code: `
   $djsEval[const Discord = require('discord.js');
   const canvacord = require("canvacord");
   
   const rank = new canvacord.Rank()
   
   .setAvatar("${userData.avatar}")
   .setLevel(${userData.level}, "Level", true)
   .setCurrentXP(${userData.xp})
   .setRequiredXP(${userData.rexp})
   .setStatus("${userData.status}", true)
   .setProgressBar("#${userData.color}", "COLOR")
   .setUsername("${userData.name}")
   .setDiscriminator("${userData.discrim}")
   .setRank(${userData.position}, "Rank " + " " + "#", true)
   .setBackground("IMAGE","${userData.bg}")
   .renderEmojis(true);
   rank.build()
    .then(data => {
    const attachment = new Discord.MessageAttachment(data, "rankcard.png");
    const embed = new Discord.MessageEmbed()
    .setTitle(" Bilgileriniz Gösteriliyor!")
    .addFields(
        { name: 'Kullanıcı', value: '\`\`\`$username[$mentioned[1;yes]]\`\`\`', inline : true },
        { name: 'Toplam XP', value: '\`\`\`$getGlobalUserVar[xp;$mentioned[1;yes]]\`\`\`', inline : true },
        { name: 'Mevcut Level', value: '\`\`\`$getGlobalUserVar[level;$mentioned[1;yes]]\`\`\`', inline : true },
        { name: 'Yazdığınız mesaj sayısı', value: '\`\`\`$getGlobalUserVar[mesaj;$mentioned[1;yes]]\`\`\`', inline : true },
        { name: 'Yazdığınız kelime sayısı', value: '\`\`\`$getGlobalUserVar[kelime;$mentioned[1;yes]]\`\`\`', inline : true },
        { name: 'Yazdığınız harf sayısı', value: '\`\`\`$getGlobalUserVar[harf;$mentioned[1;yes]]\`\`\`', inline : true },
        { name: 'Level Konumu', value: '\`\`\`#$getLeaderboardInfo[level;$mentioned[1;yes];globaluser;top]\`\`\`', inline : true }
    )

    .setTimestamp()
    .attachFiles(attachment)
    .setColor('00fdff')
   
    .setImage('attachment://rankcard.png');
    channel.send(embed)
    });
   ]
   $botTyping
  
   `
   });