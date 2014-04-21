describe("Game", function () {
    var game;
    var gameState;

    beforeEach(function () {
       gameState = jasmine.createSpyObj('gameState', ['turn', 'next']);
    });

    describe("Turn", function () {

        it("should be X who always starts", function () {
            gameState.turn.and.returnValue('x');

            game = tictactoe.Game(gameState);

            expect(game.turn()).toEqual('x');
        });

        it("should set next player after each play", function () {
            gameState.turn.and.returnValue('x');
            gameState.next.and.returnValue('o');

            game = tictactoe.Game(gameState);
            var nextPlayer =game.play();

            expect(gameState.next).toHaveBeenCalled();
            expect(nextPlayer).toEqual('o');
        });


    })
});
