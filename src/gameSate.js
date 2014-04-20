var tictactoe = tictactoe || {};

tictactoe.GameState = function(players){
    var current_turn = players.x;

    function turn(){
        return current_turn;
    }
    
    return {
        turn: turn
    }
}