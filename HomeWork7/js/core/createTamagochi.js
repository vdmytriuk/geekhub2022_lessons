import {render} from "./render.js";

export const createTamagochi = () => {
  const addForm = document.querySelector('.add-form');
  const targetField = addForm.querySelector('input[name="name"]');

  addForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    const newTamagochiObject = {
      name: targetField.value
    }

    targetField.value = '';

    render(newTamagochiObject);
  });
}