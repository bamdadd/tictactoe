var tictactoe = tictactoe || {};

tictactoe.GameState = function (players, playerOne, playerTwo) {
    var currentTurn = players.x;

    function turn(){
        return currentTurn;
    }

    function next(){
        var nextTurn = (currentTurn == players.x) ? players.o : players.x;
        currentTurn = nextTurn;
        return  nextTurn;
    }

    function join(){
        if(!playerOne.isX()){
            playerOne.makeX();
        }
        else if(!playerTwo.isO()){
            playerTwo.makeO();
        }

    }

    return {
        turn: turn,
        next: next,
        join: join
    }
}

module.exports = tictactoe.GameState;