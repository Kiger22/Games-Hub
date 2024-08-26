import { divApp } from "../../../main";
import "./loginForm.css"

export const createLoginForm = () => {

  divApp.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("container");
  divApp.appendChild(container);

  const form = document.createElement("form");

  const welcomeText = document.createElement("p");
  welcomeText.textContent = "Hola!!";
  form.appendChild(welcomeText);

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Email";
  form.appendChild(emailInput);

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "Contraseña";
  form.appendChild(passwordInput);

  const signInButton = document.createElement("button");
  signInButton.className = "button";
  signInButton.textContent = "Entrar";
  form.appendChild(signInButton);

  const forgotPasswordLink = document.createElement("a");
  forgotPasswordLink.href = "#";
  forgotPasswordLink.textContent = "He olvidado la contraeña?";
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

/* export const createLoginForm = () => {
  divApp.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  document.body.appendChild(wrapper);

  const cardSwitch = document.createElement("div");
  cardSwitch.classList.add("card-switch");
  wrapper.appendChild(cardSwitch);

  const label = document.createElement("label");
  label.classList.add("switch");
  cardSwitch.appendChild(label);

  const inputToggle = document.createElement("input");
  inputToggle.type = "checkbox";
  inputToggle.className = "toggle";
  label.appendChild(inputToggle);

  const spanSlider = document.createElement("span");
  spanSlider.className = "slider";
  label.appendChild(spanSlider);

  const spanCardSide = document.createElement("span");
  spanCardSide.className = "card-side";
  label.appendChild(spanCardSide);

  const flipCardInner = document.createElement("div");
  flipCardInner.className = "flip-card__inner";
  label.appendChild(flipCardInner);

  const flipCardFront = document.createElement("div");
  flipCardFront.className = "flip-card__fronts";
  flipCardInner.appendChild(flipCardFront);

  const titleFront = document.createElement("div");
  titleFront.className = "title";
  titleFront.textContent = "Entar";
  flipCardFront.appendChild(titleFront);

  const formFront = document.createElement("form");
  formFront.className = "flip-card__form";
  flipCardFront.appendChild(formFront);

  const emailInputFront = document.createElement("input");
  emailInputFront.className = "flip-card__input";
  emailInputFront.name = "email";
  emailInputFront.placeholder = "Email";
  emailInputFront.type = "type";
  formFront.appendChild(emailInputFront);

  const passwordInputFront = document.createElement("input");
  passwordInputFront.className = "flip-card__input";
  passwordInputFront.name = "name";
  passwordInputFront.placeholder = "Contraseña";
  passwordInputFront.type = "password";
  formFront.appendChild(passwordInputFront);

  const btnFront = document.createElement("button");
  btnFront.className = "flip-card__btn";
  btnFront.textContent = "Ok";
  formFront.appendChild(btnFront);

  const flipCardBack = document.createElement("div");
  flipCardBack.className = "flip-card__back";
  flipCardInner.appendChild(flipCardBack);

  const titleBack = document.createElement("div");
  titleBack.className = "title";
  titleBack.textContent = "Registrarse";
  flipCardBack.appendChild(titleBack);

  const formBack = document.createElement("form");
  formBack.className = "flip-card__form";
  flipCardBack.appendChild(formBack);

  const nameInputBack = document.createElement("input");
  nameInputBack.className = "flip-card__input";
  nameInputBack.placeholder = "Nombre";
  nameInputBack.type = "name";
  formBack.appendChild(nameInputBack);

  const emailInputBack = document.createElement("input");
  emailInputBack.className = "flip-card__input";
  emailInputBack.name = "email";
  emailInputBack.placeholder = "Email";
  emailInputBack.type = "email";
  formBack.appendChild(emailInputBack);

  const passwordInputBack = document.createElement("input");
  passwordInputBack.className = "flip-card__input";
  passwordInputBack.name = "password";
  passwordInputBack.placeholder = "Contraseña";
  passwordInputBack.type = "password";
  formBack.appendChild(passwordInputBack);

  const btnBack = document.createElement("button");
  btnBack.className = "flip-card__btn";
  btnBack.textContent = "Confirmar";
  formBack.appendChild(btnBack);


} */