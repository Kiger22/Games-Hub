import { createKeyboard } from "../../components/TecladoVirtual/teclado";
import { WORDS } from "../../data/ahorcadoWords";

const words = WORDS;
const maxAttempts = 6;
let secretWord = "";
let attempts = 0;
let correctLetters = [];
let incorrectLetters = [];
let wins = localStorage.getItem("wins") ? parseInt(localStorage.getItem("wins")) : 0;
let losses = localStorage.getItem("losses") ? parseInt(localStorage.getItem("losses")) : 0;

let keyboard;

// Actualizar Scores
const updateScoreDisplay = () => {
  document.querySelector("#score").innerHTML = `<p>Victorias: ${wins}</p><p>Derrotas: ${losses}</p>`;

};

// Guardar Scores
const saveScores = () => {
  localStorage.setItem("wins", wins);
  localStorage.setItem("losses", losses);
};

// Selecciona una palabra aleatoria del array
const selectWord = () => words[Math.floor(Math.random() * words.length)];

// Inicia/Reinicia el juego
export const startGame = () => {
  secretWord = selectWord();
  attempts = 0;
  correctLetters = [];
  incorrectLetters = [];
  updateScoreDisplay();

  // Limpiar elementos previos
  document.querySelector("#secret-word").innerHTML = "";
  document.querySelector("#incorrect-letters").textContent = "";
  document.querySelector("#message").textContent = "";

  updateScoreDisplay();
  updateSecretWord();

  const keyboardHandlers = {};
  if (keyboardHandlers.resetKeyboard) {
    keyboardHandlers.resetKeyboard();
  } else {
    createKeyboard(handleKeyPress, keyboardHandlers);
  }

  window.addEventListener("keypress", handleKeyPress);
};

// Actualiza la visualización de la palabra secreta
const updateSecretWord = () => {
  const displayedWord = secretWord.split("").map(letter =>
    correctLetters.includes(letter) ? letter : "_"
  ).join(" ");

  document.querySelector("#secret-word").textContent = displayedWord;

  if (!displayedWord.includes("_")) {
    document.querySelector("#message").textContent = "Felicidades, has ganado!!";

    wins++;
    saveScores();
    endGame();
  }
};

// Maneja las teclas presionadas
const handleKeyPress = (e) => {
  const letter = e.key.toLowerCase();

  if (correctLetters.includes(letter) || incorrectLetters.includes(letter)) {
    return;
  }

  if (secretWord.includes(letter)) {
    correctLetters.push(letter);
    updateSecretWord();
  } else {
    incorrectLetters.push(letter);
    attempts++;
    document.querySelector("#incorrect-letters").textContent = `Letras incorrectas: ${incorrectLetters.join(", ")}`;

    if (attempts >= maxAttempts) {
      document.querySelector("#message").textContent = `Has perdido, la palabra era: "${secretWord}".`;

      losses++;
      saveScores();
      endGame();
    }
  }
};

// Finaliza el juego
const endGame = () => {
  window.removeEventListener("keypress", handleKeyPress);
};