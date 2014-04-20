describe('Players', function(){
    var players;
    var gameState;

    beforeEach(function(){
        gameState = jasmine.createSpyObj('GameState', ['turn']);
        players = tictactoe.Players(gameState);
    })

   it('should know about x and o', function(){
       expect(players.x).toEqual('X');
       expect(players.o).toEqual('O');
   }) ;

   it('should provide the next player', function(){
       gameState.turn.and.returnValue(players.x);
       players= tictactoe.Players(gameState);

       var nextPlayer = players.next();

       expect(gameState.turn).toHaveBeenCalled();
       expect(nextPlayer).toEqual(players.o);
   });
});