var tictactoe = tictactoe || {};

tictactoe.GameState = function (playerOne, playerTwo, grid) {
    var currentTurn = playerOne;

    function turn(){
        return currentTurn;
    }

    function next(){
        var nextTurn = (currentTurn == playerOne) ? playerTwo : playerOne;
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

    function play(cellNum){
        grid.setCell(cellNum, currentTurn);
    }

    return {
        turn: turn,
        next: next,
        join: join,
        play: play
    }
}

module.exports = tictactoe.GameState;