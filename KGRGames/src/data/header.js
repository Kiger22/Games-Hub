
import { createLoginForm } from "../components/LoginForm/loginForm";
import { createHero } from "../pages/hero/hero";

export const menuItemsMenuToggle = [
  { href: '#', imgSrc: "./assets/menu.svg", alt: 'Menu' }
];

export const menuItemsHeaderI = [
  {
    icon: "./assets/user-minus.svg", text: "Login", href: createLoginForm,
  },
  {
    icon: "./assets/icons8-casa.svg", text: "Home", href: createHero,
  },
  {
    icon: "./assets/pause-circle_10436074.svg", text: "Pause", href: createLoginForm,
  }
];

export const menuItemsHeaderII = [

];

export const heaterLogo = "./assets/logo-solo-claro.png"
