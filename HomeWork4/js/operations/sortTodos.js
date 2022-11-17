import {renderTodos} from "../core/renderTodos.js";

export const sortTodos = (button, compareIdentifier) => {
    const sortButtons = document.querySelectorAll('.js-sort');

    if(button.id === localStorage.renderType) {
        button.classList.add('button_active');
    }

    button.addEventListener('click', () => {
        sortButtons.forEach(i => i.classList.remove('button_active'));
        button.classList.add('button_active');

        localStorage.renderType = compareIdentifier;

        renderTodos();
    });
}