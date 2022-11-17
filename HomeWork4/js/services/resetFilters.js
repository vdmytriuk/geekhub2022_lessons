import {renderTodos} from "../core/renderTodos.js";

export const resetFilters = () => {
    const resetButton = document.querySelector('#reset');
    const sortButtons = document.querySelectorAll('.js-sort');

    resetButton.addEventListener('click', () => {
        sortButtons.forEach(i => i.classList.remove('button_active'));

        delete localStorage.renderType;

        renderTodos();
    });
}