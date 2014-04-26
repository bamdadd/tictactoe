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

        if (grid[0] == grid[1] && grid[1] == grid [2]) {
            return grid[0];
        } else if (grid[3] == grid[4] && grid[4] == grid[5]) {
            return grid[3];
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
