var xlsx = require("xlsx");
var Nightmare = require("nightmare");
vo = require('vo');
nightmare = Nightmare({
    show: true,
    height: 1200,
    width: 1650,
    waitTimeout: 30000
});


//let users= ['1111', '2222', '3333'];
var searchOptions = ['I want something just like this', 'Reading excel sheet', 'Hymn for the weekend' , 'gangs of wasseypur'];

const waitForTaskToFinishWithUserName = (username) => {
    return new Promise(resolve => {
            setTimeout(() => {
                console.log('Entered username== ' +username);
                resolve(username)}, 5000)

    })
   
  }

  var loginToYouTube = function loginToYouTube() {
    return new Promise(resolve => {
        setTimeout(() => {
            nightmare
            .goto('https://duckduckgo.com')
            .catch(error => {
              console.error('Search failed:', error)
            })
            console.log('Logged in successfully!')
            resolve("Error logging in", 2000)
        })
    })

}

clickOnSomeLink = async function clickOnSomeLink(searchButton) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Clicked button username== ' +searchButton);
            resolve(searchButton)}, 5000)

})

}

enterSearchText =async function searchForContent(contentArr) {
    return new Promise(resolve => {
        setTimeout(() => {
            nightmare
            .type('#search_form_input_homepage', contentArr)
            .wait("#search_form_input_clear")
            .click("#search_form_input_clear")
            .catch(error => {
                console.error('Search failed:', error)
              })
              console.log('Searched for==' +contentArr)
              resolve(contentArr)}, 15000)
        })
    }
function main() {
function* main1() {
    yield vo(loginToYouTube());
    yield vo(searchUser(searchOptions));
    yield nightmare.end();
} return vo(main1) 
    .catch((error) => console.log("ERROR"))
    .then();
}



async function searchUser(searchOptionsArr) {
    for(const search of searchOptionsArr) {
        await enterSearchText(search);

    }
      
}

main();