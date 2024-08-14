import("./snakePage.css")
import { divApp } from "../../../main";
import { playSnake } from "./snakeApp";

export const snakePage = () => {
  divApp.innerHTML = "";

  //Seccion
  const snakeSection = document.createElement("section");
  snakeSection.className = "snakeSection";
  divApp.appendChild(snakeSection);

  //Titulo de seccion
  const sectionTitlle = document.createElement("h1");
  sectionTitlle.classList = "section-tittle";
  sectionTitlle.innerText = "Nokia Snake";
  snakeSection.appendChild(sectionTitlle);

  //Cuerpo de la seccion
  const bodySection = document.createElement("div");
  bodySection.className = "bodySectionSnake";
  bodySection.id = "body-section-snake";
  snakeSection.appendChild(bodySection);

  // Contenedor principal del tablero
  const board = document.createElement("div");
  board.id = "board";
  bodySection.appendChild(board);

  // Información del Juego
  const boardInfo = document.createElement("div");
  boardInfo.className = "boardInfo";
  bodySection.appendChild(boardInfo);

  // cContador de Score
  const scoreContainer = document.createElement("div");
  scoreContainer.innerHTML = 'Puntaje: <div id="scoreBoard"></div>';
  boardInfo.appendChild(scoreContainer);

  // Contenedor de Record
  const maxScoreContainer = document.createElement("div");
  maxScoreContainer.innerHTML = 'Record: <div id="maxScoreBoard"></div>';
  boardInfo.appendChild(maxScoreContainer);

  // Botón start 
  const startButton = document.createElement("button");
  startButton.id = "start-Btn";
  startButton.textContent = "Jugar";
  boardInfo.appendChild(startButton);

  // Contenedor "Game Over"
  const gameOver = document.createElement("div");
  gameOver.id = "gameOver";
  gameOver.textContent = "Has perdido!!!";
  boardInfo.appendChild(gameOver);

  //Funcionalidad del juego
  playSnake();

};
