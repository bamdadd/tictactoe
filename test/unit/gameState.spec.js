describe("GameState", function () {
    var gameState;
    var players;

    beforeEach(function () {
        players = jasmine.createSpyObj('players', ['x', 'o']);
        gameState= tictactoe.GameState(players);
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
