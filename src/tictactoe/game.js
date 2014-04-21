var tictactoe = tictactoe || {};

tictactoe.Game = function (gameState){


    function play(cellNum){
        gameState.play(cellNum);
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