describe("GameState", function () {
    var gameState;
    var players;
    var playerOne;
    var playerTwo;
    var grid;

    beforeEach(function () {
        playerOne = jasmine.createSpyObj('playerOne', ['makeX', 'isX', 'xo']);
        playerTwo = jasmine.createSpyObj('playerTwo', ['makeO', 'isO', 'xo']);
        grid = jasmine.createSpyObj('grid', ['setCell', 'getCell', 'winner']);
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

    describe('haveWinner ', function () {
        it('should delegate to grid object and return false if no winner', function () {
            grid = jasmine.createSpyObj('grid', ['winner']);
            grid.winner.and.returnValue(false);
            gameState = tictactoe.GameState(playerOne, playerTwo, grid);

            expect(gameState.haveWinner()).toEqual(false);
        });

        it('should delegate to grid object and return truw if have winner ', function () {
            grid = jasmine.createSpyObj('grid', ['winner']);
            grid.winner.and.returnValue(playerOne);
            gameState = tictactoe.GameState(playerOne, playerTwo, grid);

            expect(gameState.haveWinner()).toEqual(true);
        });
    });

    describe('winner ', function () {
        it('should delegate to grid object and return null if no winner', function () {
            grid = jasmine.createSpyObj('grid', ['winner']);
            grid.winner.and.returnValue(null);
            gameState = tictactoe.GameState(playerOne, playerTwo, grid);

            expect(gameState.winner()).toBeNull();
        });

        it('should delegate to grid object and return truw if have winner ', function () {
            grid = jasmine.createSpyObj('grid', ['winner']);
            grid.winner.and.returnValue(playerOne);
            gameState = tictactoe.GameState(playerOne, playerTwo, grid);

            expect(gameState.winner()).toEqual(playerOne);
        });
    });
});
