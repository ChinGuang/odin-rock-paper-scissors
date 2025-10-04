import { Display } from "./display.js";
import { getComputerChoice, getScore, playRound, RockPaperScissors } from "./system.js";

const rockButton = document.querySelector("#rock");
const scissorsButton = document.querySelector('#scissors');
const paperButton = document.querySelector('#paper');

const GAME_OVER_SCORE = 5;
let isGameOver = false;

function handleRPSClick(choice) {
    if (!isGameOver) {
        playRound(choice, getComputerChoice());
        const { humanScore, computerScore } = getScore();
        if (humanScore >= GAME_OVER_SCORE || computerScore >= GAME_OVER_SCORE) {
            isGameOver = true;
            Display.createResultText(humanScore > computerScore ? `Human is the winner` : `CPU is the winner`)
        }
    }
}

rockButton.addEventListener('click', () => handleRPSClick(RockPaperScissors.rock));
scissorsButton.addEventListener('click', () => handleRPSClick(RockPaperScissors.scissors));
paperButton.addEventListener('click', () => handleRPSClick(RockPaperScissors.paper));