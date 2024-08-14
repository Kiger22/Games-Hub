import { divApp } from "../../../main";
import("./tresEnRaya.css");

export const tresEnRayaPage = () => {
  divApp.innerHTML = "";

  const tresEnRayaSection = document.createElement("section");
  tresEnRayaSection.classList = "tresEnRaya-Section";
  divApp.appendChild(tresEnRayaSection);

  const sectionTitlle = document.createElement("h1");
  sectionTitlle.classList = "section-tittle";
  sectionTitlle.innerText = "Tres en Raya";
  tresEnRayaSection.appendChild(sectionTitlle);

  const bodySection = document.createElement("div");
  bodySection.className = "bodySection";
  bodySection.id = "body-section";
  tresEnRayaSection.appendChild(bodySection);

  const gridContainer = document.createElement("div");
  gridContainer.className = "grid";
  gridContainer.id = "grid";
  bodySection.appendChild(gridContainer);

  const aside = document.createElement("aside");
  aside.classList = "aside";
  bodySection.appendChild(aside);

  const currentPlayerHeading = document.createElement("h4");
  currentPlayerHeading.className = "shift"
  currentPlayerHeading.innerHTML = 'TURNO:<br><br>Jugador <span id="current-player">1</span>';
  aside.appendChild(currentPlayerHeading);

  const resultHeading = document.createElement("h4");
  resultHeading.id = "result";
  aside.appendChild(resultHeading);

  const scoreContainer = document.createElement("div");
  scoreContainer.className = "score-container"
  scoreContainer.innerHTML = `
        <h2>Scores</h2>
        <p>Player 1: <span id="player1-score">0</span></p>
        <p>Player 2: <span id="player2-score">0</span></p>
    `;
  aside.appendChild(scoreContainer);

  const resetButton = document.createElement("button");
  resetButton.textContent = "Volver a jugar";
  resetButton.classList = "button";
  resetButton.style.display = "none";
  resetButton.addEventListener("click", () => {
    board.fill("");
    document.querySelectorAll(".cell").forEach(cell => {
      cell.textContent = "";
      cell.classList.remove("taken", "x", "o");
    });
    resultHeading.textContent = "";
    currentPlayer = "X";
    document.querySelector("#current-player").textContent = "1";
    gameActive = true;
    resetButton.style.display = "none";
  });
  scoreContainer.appendChild(resetButton);

  let currentPlayer = "X";
  let gameActive = true;
  const board = ["", "", "", "", "", "", "", "", ""];

  let player1Score = parseInt(localStorage.getItem("player1Score")) || 0;
  let player2Score = parseInt(localStorage.getItem("player2Score")) || 0;

  document.querySelector("#player1-score").textContent = player1Score;
  document.querySelector("#player2-score").textContent = player2Score;


  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    gridContainer.appendChild(cell);
  }

  gridContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("cell") && gameActive) {
      const index = e.target.dataset.index;

      if (board[index] === "") {
        board[index] = currentPlayer;
        e.target.textContent = currentPlayer;
        e.target.classList.add("taken");
        e.target.classList.add(currentPlayer.toLowerCase());
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.querySelector("#current-player").textContent = currentPlayer === 'X' ? '1' : '2';
      }
    }
  });

  const checkWinner = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        const winningPlayer = currentPlayer === 'X' ? '1' : '2';
        resultHeading.textContent = `Jugador ${winningPlayer}
         ha ganado!!!`;
        if (winningPlayer === "1") {
          player1Score++;
          document.querySelector("#player1-score").textContent = player1Score;
          localStorage.setItem("player1Score", player1Score);
        } else {
          player2Score++;
          document.querySelector("#player2-score").textContent = player2Score;
          localStorage.setItem("player2Score", player2Score);
        }
        gameActive = false;
        resetButton.style.display = "block";
        return;
      }
    }

    if (!board.includes('')) {
      document.getElementById('result').textContent = 'Esto esw un Empate!';
      gameActive = false;
      resetButton.style.display = "block";
    }
  }
};



