module.exports = ({
    name: "prsagfagagagsaofil", /// eski profil komutu
    code: `$title[Karakter Bilgilerin Gösteriliyor!]
    $addField[Level Konumu;\`\`\`#$getLeaderboardInfo[level;$mentioned[1;yes];globaluser;top]\`\`\`;yes]
    $addField[Yazdığınız harf sayısı;\`\`\`$getGlobalUserVar[harf;$mentioned[1;yes]]\`\`\`;yes]
    $addField[Yazdığınız kelime sayısı;\`\`\`$getGlobalUserVar[kelime;$mentioned[1;yes]]\`\`\`;yes]
    $addField[Yazdığınız mesaj sayısı;\`\`\`$getGlobalUserVar[mesaj;$mentioned[1;yes]]\`\`\`;yes]
    $addField[Mevcut level;\`\`\`$getGlobalUserVar[level;$mentioned[1;yes]]\`\`\`;yes]
    $addField[Toplam xp;\`\`\`$getGlobalUserVar[xp;$mentioned[1;yes]]\`\`\`;yes]
    $addField[Kullanıcı;\`\`\`$username[$mentioned[1;yes]]\`\`\`;yes]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $color[00fdff]
    $image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getGlobalUserVar[level;$mentioned[1;yes]]&rank=&currentxp=$getGlobalUserVar[xp;$mentioned[1;yes]]&nextlevelxp=$getGlobalUserVar[xpmik;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdO-BoAmbsdO7j0dKTegQjwuPYGevN-9hHA&usqp.png&xpcolor=BF00FF&isboosting=false]
    
    `
})