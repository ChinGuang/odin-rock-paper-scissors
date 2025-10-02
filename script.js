function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
        default:
            return getComputerChoice();
    }
}