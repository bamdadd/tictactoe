var express = require('express');
var app = express();



app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');

});

var server = app.listen(3000);

var io = require('socket.io').listen(server);
var players = 0;


io.sockets.on('connection', function (socket) {

    socket.on('join', function (data) {
        players++;
        socket.emit('joined', {"id": players, "xo": calcXo(players)});
    });
});

function calcXo(players){
    return (players %2 ==0 )?"x":"o";
}