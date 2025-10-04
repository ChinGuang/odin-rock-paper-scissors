import { getComputerChoice, playRound, RockPaperScissors } from "./system.js";

const rockButton = document.querySelector("#rock");
const scissorsButton = document.querySelector('#scissors');
const paperButton = document.querySelector('#paper');

function handleRPSClick(choice) {
    playRound(choice, getComputerChoice());
}

rockButton.addEventListener('click', () => handleRPSClick(RockPaperScissors.rock));
scissorsButton.addEventListener('click', () => handleRPSClick(RockPaperScissors.scissors));
paperButton.addEventListener('click', () => handleRPSClick(RockPaperScissors.paper));