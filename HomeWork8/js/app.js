import {FormActions} from "./classes/FormActions.js";

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
   e.preventDefault();

   new FormActions(form).validationActions();
});