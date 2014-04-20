var tictactoe = tictactoe || {};

tictactoe.Game = function (players){
    var current_turn = players.x;

    function play(){
        current_turn = players.next(current_turn);
    }

    return {
        turn: current_turn,
        play: play
    }
}


