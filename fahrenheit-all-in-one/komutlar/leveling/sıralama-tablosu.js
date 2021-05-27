module.exports = ({
    name: "sıralama-tablosu",
    aliases: ['sıralama','sıralama-bilgi'],
    code: `$color[C900FF]
    $title[$getVar[sunucuismi] | Top 10 Sıralama Tablosu!]
        $description[$globalUserLeaderboard[level;asc;**[{top}] : {username} = Level {value}**;10;1]]
        $image[https://wallpapercave.com/wp/wp4421387.jpg]
       
    `
    })