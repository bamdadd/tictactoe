describe("GameState", function () {
    var gameState;
    var players;
    var player;

    beforeEach(function () {
        players = jasmine.createSpyObj('players', ['x', 'o']);
        player = jasmine.createSpy('player');
        gameState = tictactoe.GameState(players, player);
    });

    describe('first player', function () {
        var firstPlayer;
        beforeEach(function(){
           firstPlayer = gameState.join();
        });
        it('should initialise the first player', function () {
            expect(firstPlayer instanceof tictactoe.Player).toBeTruthy;
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
