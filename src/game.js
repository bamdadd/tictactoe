var tictactoe = tictactoe || {};

tictactoe.Game = function (gameState){

    function play(){
        return gameState.next();
    }

    return {
        turn: gameState.turn,
        play: play
    }
}


