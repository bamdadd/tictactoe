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
    return {
        getCell: getCell,
        setCell: setCell
    }
}

module.exports = tictactoe.Grid;
