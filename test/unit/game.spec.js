describe("Game", function () {
    var game;
    var players;

    beforeEach(function () {
       players = jasmine.createSpyObj('players', ['x','o','next']);
    });

    describe("Turn", function () {

        it("should be X who always starts", function () {
            game = tictactoe.Game(players);
            expect(game.turn).toEqual(players.x);
        });

        it("should set next player after each play", function () {
            players.next.and.returnValue(players.o);
            game = tictactoe.Game(players);
            game.play();
            expect(players.next).toHaveBeenCalled();
            expect(players.next()).toEqual(players.o);
        });

        it("should set next player after each play", function () {
            game = tictactoe.Game(players);
            game.play();
            game.play();
            expect(players.next.calls.count()).toEqual(2);
        });


    })
});
