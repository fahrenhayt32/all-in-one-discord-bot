module.exports = ({
    name: "prefix-ayarla",
    aliases: ['ayarla-prefix','prefix'],
    code: `$title[$username | Bot Prefix'ini Değiştirdi]
    $thumbnail[$userAvatar[$authorID]]
    $description[
    Prefix $message[1] olarak ayarlandı]
    $setServerVar[prefix;$message[1]]`
    })