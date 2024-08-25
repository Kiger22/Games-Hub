import { toggletheme } from './actions/toggleTheme';
import { createFooter } from './src/components/Footer/footer';
import { createHeader } from './src/components/Header/header';
import { createLoginForm } from './src/components/LoginForm/loginForm';
import { SwitchButton } from './src/components/SwitchButton/switchButton';
import { footerLogo, menuFooter, socialLinks } from './src/data/footer';
import { heaterLogo, menuItemsHeaderI } from './src/data/header'
import { heroPage } from './src/pages/hero/hero';
import { snakePage } from './src/pages/snake/snakePage';
import { tresEnRayaPage } from './src/pages/tresEnRaya/tresEnRaya';
import './style.css'

export const divApp = document.querySelector("#app");

createHeader(heaterLogo, menuItemsHeaderI);

heroPage();

createFooter(footerLogo, menuFooter, socialLinks);

SwitchButton();
const switchButton = document.querySelector("#switch");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const fullPage = document.querySelector("body");
switchButton.addEventListener("click", () => toggletheme(header));
switchButton.addEventListener("click", () => toggletheme(footer));
switchButton.addEventListener("click", () => toggletheme(divApp));
switchButton.addEventListener("click", () => toggletheme(fullPage));