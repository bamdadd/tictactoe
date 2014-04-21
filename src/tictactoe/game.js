var tictactoe = tictactoe || {};

tictactoe.Game = function (gameState){


    function play(){
        return gameState.next();
    }

    function join(){
        return gameState.join();
    }

    return {
        turn: gameState.turn,
        play: play,
        join: join
    }
}
module.exports = tictactoe.Game;