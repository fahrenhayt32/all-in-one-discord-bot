module.exports = {
    name: "destek",
    code: `
    $description[Destek biletin oluşturuldu!] $color[00ff00] $footer[Herhangi bir sorun oluşursa bot yapımcısı ile iletişime geçiniz!]
    $newTicket[ticket-$username;{title:Merhaba $username ! - $getVar[sunucuismi]} {description: Destek Sistemine Hoşgeldin! Herhangi bir yetkiliyi etiketleyiniz!En kısa sürede size yardımcı olacağız..} {color:00ff00};$getVar[ticketkategori];no;:x: bir hata meydana geldi!]
    $setUserVar[ticketkonu;$message]
    $onlyIf[$getVar[ticketkategori]!=ayarlanmamış;Ticket kategorisi ayarlanmamış ! config dosyasından lütfen gerekli ayarlamayı yapın!.]
    `
    };
    
   