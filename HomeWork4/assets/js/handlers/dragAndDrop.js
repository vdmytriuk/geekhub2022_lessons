import {setTodos} from "./setTodos.js";
import {getTodos} from "../selectors/getTodos.js";
import {renderTodos} from "../core/renderTodos.js";

export const dragAndDrop = (card, cardsHolder) => {
    const cardId = card.getAttribute('data-id');
    const cardPosition = card.getAttribute('data-position');
    const sortButtons = document.querySelectorAll('.js-sort');

    card.addEventListener('dragstart', () => setTimeout(() => card.classList.add('card_hidden')));
    card.addEventListener('dragend', () => card.classList.remove('card_hidden'));

    cardsHolder.addEventListener('dragover', (e) => {
       e.preventDefault();

       const activeCard = document.querySelector('.card_hidden');
       const activeCardId = activeCard.getAttribute('data-id');
       const activeCardPosition = activeCard.getAttribute('data-position');

        card.addEventListener('drop', (e) => {
            setTodos(getTodos()
                .map(todo => +todo.id === +cardId ? ({...todo, position: +activeCardPosition}) : todo)
                .map(todo => +todo.id === +activeCardId ? ({...todo, position: +cardPosition}) : todo)
            );

            sortButtons.forEach(i => i.classList.remove('button_active'));

            delete localStorage.renderType;

            renderTodos();
        });
    });
}