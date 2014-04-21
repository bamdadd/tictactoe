describe('Grid', function(){
    var grid;

    beforeEach(function(){
        grid = tictactoe.Grid();

    })

    it('should initialise all the cells with null', function(){
        expect(grid.getCell(0)).toEqual(null);
    }) ;


    it('should set the grid value for a player', function(){
        var playerOne = jasmine.createSpyObj('player', ['xo']);
        playerOne.xo.and.returnValue='X';

        grid.setCell(0, playerOne);

        expect(grid.getCell(0)).toEqual(playerOne);
    }) ;



});