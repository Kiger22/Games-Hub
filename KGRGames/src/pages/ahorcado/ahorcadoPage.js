import("./ahorcado.css");
import { divApp } from "../../../main";
import { startGame } from "./ahorcadoApp";

export const ahorcadoPage = () => {
  divApp.innerHTML = "";

  //Sección
  const hangmanSection = document.createElement("section");
  hangmanSection.className = "hangmanSection";
  divApp.appendChild(hangmanSection);

  //Titulo de sección
  const sectionTitlle = document.createElement("h1");
  sectionTitlle.classList = "section-tittle";
  sectionTitlle.innerText = "Hangman Game";
  hangmanSection.appendChild(sectionTitlle);

  //Cuerpo de la sección
  const bodySection = document.createElement("div");
  bodySection.className = "bodySectionHangman";
  bodySection.id = "body-section-hangman";
  hangmanSection.appendChild(bodySection);

  const bodyGame = document.createElement("div");
  bodyGame.className = "bodyGameHangman";
  bodyGame.id = "body-game-hangman";
  bodySection.appendChild(bodyGame);

  //contenedor del Score
  const scoreDiv = document.createElement("div");
  scoreDiv.className = "score";
  scoreDiv.id = "score";
  bodySection.appendChild(scoreDiv);

  //Contenedor de palabra
  const secretWordDiv = document.createElement("div");
  secretWordDiv.className = "secret-word";
  secretWordDiv.id = "secret-word";
  bodyGame.appendChild(secretWordDiv);

  //Letra incorrecta
  const incorrectLetterDiv = document.createElement("div");
  incorrectLetterDiv.id = "incorrect-letters";
  incorrectLetterDiv.className = "incorrect-letters";
  bodyGame.appendChild(incorrectLetterDiv);

  const messageDiv = document.createElement("div");
  messageDiv.className = "message";
  messageDiv.id = "message";
  bodyGame.appendChild(messageDiv);

  const restartButton = document.createElement("button");
  restartButton.className = "restart";
  restartButton.id = "restart";
  restartButton.textContent = "Reiniciar";
  restartButton.addEventListener("click", startGame);
  bodyGame.appendChild(restartButton);

  startGame();

}