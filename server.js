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

//Internal DB
var sqlite3 = require('sqlite3').verbose();

console.log('[INFO] Loading EstiSite Database...');
var db = new sqlite3.Database('./database/estisite.db', function (fn) {
    console.log('[INFO] Loaded EstiSite database.');
});

const edb = require('./include/edb');

//End Requires

app.use(express.static('public'))

app.use(function(req, res, next){
    console.log('[ERROR] Client error 404');
    res.sendFile(__dirname + '/public/errors/404.html');
});


//Socket.io
io.on('connection', function(socket){
    console.log('[INFO] New Socket.io client connection.');
    socket.emit('hello', function (fn) {
        
    });
});


server.listen(3000);



db.serialize(function() {

    db.run("CREATE TABLE losremad (info TEXT)", function (fn) {
        //console.log('something hapend.');
        if(fn != null){
            console.log('[ERROR] Database Already Exists!');
        }
    });


    db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
        console.log(row.id + ": " + row.info);
    });
});

db.close();

edb.foo();

console.log('[INFO] EstiSite Server listening on port 3000.');