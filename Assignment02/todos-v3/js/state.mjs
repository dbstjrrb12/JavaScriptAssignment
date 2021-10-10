import * as Node from './node.mjs';

// state
let todos = [];
let currentFilter = 'all';

// state function
const render = () => {
  const _todos = todos.filter(todo =>
    currentFilter === 'completed'
      ? todo.completed
      : currentFilter === 'active'
      ? !todo.completed
      : true
  );

  Node.$todoList.innerHTML = _todos
    .map(
      ({ id, content, completed }) =>
        `<li data-id="${id}">
              <div class="view">
                  <input type="checkbox" class="toggle" ${completed ? 'checked' : ''} />
                  <label>${content}</label>
                  <button class="destroy"></button>
              </div>
              <input class="edit"/>
          </li>`
    )
    .join('');

  [Node.$main, Node.$footer].forEach($el => $el.classList.toggle('hidden', todos.length === 0));

  const activeTodos = todos.filter(todo => todo.completed === false).length;

  Node.$todoCount.textContent = `${activeTodos} ${activeTodos > 1 ? 'items' : 'item'} left`;

  const completedTodos = todos.filter(todo => todo.completed === true).length;

  Node.$clearCompleted.classList.toggle('hidden', completedTodos === 0);
};

const setTodos = newTodos => {
  todos = newTodos;
  console.log('[TODO]', todos);
  render();
};

const setFilter = newFilter => {
  currentFilter = newFilter;
  console.log('[FILTER]', currentFilter);
  render();
};

const fetchTodos = () => {
  setTodos([
    { id: 3, content: 'JavaScript', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'HTML', completed: false },
  ]);

  render();
};

const getTodos = () => todos;

const getFilter = () => currentFilter;

export { setTodos, setFilter, fetchTodos, getTodos, getFilter };
