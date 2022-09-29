//the code

type State = { rolls: number[] }

const initialState = {rolls: []}

export const createGame = (state: State = initialState) => Object.freeze({
    roll: (pinsKnockedDown: number) => roll(state, pinsKnockedDown),
    score: () => score(state)
});

const roll = (state: State, pinsKnockedDown: number) => {
    const rolls = [...state.rolls, pinsKnockedDown]
    console.log(rolls)
    return createGame({rolls});
};

const score = ({rolls}: State) => {
    let score = 0;
    let firstInFrame = 0;

    for (let frame = 0; frame < 10; frame++) {
        if (isStrike(rolls, firstInFrame)) {
            score += 10 + nextTwoBallsForStrike(rolls, firstInFrame)
            firstInFrame++;
        }else if (isSpare(rolls, firstInFrame)) { //Spare
            score += 10 + nextBallForSpare(rolls, firstInFrame)
            firstInFrame += 2;
        } else {
            score += ballsInFrame(rolls, firstInFrame)
            firstInFrame += 2;
        }

    }

    return score;
};

const isSpare = (rolls: number[], rollIndex: number) => {
    return rolls[rollIndex] + rolls[rollIndex + 1] == 10;
}

function isStrike(rolls: number[], firstInFrame: number) {
    return rolls[firstInFrame] == 10;
}

function nextTwoBallsForStrike(rolls: number[], firstInFrame: number) {
    return rolls[firstInFrame + 1] + rolls[firstInFrame + 2];
}

function nextBallForSpare(rolls: number[], firstInFrame: number) {
    return rolls[firstInFrame + 2];
}

function ballsInFrame(rolls: number[], firstInFrame: number) {
    return rolls[firstInFrame] + rolls[firstInFrame + 1];
}

export type Game = ReturnType<typeof createGame>
