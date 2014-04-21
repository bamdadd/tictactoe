describe("Game", function () {
    var game;
    var gameState;
    var playerOne;
    var playerTwo;

    beforeEach(function () {
        gameState = jasmine.createSpyObj('gameState', ['turn', 'next', 'player1', 'join']);
        playerOne = jasmine.createSpyObj('playerOne', ['xo']);
        playerTwo = jasmine.createSpyObj('playerTwo', ['xo']);
    });

    describe('Player', function () {
        it('should pass the both players', function () {
            game = tictactoe.Game(gameState, playerOne, playerTwo);

            expect(game.playerOne).toEqual(playerOne);
            expect(game.playerTwo).toEqual(playerTwo);
        })
    });
    describe('Join', function () {
        it('should join the first player as X', function () {

            var playerOne = jasmine.createSpy('PlayerOne');

            gameState.join.and.returnValue(playerOne);

            game = tictactoe.Game(gameState, playerOne, playerTwo);

            var player = game.join();
            expect(gameState.join).toHaveBeenCalled;
            expect(player).toEqual(playerOne);
        });
    });

    describe("Turn", function () {

        it("should be X who always starts", function () {
            gameState.turn.and.returnValue('x');

            game = tictactoe.Game(gameState, playerOne, playerTwo);

            expect(game.turn()).toEqual('x');
        });

        it("should set next player after each play", function () {
            gameState.turn.and.returnValue('x');
            gameState.next.and.returnValue('o');

            game = tictactoe.Game(gameState, playerOne, playerTwo);
            var nextPlayer = game.play();

            expect(gameState.next).toHaveBeenCalled();
            expect(nextPlayer).toEqual('o');
        });


    })
});
