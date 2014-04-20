describe("Game", function () {
    var game;
    var players;

    beforeEach(function () {
        players = jasmine.createSpyObj('Players', ['x']);
        game = tictactoe.Game(players);
    });

    describe("Turn", function () {

        it("should be X who always starts", function () {
            expect(game.turn).toEqual(players.x);
        });

    })
});