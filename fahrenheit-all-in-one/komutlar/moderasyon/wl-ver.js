module.exports = {
    name: "wl-ver",
    code: `
    $if[$mentioned[1]!=]
    $title[! Bir üyeye WL verildi | $getVar[sunucuismi]]
    
    $description[
    $timezone[Europe/Istanbul]<@$authorID> adlı yetkili <@$mentioned[1]> isimli üyeye $sum[$hour;3].$minute saatinde wl verdi!!]
    $useChannel[$getVar[wlrollog]]
    $onlyPerms[managemessages;bu komutu kullanman için "mesajları yönet" yetki iznin olmalı]
    $giveRole[$mentioned[1];$getVar[whitelistrol]]
    $thumbnail[$serverIcon]
    $color[f3892]
    $suppressErrors[bir hata meydana geldi ! ya rol bulunamadı yada bu rolü vermek için gerekli yetkiye sahip değilim]
    $channelSendMessage[$channelID;{description:<@$mentioned[1]> adlı üyeye whitelist rolü verildi!} {color:f3892}]
    $else birisini etiketlemelisin!
    $endif
    $suppressErrors[bir hata meydana geldi ! ya rol bulunamadı yada bu rolü vermek için gerekli yetkiye sahip değilim]
    `
    }