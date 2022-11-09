import {cardTemplate} from "../templates/cardTemplate.js";
import {initCards} from "./initCards.js";
import {getTodos} from "../selectors/getTodos.js";

export const renderTodos = () => {
  const todosWrap = document.querySelector('.section__cards');
  const renderType = localStorage.renderType;

  let todosData = getTodos();

  todosWrap.innerHTML = '';

  if (todosData !== null) {
    switch (renderType) {
      case "dates":
        todosData = todosData.sort((a, b) => a.id < b.id ? 1 : -1);
        break;

      case "titles":
        todosData = todosData.sort((a, b) => a.title > b.title ? 1 : -1);
        break;

      default:
        todosData = todosData.sort((a, b) => a.position > b.position ? 1 : -1);
        break;
    }

    for (const todo of todosData) {
      todosWrap.insertAdjacentHTML('beforeend', cardTemplate(todo));
    }

    initCards();
  }
}