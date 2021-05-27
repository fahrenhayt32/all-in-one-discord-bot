module.exports = ({
    name: "bot-durum",
    aliases: ['bot-bilgi'],
    code: `$author[Botun Bilgileri Görüntüleniyor;$userAvatar[$clientid]]
   
    $color[00fdff]
    $addField[ | Bot Yaratıcısı;\`\`\`css
    .Fahrenheit\`\`\`;yes]
    $addField[💓 | Ping;\`\`\`json
    $ping\`\`\`;yes]
    $addField[✨ | Komut Sayısı;\`\`\`json
    $commandsCount\`\`\`;yes]
    $addField[🖥️ | Ram Kullanımı;\`\`\`fix
     $ram MB\`\`\`;yes]
    $addField[🖥️ | CPU Kullanımı;\`\`\`fix
    %$cpu\`\`\`;yes]
    $addField[🕜 | Uptime;\`\`\`fix
    $uptime\`\`\`;yes]
    $thumbnail[$userAvatar[$clientid]]
   
    `
    })