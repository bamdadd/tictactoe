var tictactoe = tictactoe || {};

tictactoe.Game = function (players){
    function turn(){
        return players.x;
    }

    return {
        turn: turn()
    }
}