var tictactoe = tictactoe || {};

tictactoe.Player = function(players){
    this.xo = null;

    function makeX(){
        this.xo = players.x;
    }
    function makeO(){
        this.xo = players.o;
    }
    function isX(){
        return this.xo == players.x;
    }

    function isO(){
        return this.xo == players.o;
    }
    return {
        xo: this.xo,
        isX: isX,
        isO: isO,
        makeX: makeX,
        makeO: makeO

    }
}

module.exports = tictactoe.Player;
