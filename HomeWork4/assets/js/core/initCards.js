import {detectCards} from "./detectCards.js";
import {deleteTodo} from "../operations/deleteTodo.js";

export const initCards = () => {
  const cards = detectCards();

  cards.forEach(card => {
    const cardId = card.getAttribute('data-id');

    card.querySelector('button[data-type="delete"]').addEventListener('click' , () => {
        deleteTodo(cardId);
    })
  })

}