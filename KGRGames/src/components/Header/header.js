import { divApp } from "../../../main";
import "./header.css"

export const createHeader = (logoSrc, menuItems, menuItemsII) => {
  const main = document.querySelector("main");
  const header = document.createElement("header");
  header.className = "header";
  document.body.insertBefore(header, divApp);

  // logoSrc
  const logoSection = document.createElement("div");
  logoSection.className = "header-logo";
  const logoImg = document.createElement("img");
  logoImg.src = logoSrc;
  logoSection.appendChild(logoImg);
  header.appendChild(logoSection);

  // menuItems
  const menuSection = document.createElement("nav");
  menuSection.className = "header-menu";
  menuItems.forEach(item => {
    const link = document.createElement("a");
    link.href = item.href;
    if (item.page) {
      link.addEventListener("click", item.page)
    }
    const icon = document.createElement("img");
    icon.src = item.icon;
    link.appendChild(icon);
    menuSection.appendChild(link);
  });

  header.appendChild(menuSection);

  // menuItemsII
  if (menuItemsII) {
    const menuSectionII = document.createElement("nav");
    menuSectionII.className = "header-menu-login";
    menuItemsII.forEach(item => {
      const link = document.createElement("a");
      link.href = item.href;
      link.innerText = item.text;
      menuSectionII.appendChild(link);
    });
    header.appendChild(menuSectionII);
  }

  /* // loginSeccion
  const loginSection = document.createElement("div");
  loginSection.className = "header-login";
  createButton(loginSection, "Iniciar Seccion", OnLogin);
  createButton(loginSection, " Registrarse", OnRegister);

  header.appendChild(loginSection); */
};



