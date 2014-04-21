var tictactoe = tictactoe || {};

tictactoe.Player = function(players){
    this.xo = null;

    function makeX(){
        this.xo = players.x;
    }
    function makeO(){
        this.xo = players.o;
    }
    return {
        xo: this.xo,
        makeX: makeX,
        makeO: makeO

    }
}

module.exports = tictactoe.Player;
