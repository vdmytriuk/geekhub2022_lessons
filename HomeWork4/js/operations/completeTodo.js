import {renderTodos} from "../core/renderTodos.js";
import {getTodos} from "../selectors/getTodos.js";
import {setTodos} from "../handlers/setTodos.js";

export const completeTodo = (id, completed) => {
  const todos = getTodos();

  setTodos(todos.map(todo => +todo.id === +id ? ({...todo, completed}) : todo))

  renderTodos();
}