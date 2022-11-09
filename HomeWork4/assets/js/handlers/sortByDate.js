import {detectCards} from "../core/detectCards.js";

export const sortByDate = () => {
  const dateSelect = document.getElementById('dates');
  const todosWrap = document.querySelector('.section__cards');

    dateSelect.addEventListener('change', () => {
      const cards = detectCards();

      cards.forEach(card => card.remove());

      [...cards].sort((a, b) => a.id < b.id ? 1 : -1).forEach(card => todosWrap.appendChild(card))
    });
}