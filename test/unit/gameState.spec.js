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

//        it("should set next player after each play", function () {
//            gameState.turn.and.returnValue('x');
//            gameState.next.and.returnValue('o');
//
//            game = tictactoe.Game(gameState);
//            var nextPlayer =game.play();
//
//            expect(gameState.next).toHaveBeenCalled();
//            expect(nextPlayer).toEqual('o');
//        });


    })
});
