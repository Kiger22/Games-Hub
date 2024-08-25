import { loginForm } from "../../actions/loginModal";
import { pauseGame } from "../../actions/pauseGame";
import { createHero } from "../pages/hero/hero";

export const meniItemsMenuToggle = [
  { href: '#', imgSrc: "./assets/menu.svg", alt: 'Menu' }
];

export const menuItemsHeaderI = [
  {
    icon: "./assets/shop (2).png", text: "Home", href: createHero,
  },
  {
    icon: "./assets/user (2).png", text: "Login", href: loginForm,
  },
  {
    icon: "./assets/pause (2).png", text: "Pause", href: pauseGame,
  }
];

export const menuItemsHeaderII = [

];

export const heaterLogo = "./assets/logo-solo-claro.png"
