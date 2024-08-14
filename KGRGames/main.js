import { toggletheme } from './actions/toggleTheme';
import { createFooter } from './src/components/Footer/footer';
import { createHeader } from './src/components/Header/header'
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

/* SwitchButton();
const switchButton = document.querySelector("#switch")
const fullpage = document.querySelector("body");
const footer = document.querySelector("footer");
const header = document.querySelector("header");
const section = document.querySelector("section");
switchButton.addEventListener("click", () => toggletheme(fullpage));
//switchButton.addEventListener("click", () => toggletheme(footer));
switchButton.addEventListener("click", () => toggletheme(header));
switchButton.addEventListener("click", () => toggletheme(section));
switchButton.addEventListener("click", () => toggletheme(divApp)); */