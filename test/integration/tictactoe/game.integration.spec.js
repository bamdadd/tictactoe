describe('Game', function(){
    var game;
    var gameState;
    var players;
    var playerOne;
    var playerTwo;
    beforeEach(function(){
        players = tictactoe.Players();
        playerOne = tictactoe.Player(players);
        playerTwo = tictactoe.Player(players);
        gameState = tictactoe.GameState(players,playerOne, playerTwo);
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

    it('should set the turn to x when it starts', function(){
        game.join();
        game.join();
        expect(game.turn()).toEqual(players.x);
    }) ;


    it('should set the turn to o after x plays', function(){
        game.join();
        game.join();
        game.play();
        expect(game.turn()).toEqual(players.o);
    }) ;


});