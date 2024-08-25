
import { createLoginForm } from "../components/LoginForm/loginForm";
import { createHero } from "../pages/hero/hero";

export const meniItemsMenuToggle = [
  { href: '#', imgSrc: "./assets/menu.svg", alt: 'Menu' }
];

export const menuItemsHeaderI = [
  {
    icon: "./assets/user (2).png", text: "Login", href: createLoginForm,
  },
  {
    icon: "./assets/shop (2).png", text: "Home", href: createHero,
  },
  {
    icon: "./assets/pause (2).png", text: "Pause", href: "#",
  }
];

export const menuItemsHeaderII = [

];

export const heaterLogo = "./assets/logo-solo-claro.png"
