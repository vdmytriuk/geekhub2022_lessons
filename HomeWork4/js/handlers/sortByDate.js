import {sortTodos} from "../operations/sortTodos.js";

export const sortByDate = () => {
  const dateButton = document.getElementById('dates');

  return sortTodos(dateButton, 'dates')
}