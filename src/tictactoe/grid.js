var tictactoe = tictactoe || {};

tictactoe.Grid = function(){
    var grid=[null,null,null,
               null,null,null,
               null,null,null];

    function getCell(cellNum){
        return grid[cellNum];
    }

    function setCell(cellNum, player){
        grid[cellNum]= player;
    }

    function winner(){

        if(grid[0] == grid[1] && grid[1] == grid [2]){
            return grid[0];
        }
        else {
            return null;
        }


    }
    return {
        getCell: getCell,
        setCell: setCell,
        winner: winner
    }
}

module.exports = tictactoe.Grid;
