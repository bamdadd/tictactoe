describe('Game', function(){
    var game;
    var gameState;
    var players;
    var playerOne;
    var playerTwo;
    var grid;

    beforeEach(function(){
        players = tictactoe.Players();
        playerOne = tictactoe.Player(players);
        playerTwo = tictactoe.Player(players);
        grid = tictactoe.Grid();
        gameState = tictactoe.GameState(playerOne, playerTwo, grid);
        game = tictactoe.Game(gameState);
    })

    it('should let the players join the game', function(){
        expect(playerOne.isX()).toBeFalsy;
        expect(playerTwo.isO()).toBeFalsy;
        game.join();
        expect(playerOne.isX()).toBeTruthy;
        game.join();
        expect(playerTwo.isO()).toBeTruthy;
    }) ;

    describe('after both joined', function(){
        beforeEach(function(){
            game.join();
            game.join();
        });

        it('should set the turn to x when it starts', function () {
            expect(game.turn()).toEqual(playerOne);
        });

        it('should set the turn to o after x plays', function(){
            game.play(1);
            expect(game.turn()).toEqual(playerTwo);
        }) ;

        it('should play with a grid number', function(){
            game.play(1);
            expect(grid.getCell(1)).toEqual(playerOne);
            game.play(2);
            expect(grid.getCell(2)).toEqual(playerTwo);

        });

    })






});