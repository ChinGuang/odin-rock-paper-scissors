const displayDiv = document.querySelector("#display");
const humanScoreSpan = document.querySelector('#human-score');
const cpuScoreSpan = document.querySelector('#cpu-score');

function createResultText(str) {
    const newSpan = document.createElement("span");
    newSpan.innerText = str;
    displayDiv.appendChild(newSpan);
}

function setHumanScore(newScore) {
    humanScoreSpan.innerText = newScore;
}

function setCpuScore(newScore) {
    cpuScoreSpan.innerText = newScore;
}

export const Display = {
    createResultText,
    setHumanScore,
    setCpuScore
}