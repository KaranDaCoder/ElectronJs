var xlsx = require("xlsx");
var Nightmare = require("nightmare");
nightmare = Nightmare({
    show: true,
    height: 1200,
    width: 1650,
    waitTimeout: 30000
});

var searchOptions = ['I want something just like this', 'Reading excel sheet', 'Hymn for the weekend'];
//login to youtube
var loginToYouTube = function loginToYouTube() {
    return new Promise(resolve => {
        setTimeout(() => {
            nightmare
            .goto('https://duckduckgo.com')
            .catch(error => {
              console.error('Search failed:', error)
            })
            resolve('Logged in to app', 5000)
        })
    })

}

