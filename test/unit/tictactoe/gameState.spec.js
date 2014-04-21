describe("GameState", function () {
    var gameState;
    var players;
    var playerOne;
    var playerTwo;
    var grid;

    beforeEach(function () {
        playerOne = jasmine.createSpyObj('playerOne', ['makeX', 'isX', 'xo']);
        playerTwo = jasmine.createSpyObj('playerTwo', ['makeO', 'isO', 'xo']);
        grid = jasmine.createSpyObj('grid', ['setCell', 'getCell']);
        gameState = tictactoe.GameState(playerOne, playerTwo, grid);
    });

    describe('first player', function () {

        beforeEach(function () {
            playerOne.isX.and.returnValue(false);
            gameState.join();
        });

        it('should make the first player X', function () {
            expect(playerOne.makeX).toHaveBeenCalled();
        });

    });

    describe('second player', function () {

        beforeEach(function () {
            playerOne.isX.and.returnValue(true);
            gameState.join();
        });

        it('should make the second player O', function () {
            expect(playerTwo.makeO).toHaveBeenCalled();
        });

    });

    describe("players", function () {

        it("should set the initial player to x", function () {
            expect(gameState.turn()).toEqual(playerOne);
        });

        it("should set the next player", function () {
            expect(gameState.next()).toEqual(playerTwo);
        });


    });

    describe("Grid", function () {

        it('should update the grid', function () {
            gameState = tictactoe.GameState(playerOne, playerTwo, grid);

            gameState.join();
            gameState.join();
            gameState.play(0);

            expect(grid.setCell).toHaveBeenCalledWith(0, playerOne);
        });
    });
});
