var tictactoe = tictactoe || {};

tictactoe.Grid = function () {
    var grid = [null, null, null,
        null, null, null,
        null, null, null];

    function getCell(cellNum) {
        return grid[cellNum];
    }

    function setCell(cellNum, player) {
        grid[cellNum] = player;
    }

    function winner() {

        if (grid[0] == grid[1] && grid[1] == grid [2] && grid[0] != null) {
            return grid[0];
        } else if (grid[3] == grid[4] && grid[4] == grid[5] && grid[3] != null) {
            return grid[3];
        } else if (grid[6] == grid[7] && grid[7] == grid[8] && grid[6] != null){
            return grid[6];
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
