import { createLogin } from "../components/LoginForm/loginForm";
import { createHero } from "../pages/hero/hero";

export const menuItemsMenuToggle = [
  { href: '#', imgSrc: "./assets/menu.svg", alt: 'Menu' }
];

export const menuItemsHeaderI = [
  {
    icon: "./assets/user-minus.svg", text: "Login", href: createLogin, page: createLogin,
  },
  {
    icon: "./assets/icons8-casa.svg", text: "Home", href: createHero, page: createHero,
  },
  {
    icon: "./assets/pause-circle_10436074.svg", text: "Pause", href: "#", page: null,
  }
];

export const menuItemsHeaderII = [

];

export const heaterLogo = "./assets/logo-solo-claro.png"
