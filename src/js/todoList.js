const todoUl = document.getElementById('todo-ul');
const todoListInput = document.querySelector('.todo-list-input');
export const addTodoList = (event) => {
  if (todoUl.querySelectorAll('li').length > 2) {
    alert('You put too much on your plate! Why not let one task go?');
  }
  if (event.key === 'Enter' && todoListInput.value.length > 0) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todolist-item');

    todoItem.innerHTML = `
        <input type="checkbox" class="checkbox todo-item-checkbox">
        <div class="todo-item-task"><p>${todoListInput.value}</p></div>
        <i class="todo-item-delete fa-solid fa-trash"></i>
        `;

    document.getElementById('todo-ul').append(todoItem);
    todoListInput.value = '';
    todoItem.addEventListener('click', checkOffItem);
    document
      .querySelector('.todo-item-delete')
      .addEventListener('click', deleteTodo);
  }
};

const checkOffItem = (event) => {
  if (event.target.classList.contains('checkbox')) {
    const todoItem = event.target.closest('.todolist-item').querySelector('p');
    if (todoItem.style.textDecoration === 'line-through') {
      todoItem.style.textDecoration = 'none';
    } else {
      todoItem.style.textDecoration = 'line-through';
    }
  }
};

function deleteTodo(event) {
  const targetTodoItem = event.target.closest('.todolist-item');
  targetTodoItem.remove();
}
