const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
  sharding: false, //true veya false  botun shard'ını açar
  shardAmount: 2, //Shard sayısı 
  mobile: false, //true veya false - botun status'ünü mobil olarak gösterir
 
  token: " ", //Discord Bot Tokeninizi giriniz
  prefix: ["$getServerVar[prefix]"] // botun prefixi
})
bot.status({
    text: "Yeni Özellikler Geliyor!",
    type: "PLAYING",
    time: 12
})
// aşağıdaki değerleri kendi sunucunuza göre ayarlamanız lazım... Sadece yorum satırı olan yerlerin yanındaki string veya int değerleri düzenleyin. Bilmiyorsanız ekstra bir dokunuş yapmayın!

    bot.variables({
        prefix: "!", /// default prefix .. El ile veya komut ile değiştirebilirsiniz.
        xp: 0,
        mesajlog:"842708530363367454", // Bir mesaj silinince hangi log kanalına düşmesini istiyorsanız o kanalın id'sini girin.
        whitelistrol:"645151623437615104",/// whitelist rol ID'sini burdaki sayılarla değiştirin.
        wlrollog:"842708530363367454", /// whitelist verdiğiniz kişilerin log kanal idsini giriniz. Bir yetkiliniz birisine !wl-ver ile wl verdiğinde log bu kanala düşecek.
        sunucuismi:"bambam sunucum", /// buraya sunucu adını girin
        sunucuip:"88.88.88.88", ///sunucunuzun ip adresini girin
        ts3ip:"88.22.33.22.11", //// sunucunuzun ts3 ipsini girin
        aktifgorsel:" ", /// sunucunuzun aktif görselini girin (linkin sonu .gif , .jpg, .png vb formatlarda bitmeli aksi taktirde bazen sorunlar oluşabiliyor )
        bakimgorsel:" ",// sunucu bakıma alındığında gösterilecek olan resimi girin  (yukarıdaki yazı buradada geçerli))
        restartgorsel:" ", // yukarıdaki yazılar burdada geçerli 
        level:0, // level sistemi için gerekli
        harf:0, // sunucuda yazılan toplam harf sayısını tutar
        kelime:0, // sunucuda yazılan kelime sayısını tutar
        mesaj:0, // sunucuda yazılan mesaj sayısını tutar
        xpmik:10, // level atladıkça eklenen miktar. ellemeyin. default hali dursun :D
        ticketkonu:"ayarlanmamış", /// dokunma 
        bg: "https://seyler.ekstat.com/img/max/800/x/xDqnaeg11Rd4VZCe-637529730091315716.jpg", // rank sistemindeki arka plan resmi
        color:"C900FF", // xp miktarını gösteren renk kodu isteğe bağlı değiştirilebilir
        ticketkategori: "639340110696939530" // buraya ticket sistemi için ticket kategorinize ait ID'yi girin...
        
    })
bot.onMessage() 

const fs = require('fs')

const folders = fs.readdirSync("./komutlar/")

for (const files of folders) {
const folder = fs.readdirSync(`./komutlar/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./komutlar/${files}/${commands}`) 



bot.command({
    name: command.name,
    aliases: command.aliases,
    code: command.code
})
}}
bot.musicStartCommand({ 
    channel: "$channelID", 
    code: `
    $title[Yeni Şarkı Çalınmaya Başlandı!]
    $color[49FF00]
    $thumbnail[$songInfo[thumbnail]]
    $addField[Şarkıyı açan;\`\`\`$username[$songInfo[userID]]\`\`\`;yes]
    $addField[Şarkının Süresi;\`\`\`$replaceTextWithRegex[$songInfo[duration];Seconds;g;Saniye]\`\`\`;yes]
    $addField[Şuanda çalan şarkı;\`\`\`$songInfo[title]\`\`\`;yes]
   
    
    

    ` 
    })

    bot.musicEndCommand({ 
        channel: "$channelID", 
        code: `Görünüşe göre çalınacak şarkı kalmamış veya ses kanalında kimse bulunmuyor! Kanaldan ayrıldım..` 
        })
        


// komutları yazmaya üşendim valla siz isterseniz editlersiniz !

        bot.command({
            name: "yardım",
            code: `
           $reactionCollector[$splitText[1];everyone;1m;🔄,1️⃣,2️⃣;awaitReaction1,awaitReaction2,awaitReaction3;yes]
           $textSplit[$sendMessage[{title:Help} {description:Kategoriler:
           1 - 🔄 Anasayfa
           2 - 1️⃣ 1.Sayfa Moderasyon Sistemine Ait Komutlar.
           3 - 2️⃣ 2.Sayfa $getVar[sunucuismi] | Komutlar.}{color:FFACF5}{footer:🔄 Anasayfa , 1️⃣ Sayfa 1 , 2️⃣ Sayfa2  Sayfa 0/2 };yes]; ]
           `
           }) 
           
           bot.awaitedCommand({
            name: "awaitReaction1",
            code: ` $editMessage[$message[1];{title:Help} {description:Kategoriler:
           1 - 🔄 Anasayfa
           2 - 1️⃣ 1.Sayfa Moderasyon Sistemine Ait Komutlar.
           3 - 2️⃣ 2.Sayfa $getVar[sunucuismi] | Komutlar.}{color:FFACF5}{footer:🔄 Anasayfa , 1️⃣ Sayfa 1 , 2️⃣ Sayfa2  Sayfa 0/2}] `})
            
           bot.awaitedCommand({
            name: "awaitReaction2",
            code: ` $editMessage[$message[1];{title:Moderasyon Sistemine Ait Komutlar 1} {description:**Komut listesi**}{color:FFACF5}{footer:🔄 Anasayfa , 1️⃣ Sayfa 1 , 2️⃣ Sayfa2  Sayfa 1/2}] `})
            
           bot.awaitedCommand({
            name: "awaitReaction3",
            code: ` $editMessage[$message[1];{title:$getVar[sunucuismi] | Komutlar} {description:**Komut Listesi**}{color:FFACF5}{footer:🔄 Anasayfa , 1️⃣ Sayfa 1 , 2️⃣ Sayfa2  Sayfa 2/2}] `})


            bot.deletedCommand({
                channel: "$getVar[mesajlog]",
                code: `$title[Sunucudan Bir mesaj silindi! | $getVar[sunucuismi]]
                $description[$username isimli kişinin mesajı <#$channelUsed> adlı kanaldan silindi]
                $addfield[**Mesajın içeriği**;\`\`\`$message\`\`\`;yes]
                $color[E0998A]`
                
            })
            bot.onMessageDelete()
