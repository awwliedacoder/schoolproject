const Twitter = require('twitter');
const fs = require("fs");
const request = require("request");

var client = new Twitter({
    consumer_key: 'Your_CONSUMER_KEY',
    consumer_secret: 'Your_CONSUMER_SECRET',
    access_token_key: 'Your_ACCESS_TOKEN_KEY',
    access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
  });

var stream = client.stream('statuses/filter', {track: 'ipl'});
for(var/i = 0; i < 100; i++)
    stream.on('data', function(event) {
        console.log("Tweeted by ::::>>>" + event.user.name + " ::::>>> " +  "Tweet is :::>>>> " + event.text + " ::::>>>");
        fs.appendFile("tweettttt.txt", JSON.stringify(event));
  });
  
stream.on('error', function(error) {
    throw error;
  });
// Tällä yllä olevalla koodilla saamme Elonin Tweetit TWITTER API:n avulla. Tarvitsemme vain noin 100 niitä, joten laitetaan se looppiin.

// S