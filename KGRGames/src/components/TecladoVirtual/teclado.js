import { divApp } from "../../../main";
import "./teclado.css";



export const createKeyboard = (onKeyPressCallback, handlers) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const keys = [];
  const node = document.querySelector(".hangmanSection");

  const keyboardContainer = document.createElement("div");
  keyboardContainer.id = "keyboard";
  node.appendChild(keyboardContainer);

  letters.forEach(letter => {
    const button = document.createElement("button");
    button.classList.add("key");
    button.textContent = letter;
    button.addEventListener("click", () => handleKeyClick(letter));
    keyboardContainer.appendChild(button);
    keys.push(button);
  });

  const handleKeyClick = (letter) => {
    if (onKeyPressCallback) {
      onKeyPressCallback(letter.toLowerCase());
    }
    disableKey(letter);
  };

  const disableKey = (letter) => {
    const button = keys.find(key => key.textContent === letter);
    if (button) {
      button.disabled = true;
      button.classList.add("key-disabled");
    }
  }

  const resetKeyboard = () => {
    keys.forEach(key => {
      key.disabled = false;
      key.classList.remove("key-disabled");
    });
  };

  window.resetKeyboard = resetKeyboard;
};