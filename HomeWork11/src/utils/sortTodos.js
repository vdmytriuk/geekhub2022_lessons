export const sortTodos = (param, todos, setTodos) => {
  switch (param) {
      case "completed":
          setTodos(prevState => prevState.filter(i => i.completed));
          break;
      case "titles":
          setTodos([...todos.sort((a, b) => a.title.localeCompare(b.title))])
          break;
      default:
          setTodos(todos);
  }
}