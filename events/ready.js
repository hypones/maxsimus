const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log('>>Oynuyor kısmı başarıyla güncellendi.');
console.log('Bot hazır ve giriş yaptı Üstadım.');

    var Games = [

        "🔥ffm!yardım🔥",
    
        "🔥f!davet Botu ekleyin🔥",
        
        "🔥ffm!çal🔥",
        
        "🔥ffm!durdur🔥",
        
        "🔥ffm!geç🔥",
        
        "🔥ffm!kuyruk🔥",
        
        
        "🔥FlexFully Music Aktif🔥",
        
        
       



        `🔥Yapımcım [FlexFully]Mustafa#8756`


    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], "https://www.twitch.tv/MustafaArdaTR");
        }, 2 * 2500);

}; 