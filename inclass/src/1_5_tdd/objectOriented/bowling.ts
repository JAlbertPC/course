export class BowlingGame {

    private rolls: number[];
    private finalScore: number;

    constructor() {
        this.rolls = [];
        this.finalScore = 0;
    }

    roll(pinsKnockedDown) {
        this.rolls.push(pinsKnockedDown);
    }


    score() {
        this.calculateScore();
        return this.finalScore;
    }

    private calculateScore() {
        const rolls = this.rolls;
        let firstInFrame = 0;
        let score = 0;
        for (let frame = 0; frame < 10; frame++) {

            if (isStrike(rolls, firstInFrame)) {
                score += 10 + nextTwoBallsForStrike(rolls, firstInFrame, score);
                firstInFrame++;
            } else if (isSpare(rolls, firstInFrame)) {
                score += 10 + nextBallForSpare(rolls, firstInFrame);
                firstInFrame += 2;
            } else {
                score = ballsInFrame(score, rolls, firstInFrame);
                firstInFrame += 2;
            }
        }
        this.finalScore = score;
    }
}

function isStrike(rolls: any[], firstInFrame: number) {
    return rolls[firstInFrame] == 10;
}

function isSpare(rolls: any[], firstInFrame: number) {
    return rolls[firstInFrame] + rolls[firstInFrame + 1] == 10;
}

function nextTwoBallsForStrike(rolls: any[], firstInFrame: number, finalScore: number) {
    return rolls[firstInFrame + 1] + rolls[finalScore + 2];
}

function nextBallForSpare(rolls: any[], firstInFrame: number) {
    return rolls[firstInFrame + 2];
}

function ballsInFrame(finalScore: number, rolls: any[], firstInFrame: number) {
    finalScore += rolls[firstInFrame] + rolls[firstInFrame + 1];
    return finalScore;
}