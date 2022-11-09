import {cardTemplate} from "../templates/cardTemplate.js";
import {initCards} from "./initCards.js";
import {getTodos} from "../selectors/getTodos.js";

export const renderTodos = () => {
  const todosWrap = document.querySelector('.section__cards');
  const todosData = getTodos();

  todosWrap.innerHTML = '';

  if (todosData !== null) {
    for (const todo of todosData) {
      todosWrap.insertAdjacentHTML('beforeend', cardTemplate(todo));
    }

    initCards();
  }
}