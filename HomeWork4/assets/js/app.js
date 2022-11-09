import {setTodo} from "./operations/setTodo.js";
import {renderTodos} from "./core/renderTodos.js";
import {sortByDate} from "./handlers/sortByDate.js";
import {sortByTitle} from "./handlers/sortByTitle.js";
import {resetFilters} from "./services/resetFilters.js";

renderTodos();

setTodo();
sortByDate();
sortByTitle();
resetFilters();