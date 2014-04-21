describe('Players', function(){
    var players;

    beforeEach(function(){
        players = tictactoe.Players();
    })

   it('should know about x and o', function(){
       expect(players.x).toEqual('X');
       expect(players.o).toEqual('O');
   }) ;


});