var tictactoe = tictactoe || {};

tictactoe.Player = function(players){
    this.xo = null;
    
    function makeX(){
        this.xo = players.x;
    }
    return {
        xo: this.xo,
        makeX: makeX
    }
}

module.exports = tictactoe.Player;
