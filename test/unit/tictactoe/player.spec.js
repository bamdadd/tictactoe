describe('Player', function(){
    var player;
    var players;

    beforeEach(function(){
        players = jasmine.createSpyObj('players', ['x','o']);
        player = tictactoe.Player(players);

    })

    it('should make a player x', function(){
        player.makeX();
        expect(player.xo).toEqual(players.x);
    }) ;

    it('should make a player o', function(){
        player.makeO();
        expect(player.xo).toEqual(players.o);
    }) ;

    it('should check if a player is X', function(){
       expect(player.isX()).toBeFalsy;
       player.makeX();
       expect(player.isX()).toBeTruthy;
    });


});