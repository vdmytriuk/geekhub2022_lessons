import {renderTodos} from "../core/renderTodos.js";
import {todoObjectCreator} from "../services/todoObjectCreator.js";

export const addTodo = () => {
    const form = document.querySelector('.add-form');

    form.addEventListener('submit', e => {
       e.preventDefault();

       const formData = new FormData(e.target);

       const toDoObject = todoObjectCreator(formData);

       localStorage.setItem('cards',
        localStorage.getItem('cards') === null
            ? JSON.stringify([toDoObject])
            : JSON.stringify([...JSON.parse(localStorage.getItem('cards')), toDoObject])
       );

        renderTodos();
    });
}