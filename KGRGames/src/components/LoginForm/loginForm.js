import { divApp } from "../../../main";
import "./loginForm.css"

export const createLoginForm = () => {

  divApp.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("container");
  divApp.appendChild(container);

  const form = document.createElement("form");

  const welcomeText = document.createElement("p");
  welcomeText.textContent = "Welcome";
  form.appendChild(welcomeText);

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Email";
  form.appendChild(emailInput);

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "Password";
  form.appendChild(passwordInput);

  const signInButton = document.createElement("button");
  signInButton.className = "button";
  signInButton.textContent = "Sign in";
  form.appendChild(signInButton);

  const forgotPasswordLink = document.createElement("a");
  forgotPasswordLink.href = "#";
  forgotPasswordLink.textContent = "Forgot Password?";
  form.appendChild(forgotPasswordLink);

  container.appendChild(form);

  const dropsContainer = document.createElement("div");
  dropsContainer.classList.add("drops");
  container.appendChild(dropsContainer);

  for (let i = 1; i <= 5; i++) {
    const drop = document.createElement("div");
    drop.classList.add('drop', `drop-${i}`);
    dropsContainer.appendChild(drop);
  }

}