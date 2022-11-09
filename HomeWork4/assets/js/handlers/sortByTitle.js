import {sortTodos} from "../operations/sortTodos.js";

export const sortByTitle = () => {
  const titleButton = document.getElementById('titles');

  return sortTodos(titleButton, 'titles')
}