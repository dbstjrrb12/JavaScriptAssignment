import * as Control from './control.mjs';
import * as State from './state.mjs';
import * as Node from './node.mjs';

// Event Binding
window.addEventListener('DOMContentLoaded', State.fetchTodos);

Node.$newTodo.onkeyup = e => {
  if (e.key !== 'Enter') return;

  const content = Node.$newTodo.value.trim();
  console.log(content);

  if (content) Control.addTodo(content);

  Node.$newTodo.value = '';
};

Node.$todoList.onchange = e => {
  if (!e.target.classList.contains('toggle')) return; // list 하단 edit input 요소도 change 이벤트를 감지하므로, 조건으로 걸러야 함

  const { id } = e.target.closest('li').dataset; // closest() : 상위 요소 중에 가장 가까운 요소 검색

  Control.toggleTodoCompleted(id);
};

Node.$toggleAll.onchange = () => {
  Control.toggleAllTodosCompleted($toggleAll.checked);
};

Node.$todoList.ondblclick = e => {
  if (!e.target.matches('.view > label')) return;

  e.target.closest('li').classList.add('editing');
};

Node.$todoList.onkeyup = e => {
  if (e.key !== 'Enter') return;

  Control.updateTodoContent(e.target.parentNode.dataset.id, e.target.value);
};

Node.$todoList.onclick = e => {
  if (!e.target.classList.contains('destroy')) return;

  Control.removeTodo(e.target.closest('li').dataset.id);
};

Node.$filters.onclick = e => {
  if (!e.target.matches('.filters > li > a')) return;

  [...Node.$filters.querySelectorAll('a')].forEach($a => {
    $a.classList.toggle('selected', e.target === $a);
  });

  State.setFilter(e.target.id);
};

Node.$clearCompleted.onclick = Control.removeAllTodos;
