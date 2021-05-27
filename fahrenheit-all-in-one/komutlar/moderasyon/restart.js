module.exports = {
    name: "restart",
    code: `@everyone
    $title[Restart Geliyor ! | $getVar[sunucuismi]]
    $description[Sunucumuza restart atılacaktır lütfen çıkışları gerçekleştirelim!]
    $onlyPerms[managemessages;bu komutu kullanman için "mesajları yönet" yetki iznin olmalı]
    $thumbnail[$serverIcon]
    $color[f3892]
    `
    }