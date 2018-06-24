var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost')
var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use("/public", express.static(__dirname + "/public"));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})
  
http.listen(3000, '0.0.0.0', function(){
    console.log('listening on *:3000');
})
 
client.on('connect', function () {
    client.subscribe('hybrid/#')
})

io.on('connection', function(socket){
    console.log('a user connected');
})

var output = {};

var console_lastsend = new Date().getTime();
var io_lastsend = new Date().getTime();
var console_timeout = 1000;
var io_timeout = 100;

client.on('message', function (topic, message) {

    let iteration_time = new Date().getTime();

    output[topic] = message.toString();

    if(iteration_time - console_lastsend > console_timeout){
        console.log(output);
        console_lastsend = iteration_time;
    }

    if(iteration_time - io_lastsend > io_timeout){
        io.emit("mqttdata", output);
        io_lastsend = iteration_time;
    }

})