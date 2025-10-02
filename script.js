let humanScore = 0;
let computerScore = 0;

const RockPaperScissors = {
    rock: "rock",
    scissors: "scissors",
    paper: "paper"
}

function getComputerChoice() {
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

function getHumanChoice() {
    const humanChoice = prompt("Rock, scissors, paper!")?.toLowerCase();
    if (Object.values(RockPaperScissors).includes(humanChoice)) return humanChoice;
}