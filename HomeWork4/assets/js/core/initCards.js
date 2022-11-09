import {detectCards} from "./detectCards.js";
import {deleteTodo} from "../operations/deleteTodo.js";
import {completeTodo} from "../operations/completeTodo.js";
import {editTodo} from "../operations/editTodo.js";
// import {dragAndDrop} from "../handlers/dragAndDrop.js";

export const initCards = () => {
  const cards = detectCards();

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

    // dragAndDrop(card, cards);
  })

}