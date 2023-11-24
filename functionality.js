const Twitter = require('twitter');
const fs = require("fs");
const request = require("request");

var client = new Twitter({
    consumer_key: 'Your_CONSUMER_KEY',
    consumer_secret: 'Your_CONSUMER_SECRET',
    access_token_key: 'Your_ACCESS_TOKEN_KEY',
    access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
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