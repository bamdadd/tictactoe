var tictactoe = tictactoe || {};

tictactoe.Game = function (gameState){


    function play(cellNum){
        gameState.play(cellNum);
        return gameState.next();
    }

    function join(){
        return gameState.join();
    }

    function haveWinner(){
        return gameState.haveWinner();
    }

    function winner(){
        return gameState.winner();
    }

    return {
        turn: gameState.turn,
        play: play,
        join: join,
        haveWinner: haveWinner,
        winner: winner
    }
}
module.exports = tictactoe.Game;