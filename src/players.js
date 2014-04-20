var tictactoe = tictactoe || {};


tictactoe.Players = function(gameState){
    var x = 'X';
    var o = 'O';

    function next(){
        var current_turn = gameState.turn();
        return (current_turn== x)? o : x;
    }

    return {
        x: x,
        o: o,
        next: next
    }
}