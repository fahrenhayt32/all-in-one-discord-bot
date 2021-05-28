module.exports = {
    name: "wl-ver",
    code: `
    $if[$mentioned[1]!=]
    $title[! Bir üyeye WL verildi | $getVar[sunucuismi]]

    $timezone[Europe/Istanbul]
    $addField[WL Verilme Saati:; \`\`\`$sum[$hour;3].$minute \`\`\`;yes]
    $addField[İşlemi Gerçekleştiren:;\`\`\`$username[$authorID]\`\`\`;yes]
    $addField[Kayıt Edilen Üye:;\`\`\`$username[$mentioned[1]]\`\`\`;yes]
    $addField[Yetkilinin Yaptığı Toplam Kayıt:;\`\`\`$sum[$getUserVar[wl_kayit];1]\`\`\`;yes]
    $addField[Verilen rol;<@&$getVar[whitelistrol]>;yes]
    $addField[Alınan rol;<@&$getVar[kayıtsızrol]>;yes]
    $setUserVar[wl_kayit;$sum[$getUserVar[wl_kayit];1]]
    $useChannel[$getVar[wlrollog]]
    $onlyPerms[managemessages;bu komutu kullanman için "mesajları yönet" yetki iznin olmalı]
    $giveRole[$mentioned[1];$getVar[whitelistrol]]
    $takeRole[$mentioned[1];$getVar[kayıtsızrol]]
    $thumbnail[$serverIcon]
    $color[f3892]
    $suppressErrors[bir hata meydana geldi ! ya rol bulunamadı yada bu rolü vermek için gerekli yetkiye sahip değilim]
    $channelSendMessage[$channelID;{description:<@$mentioned[1]> adlı üyeye whitelist rolü verildi!} {color:f3892}]
    $else birisini etiketlemelisin!
    $endif
    $suppressErrors[bir hata meydana geldi ! ya rol bulunamadı yada bu rolü vermek için gerekli yetkiye sahip değilim]
    `
    }
