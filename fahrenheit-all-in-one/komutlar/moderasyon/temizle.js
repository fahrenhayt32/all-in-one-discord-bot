
  module.exports = ({
    name: "temizle",
    code: `$clear[$message]
    $onlyPerms[managemessages;bu komutu kullanmak için mesajları yönet yetkin olmalı]
    $title[$message adet mesaj $username tarafından temizlendi!]
    $color[E0998A]
    $suppressErrors[bir hata meydana geldi]`
    })