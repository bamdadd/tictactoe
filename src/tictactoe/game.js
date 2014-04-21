var tictactoe = tictactoe || {};

tictactoe.Game = function (gameState, playerOne, playerTwo){


    function play(){
        return gameState.next();
    }

    function join(){
        return gameState.join();
    }

    return {
        playerOne: playerOne,
        playerTwo: playerTwo,
        turn: gameState.turn,
        play: play,
        join: join
    }
}
module.exports = tictactoe.Game;