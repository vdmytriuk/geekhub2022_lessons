import {renderTodos} from "../core/renderTodos.js";
import {getTodos} from "../selectors/getTodos.js";
import {setTodos} from "../handlers/setTodos.js";

export const deleteTodo = (id) => {
  const todos = getTodos();

  setTodos(todos.filter(todo => +todo.id !== +id))

  renderTodos();
}