import {getTodos} from "../selectors/getTodos.js";

export const editTodo = (id) => {
    const form = document.querySelector('.add-form');
    const targetTodo = getTodos().find(todo => +todo.id === +id);

    console.log(targetTodo)

    form.setAttribute('data-todo-id', id);
    form.querySelector('#formTitle').innerText = 'Edit ToDo';
    form.querySelector('input[name="title"]').value = targetTodo.title;
    form.querySelector('textarea[name="description"]').value = targetTodo.description;
}