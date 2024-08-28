import("./hero.css");
import { divApp } from "../../../main"
import { GAMES } from "../../data/games";

export const createHero = () => {
  divApp.innerHTML = "";
  heroPage();
}

export const heroPage = () => {

  //Sección
  const heroSection = document.createElement("section");
  heroSection.className = "heroSection";
  divApp.appendChild(heroSection);

  //Titulo de sección
  const sectionTitlle = document.createElement("h1");
  sectionTitlle.classList = "section-tittle";
  sectionTitlle.innerText = "Game Hub";
  heroSection.appendChild(sectionTitlle);

  //Cuerpo de la sección
  const bodySection = document.createElement("div");
  bodySection.className = "bodySectionHero";
  bodySection.id = "body-section-hero";
  heroSection.appendChild(bodySection);

  //Cartas de juegos
  GAMES.forEach(game => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");
    gameCard.innerHTML = `
        <img src="${game.imageUrl}" alt="${game.title}">
        <h3>${game.title}</h3>
        <p>${game.description}</p>
    `;
    gameCard.addEventListener('click', game.openPage);
    bodySection.appendChild(gameCard);
  })

}
