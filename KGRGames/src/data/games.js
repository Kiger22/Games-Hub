import { ahorcadoPage } from "../pages/ahorcado/ahorcadoPage";
import { snakePage } from "../pages/snake/snakePage";
import { tresEnRayaPage } from "../pages/tresEnRaya/tresEnRaya";

export const GAMES = [
  {
    title: "Tres en Raya",
    description: "El tic-tac-toe de toda la vida",
    imageUrl: "./assets/tic-tac-toe.png",
    openPage: tresEnRayaPage
  },
  {
    title: "Nokia Snake",
    description: "Clasico juego de comer la manzana",
    imageUrl: "./assets/juego-de-baile.png",
    openPage: snakePage
  },
  {
    title: "El Ahorcado",
    description: "Adivina la palabra o muere ahorcado",
    imageUrl: "./assets/juego-del-ahorcado.png",
    openPage: ahorcadoPage
  }
];

