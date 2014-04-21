describe("GameState", function () {
    var gameState;
    var players;
    var playerOne;
    var playerTwo;

    beforeEach(function () {
        players = jasmine.createSpyObj('players', ['x', 'o']);
        playerOne = jasmine.createSpyObj('playerOne', ['makeX','isX']);
        playerTwo = jasmine.createSpyObj('playerTwo', ['makeO', 'isO']);
        gameState = tictactoe.GameState(players, playerOne, playerTwo);
    });

    describe('first player', function () {

        beforeEach(function(){
           playerOne.isX.and.returnValue(false);
           gameState.join();
        });

        it('should make the first player X', function () {
           expect(playerOne.makeX).toHaveBeenCalled();
        });

    });

    describe('second player', function () {

        beforeEach(function(){
            playerOne.isX.and.returnValue(true);
            gameState.join();
        });

        it('should make the second player O', function () {
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
