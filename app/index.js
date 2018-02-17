var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Twitter = require('twitter');
//var midi = require('midi');
var notes = require('./notes');

//conecta ao Twitter
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('./'));

//captures the stream of twittes
/*
var stream = client.stream('statuses/filter', {track: 'weboscillator'});
stream.on('data', function(event) {
  io.sockets.emit('tweet', event.text);
  console.log(event.text);
});

//process
var processTweet = function(tweet){
  var words = tweet.split(' ');
  for(var i = 0; i < words.length; i++){
    console.log(words[i]);
  }
}


//inicia porta para input de midi
var input = new midi.input();

input.on('message', function(deltaTime, message) {
  console.log('m:' + message + ' d:' + deltaTime);
});

input.openVirtualPort("Test Input");

input.closePort(); 

// Set up a new output.
var output = new midi.output();

// Count the available output ports.
output.getPortCount();

// Get the name of a specified output port.
output.getPortName(0);

// Open the first available output port.
output.openPort(0);

// Send a MIDI message.
output.sendMessage([176,22,1]);

// Close the port when done.
output.closePort();
*/
http.listen(3000, function(){
  console.log('listening on *:3000');
});
