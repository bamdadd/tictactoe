var tictactoe = tictactoe || {};

tictactoe.GameState = function (players, player) {
    var current_turn = players.x;

    function turn(){
        return current_turn;
    }

    function next(){
        return (current_turn== players.x)? players.o: players.x;
    }

    function join(){
        return player();
    }

    return {
        turn: turn,
        next: next,
        join: join
    }
}

module.exports = tictactoe.GameState;