describe('Grid', function () {
    var grid;

    var p1;
    var p2;


    beforeEach(function () {
        grid = tictactoe.Grid();
        p1 = jasmine.createSpy('p1');
        p2 = jasmine.createSpy('p2');

    })

    it('should initialise all the cells with null', function () {
        expect(grid.getCell(0)).toEqual(null);
    });


    it('should set the grid value for a player', function () {
        var playerOne = jasmine.createSpyObj('player', ['xo']);
        playerOne.xo.and.returnValue = 'X';

        grid.setCell(0, playerOne);

        expect(grid.getCell(0)).toEqual(playerOne);
    });

    describe('Winner', function () {
        it('should return if the first row is the same player', function () {
            grid.setCell(0, p1);
            grid.setCell(3, p2);
            grid.setCell(1, p1);
            grid.setCell(4, p2);
            expect(grid.winner()).toEqual(null);
            grid.setCell(2, p1);
            expect(grid.winner()).toEqual(p1);
        });
        it('should return if the second row is the same player', function () {
            grid.setCell(0, p1);
            expect(grid.winner()).toEqual(null);
            grid.setCell(3, p2);
            grid.setCell(1, p1);
            grid.setCell(4, p2);
            grid.setCell(6, p1);
            grid.setCell(5, p2);
            expect(grid.winner()).toEqual(p2);
        });

    });


});