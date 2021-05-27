module.exports = ({
    name: "$alwaysExecute",
    code: `$if[$getGlobalUserVar[xp]==$getGlobalUserVar[xpmik]]
    $setGlobalUserVar[xpmik;$sum[$getGlobalUserVar[xpmik];25]]
    $setGlobalUserVar[level;$sum[$getGlobalUserVar[level];1]]
    $setGlobalUserVar[xp;0]
    Tebrikler Level Atladın ! Yeni levelin : $sum[$getGlobalUserVar[level];1]
    $else
    $setGlobalUserVar[xp;$sum[$getGlobalUserVar[xp];1]]
    $setGlobalUserVar[mesaj;$sum[$getGlobalUserVar[mesaj];1]]
    $setGlobalUserVar[harf;$sum[$getGlobalUserVar[harf];$charCount[$message]]]
    $setGlobalUserVar[kelime;$sum[$getGlobalUserVar[kelime];$argsCount]]
    $suppressErrors
    $endif
    $suppressErrors
     `
    })



