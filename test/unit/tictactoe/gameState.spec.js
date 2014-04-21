describe("GameState", function () {
    var gameState;
    var players;
    var playerOne;
    var playerTwo;

    beforeEach(function () {
        players = jasmine.createSpyObj('players', ['x', 'o']);
        playerOne = jasmine.createSpyObj('playerOne', ['makeX']);
        playerTwo = jasmine.createSpyObj('playerTwo', ['makeO']);
        gameState = tictactoe.GameState(players, playerOne, playerTwo);
    });

    describe('first player', function () {

        beforeEach(function(){
           gameState.join();
        });

        it('should initialise the first player as X', function () {
           expect(playerOne.makeX).toHaveBeenCalled();
        });

    });

    describe('second player', function () {

        beforeEach(function(){
            gameState.join();
            gameState.join();
        });

        it('should initialise the second player as O', function () {
            expect(playerTwo.makeO).toHaveBeenCalled();
        });

    });

    describe("players", function () {

        it("should set the initial player to x", function () {
            expect(gameState.turn()).toEqual(players.x);
        });

        it("should set the next player", function () {
            expect(gameState.next()).toEqual(players.o);
        });


    })
});
