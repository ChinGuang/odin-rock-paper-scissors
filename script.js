import { getComputerChoice, playRound, RockPaperScissors } from "./system";

const rockButton = document.querySelector("#rock");
const scissorsButton = document.querySelector('#scissors');
const paperButton = document.querySelector('#paper');

function handleRPSClick(choice) {
    playRound(choice, getComputerChoice());
}

rockButton.addEventListener(handleRPSClick(RockPaperScissors.rock));
scissorsButton.addEventListener(handleRPSClick(RockPaperScissors.scissors));
paperButton.addEventListener(handleRPSClick(RockPaperScissors.paper));