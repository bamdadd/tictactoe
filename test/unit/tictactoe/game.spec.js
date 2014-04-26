describe("Game", function () {
    var game;
    var gameState;

    beforeEach(function () {
        gameState = jasmine.createSpyObj('gameState', ['turn', 'next', 'player1', 'join', 'play', 'haveWinner', 'winner']);
    });


    describe('Join', function () {
        it('should join the first player as X', function () {

            game = tictactoe.Game(gameState);

            game.join();
            expect(gameState.join).toHaveBeenCalled;
        });
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
            var nextPlayer = game.play(1);

            expect(gameState.next).toHaveBeenCalled();
            expect(nextPlayer).toEqual('o');
        });


    })

    describe('play', function () {
        it('should delegate play to gameState', function () {
            game = tictactoe.Game(gameState);
            game.play(1);
            expect(gameState.play).toHaveBeenCalledWith(1);
        });

    });

    describe('Winner', function () {
        beforeEach(function () {
            gameState.winner.and.returnValue(null);
            game = tictactoe.Game(gameState);

        });
        it('should not have a winner when the game starts', function () {
            expect(game.haveWinner()).toBeFalsy();
        });

        it('should set the winner to null when there is no winner', function () {
            expect(game.winner()).toBeNull();
        })

        it('should delegate to gameState to find haveWinner', function(){
            game.haveWinner();
            expect(gameState.haveWinner).toHaveBeenCalled();
        });

        it('should delegate to gameState to find winner', function(){
            game.winner();
            expect(gameState.winner).toHaveBeenCalled();
        });
    });
});
