const board = document.querySelector(".board");
const message = document.querySelector(".message");
const restartButton = document.querySelector(".restart");

for (let i = 1; i <= 9; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("cell");
    board.appendChild(newDiv);
}

message.innerText = "Le joueur X commence.";

let currentPlayer = "X";

let gameActive = true;

const cells = document.querySelectorAll(".cell");

function enableCells() {
    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if (cell.innerText === "" && gameActive) {
                cell.innerText = currentPlayer;
                if (checkForWin()) {
                    message.innerText = `Joueur ${currentPlayer} a gagné !`;
                    gameActive = false;
                    disableCells();
                } else if (checkForDraw()) {
                    message.innerText = "Match nul.";
                    gameActive = false;
                    disableCells();
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                    message.innerText = `Au tour du joueur ${currentPlayer}`;
                }
            }
        });
    });
}

function disableCells() {
    cells.forEach(cell => {
        cell.removeEventListener("click", () => {});
    });
}

function checkForWin() {
    const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    return winCombinations.some(array => {
        return array.every(index => cells[index].innerText === currentPlayer);
    });
}

//---utilisation d'un opérateur de propagation "...", permet de transformer la NodeList en un tableau
function checkForDraw() {
    return [...cells].every(cell => cell.innerText !== "");
}

function restartGame() {
    currentPlayer = "X";
    gameActive = true;
    message.innerText = "Le joueur X commence.";
    cells.forEach(cell => cell.innerText = "");
    enableCells();
}

restartButton.addEventListener("click", restartGame);

enableCells();