var express = require('express');
var app = express();

var five = require("johnny-five"),
    board = new five.Board();

var led;

  board.on("ready", function() {
    console.log("Arduino Conectado");
    led   = new five.Led(13);
  }); 

//Cors
app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,x-requested-with');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

app.get('/', function(req, res){
  res.send('Connecting Knowledge');
});

app.get('/ligar', function(req, res){
  led.on(); 
  res.send('LED ligado');
});

app.get('/desligar', function(req, res){
  led.off(); 
  res.send('LED desligado');
});

var server = app.listen(3000);

console.log('Servidor Express iniciado na porta %s', server.address().port);
