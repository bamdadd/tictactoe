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


});