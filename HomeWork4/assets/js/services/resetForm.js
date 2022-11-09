export const resetForm = (form) => {
  if (form.getAttribute('data-todo-id') !== '') {
    form.setAttribute('data-todo-id', '');

    form.querySelector('#formTitle').innerText = 'Add ToDo';
  }

  form.querySelectorAll('input, textarea')
      .forEach(el => el.value = '');
}