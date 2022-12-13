import {Tamagochi} from "../classes/Tamagochi.js";
import {tamagochiTemplate} from "../templates/tamagochiTemplate.js";

export const render = (tmg) => {
  const grid = document.querySelector('.grid');
  const uniqueId = Math.floor(Math.random() * 1000);

  grid.insertAdjacentHTML('beforeend', tamagochiTemplate(uniqueId));

  const createdElement = grid.querySelector(`[data-tamagochi="${uniqueId}"]`);

  const tamagochi = new Tamagochi(tmg, createdElement);

  tamagochi.render();
  tamagochi.startLifeCycle();
}