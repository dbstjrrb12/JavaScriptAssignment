import { getTodos, setTodos } from './state.mjs';

const generateTodo = todos => Math.max(...todos.map(todo => todo.id), 0) + 1;

const addTodo = content => {
  const todos = getTodos();
  setTodos([{ id: generateTodo(todos), content, completed: false }, ...todos]);
};

const toggleTodoCompleted = id => {
  const todos = getTodos();
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo)));
};

const toggleAllTodosCompleted = completed => {
  const todos = getTodos();
  setTodos(todos.map(todo => ({ ...todo, completed })));
};

const updateTodoContent = (id, content) => {
  const todos = getTodos();
  setTodos(todos.map(todo => (todo.id === +id ? { ...todo, content } : todo)));
};

const removeTodo = id => {
  const todos = getTodos();
  setTodos(todos.filter(todo => todo.id !== +id));
};

const removeAllTodos = () => {
  const todos = getTodos();
  setTodos(todos.filter(todo => !todo.completed));
};

export {
  generateTodo,
  addTodo,
  toggleTodoCompleted,
  toggleAllTodosCompleted,
  updateTodoContent,
  removeTodo,
  removeAllTodos,
};
