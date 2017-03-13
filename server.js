/*
 * EstiSite Server
 * Serves and handles the website.
 * Built on Express and Socket.IO
 * (c) 2017 DolphinBox
 */
console.log("[INFO] **Starting EstiSite backend server...**");

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static('public'))

app.use(function(req, res, next){
    console.log('[ERROR] Client error 404');
    res.sendFile(__dirname + '/public/errors/404.html');
});


//Socket.io
io.on('connection', function(socket){
    console.log('[INFO] New Socket.io client connection.');
});

server.listen(3000);


console.log('[INFO] EstiSite Server listening on port 3000.')