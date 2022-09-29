import {BowlingGame} from "./bowling";


describe('A bowling game', () => {

    let game: BowlingGame
    beforeEach(() => {
        game = new BowlingGame()
    });

    /*it('roll a ball where the number of pins down is 0', function () {
        let numberOfPinsDown: number = 0

        expect(game.roll(0)).toBe(true)
    });*/

    it('should roll a ball', function () {
        game.roll(1)
    });

    it('should play a game where all the rolls are 0', function () {
        for (let i = 0; i < 20; i++) {
            game.roll(0)
        }
        expect(game.score()).toBe(0);
    });

    it('should play a game where the all the rolls are 1', function () {
        for (let i = 0; i < 20; i++) {
            game.roll(1)
        }
        expect(game.score()).toBe(20);
    });

    it('should make a spare', function () {
        game.roll(5);
        game.roll(5);
        game.roll(5);
        for (let i = 0; i < 17; i++) {
            game.roll(0);
        }
        expect(game.score()).toBe(20)
    });

    it('should make a strike', function () {
        game.roll(10)
        game.roll(1)
        game.roll(1)
        for (let i = 0; i < 16; i++) {
            game.roll(0);
        }
        expect(game.score()).toBe(14)
    });

});
