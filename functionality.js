const Twitter = require('twitter');
const fs = require("fs");
const request = require("request");

var client = new Twitter({
    consumer_key: 'r1k9PhxLtXOxowGoAVOCFdMmI',
    consumer_secret: '2mvM93F1UPgw3hwVsvAyj0k011y9ZF1h3qmnuwRvdNjJbm24oK',
    access_token_key: '1120987965092708352-FPT5peRFQas8pkvzQGvpKD2yYsZBqs',
    access_token_secret: 'DMZsrPz1lRnPlmZVjd7mLrKrqB5sAfmG4V6wlIEH2SpUt'
  });

var stream = client.stream('statuses/filter', {track: 'ElonMuskAOC' && 'elonmusk'});
for(let i = 0; i < 200; i++)
    stream.on('data', function(event) {
        console.log("Tweeted by ::::>>>" + event.user.name + " ::::>>> " +  "Tweet is :::>>>> " + event.text + " ::::>>>");
        fs.appendFile("tweettttt.txt", JSON.stringify(event));
    }
)
    stream.on('error', function(error) {
        throw error;
  });
// Tällä yllä olevalla koodilla saamme Elonin Tweetit TWITTER API:n avulla. Tarvitsemme vain noin 200 niitä, joten laitetaan se looppiin. 
// Niin kauan kuin I on pienemikuin 200, se luuppaa datan hankinnan.
