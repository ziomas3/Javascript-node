var express = require('express');
var http = require('http');
var socket = require('socket.io');

var app = express()

app.set('view engine', 'ejs')
app.set('views', './views')

var server = http.createServer(app);
var io = socket(server);

io.on('connection', function(socket)
{
    socket.emit('chat message', ' Witaj');
    socket.on('chat message', function(data)
    {
        io.emit('chat message', data); //do wszystkich
        //socket.emit('chat message, data); //tylko do polaczonych 
    })
})

setInterval(function() {io.emit('time message', Date())})

app.get('/gadka', function(req, res)
{
    res.render('gadka');
});
