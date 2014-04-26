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

        var firstRow = checkWinner(0, 1, 2);
        var secondRow = checkWinner(3, 4, 5);
        var thirdRow = checkWinner(6, 7, 8);
        var firstColumn = checkWinner(0, 3, 6);
        var secondColumn = checkWinner(1, 4, 7);
        var thirdColumn = checkWinner(2, 5, 8);
        var diagonalDesc = checkWinner(0, 4, 8);
        var diagonalAsc = checkWinner(2, 4, 6);

        if (firstRow) return firstRow;
        if (firstRow) return firstRow;
        if (secondRow) return secondRow;
        if (thirdRow) return thirdRow;
        if (firstColumn) return firstColumn;
        if (secondColumn) return secondColumn;
        if (thirdColumn) return thirdColumn;
        if (diagonalAsc) return diagonalAsc;
        if (diagonalDesc) return diagonalDesc;
        return null;
    }

    function checkWinner(c1, c2, c3) {
        if (grid[c1] == grid[c2] && grid[c2] == grid [c3] && grid[c1] != null) {
            return grid[c1];
        }
        return null;
    };

    return {
        getCell: getCell,
        setCell: setCell,
        winner: winner
    }
}

module.exports = tictactoe.Grid;
