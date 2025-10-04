import { Display } from "./display";

let humanScore = 0;
let computerScore = 0;

export const RockPaperScissors = {
    rock: "rock",
    scissors: "scissors",
    paper: "paper"
}

const RockPaperScissorsResultType = {
    WIN: "win",
    TIE: "tie",
    LOSE: "lose",
}

const RockPaperScissorsWinningRule = {
    [RockPaperScissors.rock]: {
        [RockPaperScissors.rock]: RockPaperScissorsResultType.TIE,
        [RockPaperScissors.scissors]: RockPaperScissorsResultType.WIN,
        [RockPaperScissors.paper]: RockPaperScissorsResultType.LOSE,
    },
    [RockPaperScissors.scissors]: {
        [RockPaperScissors.rock]: RockPaperScissorsResultType.LOSE,
        [RockPaperScissors.scissors]: RockPaperScissorsResultType.TIE,
        [RockPaperScissors.paper]: RockPaperScissorsResultType.WIN,
    },
    [RockPaperScissors.paper]: {
        [RockPaperScissors.rock]: RockPaperScissorsResultType.WIN,
        [RockPaperScissors.scissors]: RockPaperScissorsResultType.LOSE,
        [RockPaperScissors.paper]: RockPaperScissorsResultType.TIE,
    }
}



export function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return RockPaperScissors.rock;
        case 1:
            return RockPaperScissors.scissors;
        case 2:
            return RockPaperScissors.paper;
        default:
            return getComputerChoice();
    }
}

export function getHumanChoice() {
    const humanChoice = prompt("Rock, scissors, paper!")?.toLowerCase();
    if (Object.values(RockPaperScissors).includes(humanChoice)) return humanChoice;
}

function toCapitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function playRound(humanChoice, computerChoice) {
    const result = RockPaperScissorsWinningRule[humanChoice]?.[computerChoice];
    switch (result) {
        case RockPaperScissorsResultType.WIN:
            Display.createResultText(`You win! ${toCapitalize(humanChoice)} beats ${toCapitalize(computerChoice)}`);
            humanScore++;
            break;
        case RockPaperScissorsResultType.TIE:
            Display.createResultText(`It's a tie`);
            break;
        case RockPaperScissorsResultType.LOSE:
            Display.createResultText(`You lose! ${toCapitalize(computerChoice)} beats ${toCapitalize(humanChoice)}`);
            computerScore++;
            break;
        default:
            throw new Error(`Unexpected value: ${result}`);
    }
}