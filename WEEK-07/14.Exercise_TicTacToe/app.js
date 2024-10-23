const board = document.querySelector(".board");
const message = document.querySelector(".message");
const restartButton = document.querySelector(".restart");

for (let i = 1; i <= 9; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("cell");
    board.appendChild(newDiv);
}

const cells = document.querySelector(".cell");

cells.addEventListener("click", );