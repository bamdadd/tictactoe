var tictactoe = tictactoe || {};

tictactoe.GameState = function(players){
    var current_turn = players.x;

    function turn(){
        return current_turn;
    }

    function next(){
        return (current_turn== players.x)? players.o: players.x;
    }

    return {
        turn: turn,
        next: next
    }
}