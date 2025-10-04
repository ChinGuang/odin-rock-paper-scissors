const displayDiv = document.querySelector("#display");

function createResultText(str) {
    const newSpan = document.createElement("span");
    newSpan.innerText = str;
    displayDiv.appendChild(newSpan);
}

export const Display = {
    createResultText,
}