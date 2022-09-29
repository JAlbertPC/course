import {createGame, Game} from "./bowling"

describe('A bowling game', () => {

    let game: Game

    beforeEach(() => {
        game = createGame()
    })

    // beforeEach handles the initialization of game.
    /*it('should invoke create Game', function () {
        game = createGame();
    });*/

    it('should roll a ball', function () {
        game = game.roll(0);
    });

    //Fill the game with a horrible game where all the rolls are 0
    it('should do a gutter game', function () {
        game = rollMany(game, 20, 0);
        expect(game.score()).toBe(0)
    });

    it('should make a game where all rolls are ones.', function () {
        game = rollMany(game, 20, 1)
        expect(game.score()).toBe(20)
    });

    it('should make a spare', function () {
        game = rollSpare(game);
        game = rollMany(game, 17, 0);
        expect(game.score()).toBe(20);
    });

    it('should make a strike', function () {
        game = rollStrike(game);
        game = rollMany(game, 16, 0);
        expect(game.score()).toBe(14);
    });

});

function rollMany(game: Game, rolls: number, scoreInRolls: number) {
    for (let pins = 0; pins < rolls; pins++) {
        game = game.roll(scoreInRolls);
    }
    return game;
}

function rollSpare(game: Game) {
    game = game.roll(5);
    game = game.roll(5);
    game = game.roll(5);
    return game;
}

function rollStrike(game: Game) {
    game = game.roll(10);
    game = game.roll(1);
    game = game.roll(1);
    return game;
}

