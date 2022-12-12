import {Tamagochi} from "../classes/Tamagochi.js";

export const render = (tmg) => {
  const grid = document.querySelector('.grid');

  new Tamagochi(tmg, grid);
}