var tictactoe = require('./src/tictactoe');

var express = require('express');
var app = express();

var players = tictactoe.Players();
var gameState = tictactoe.GameState(players);
var game = tictactoe.Game(gameState);


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
        socket.emit('joined', {"id": players, "xo": calcXo(players), client_id: socket.id});
    });


    socket.on('play', function(data){
       console.log(data);
       data.turn = calcNextTurn(data);
       socket.broadcast.emit('play', data);
       socket.emit('play', data);
    });
});

function calcXo(players){
    return (players %2 ==0 )?'x':'o';
}

function calcNextTurn(data) {
    return (data.player_xo == 'x')? 'o': 'x';
//    return game.next();
}