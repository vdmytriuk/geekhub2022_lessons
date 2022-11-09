import {renderTodos} from "../core/renderTodos.js";
import {todoObjectCreator} from "../services/todoObjectCreator.js";
import {resetForm} from "../services/resetForm.js";
import {getTodos} from "../selectors/getTodos.js";
import {setTodos} from "../handlers/setTodos.js";

export const setTodo = () => {
    const form = document.querySelector('.add-form');

    form.addEventListener('submit', e => {
       e.preventDefault();

       const formData = new FormData(e.target);
       const editTodoId = form.getAttribute('data-todo-id');

       if (editTodoId === '') {
           const newToDoObject = todoObjectCreator(formData);

           if (getTodos() === null) {
               setTodos([newToDoObject])
           } else {
               setTodos([...getTodos(), newToDoObject])
           }

       } else {
            const title = form.querySelector('input[name="title"]').value;
            const description = form.querySelector('textarea[name="description"]').value;

           setTodos(getTodos()
               .map(todo => todo.id === +editTodoId ? ({...todo, title, description}) : todo)
           )
       }

        renderTodos();
        resetForm(form);
    });
}