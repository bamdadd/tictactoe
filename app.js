var tictactoe = require('./src/tictactoe');

var express = require('express');
var app = express();

var playerOne = tictactoe.Player(tictactoe.Players());
var playerTwo = tictactoe.Player(tictactoe.Players());
var grid = tictactoe.Grid();
var gameState = tictactoe.GameState(playerOne, playerTwo, grid);

var game= tictactoe.Game(gameState);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');

});

var server = app.listen(3000);

var io = require('socket.io').listen(server);
var players = 0;


io.sockets.on('connection', function (socket) {

    socket.on('join', function (data) {
        game.join();
        players++;
        socket.emit('joined', {"id": players, "xo": calcXo(players), client_id: socket.id});
    });


    socket.on('play', function(data){
       if (game.haveWinner()){
           var winner;
           var isX = game.winner().isX();
           if (isX)
               winner = 'x';
           else
               winner = 'o';
           socket.broadcast.emit('winner', winner);
           socket.emit('winner', winner);
       }
       game.play(data.place);
       data.turn = calcNextTurn();
       socket.broadcast.emit('play', data);
       socket.emit('play', data);
    });
});

function calcXo(players){
    return (players %2 !=0 )?'x':'o';
}

function calcNextTurn() {
    return (game.turn().isX())? 'x': 'o';
}