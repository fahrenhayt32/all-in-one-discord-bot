module.exports = {
    name: "aktif",
    code: `@everyone
    $title[Sunucu Aktif ! | $getVar[sunucuismi]]
    $description[Sunucumuz Aktiftir !]
    $addField[| Sunucu IP |;\`\`\`json
     $getVar[sunucuip]\`\`\`;yes]
    $addField[| TS3 IP |;\`\`\`fix
     $getVar[ts3ip]\`\`\`;yes]
    $image[$getVar[aktifgorsel]]
    $onlyPerms[managemessages;bu komutu kullanman için "mesajları yönet" yetki iznin olmalı]
    $thumbnail[$serverIcon]
    $color[f3892]
    `
    }