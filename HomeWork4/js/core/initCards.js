import {editTodo} from "../operations/editTodo.js";
import {deleteTodo} from "../operations/deleteTodo.js";
import {detectCards} from "./detectCards.js";
import {dragAndDrop} from "../handlers/dragAndDrop.js";
import {completeTodo} from "../operations/completeTodo.js";

export const initCards = () => {
  const cards = detectCards();
  const cardsHolder = document.querySelector('.section__cards');

  cards.forEach(card => {
    const cardId = card.getAttribute('data-id');

    card.querySelector('button[data-type="delete"]').addEventListener('click' , () => {
        deleteTodo(cardId);
    });

    card.querySelector('button[data-type="edit"]').addEventListener('click' , () => {
        editTodo(cardId);
    });

    card.querySelector('input[name="completed"]').addEventListener('change' , (e) => {
        completeTodo(cardId, e.target.checked);
    });

    dragAndDrop(card, cardsHolder);
  })

}