import("./ahorcado.css");
import { divApp } from "../../../main";
import { startGame } from "./ahorcadoApp";

export const ahorcadoPage = () => {
  divApp.innerHTML = "";

  //Seccion
  const hangmanSection = document.createElement("section");
  hangmanSection.className = "hangmanSection";
  divApp.appendChild(hangmanSection);

  //Titulo de seccion
  const sectionTitlle = document.createElement("h1");
  sectionTitlle.classList = "section-tittle";
  sectionTitlle.innerText = "Hangman Game";
  hangmanSection.appendChild(sectionTitlle);

  //Cuerpo de la seccion
  const bodySection = document.createElement("div");
  bodySection.className = "bodySectionHangman";
  bodySection.id = "body-section-hangman";
  hangmanSection.appendChild(bodySection);

  const bodyGame = document.createElement("div");
  bodyGame.className = "bodyGameHangman";
  bodyGame.id = "body-game-hangman";
  bodySection.appendChild(bodyGame);

  //contenedor del Sacore
  const scoreDiv = document.createElement("div");
  scoreDiv.className = "score";
  scoreDiv.id = "score";
  bodySection.appendChild(scoreDiv);

  //Contenedor de palabra
  const palabraSecretaDiv = document.createElement("div");
  palabraSecretaDiv.classNamee = "secret-word";
  palabraSecretaDiv.id = "secret-word";
  bodyGame.appendChild(palabraSecretaDiv);

  //Letra incorrecta
  const letrasIncorrectasDiv = document.createElement("div");
  letrasIncorrectasDiv.id = "incorrect-letters";
  letrasIncorrectasDiv.className = "incorrect-letters";
  bodyGame.appendChild(letrasIncorrectasDiv);

  const mensajeDiv = document.createElement("div");
  mensajeDiv.className = "message";
  mensajeDiv.id = "message";
  bodyGame.appendChild(mensajeDiv);

  const botonReiniciar = document.createElement("button");
  botonReiniciar.className = "restart";
  botonReiniciar.id = "restart";
  botonReiniciar.textContent = "Reiniciar";
  botonReiniciar.addEventListener("click", startGame);
  bodyGame.appendChild(botonReiniciar);

  startGame();

}