import {addTodo} from "./operations/addTodo.js";
import {renderTodos} from "./core/renderTodos.js";
import {sortByDate} from "./handlers/sortByDate.js";

renderTodos();

addTodo();
sortByDate();