const todoUl = document.getElementById('todo-ul');
const todoListInput = document.querySelector('.todo-list-input');

const toDosKey = 'todos';
let toDos =
  localStorage.getItem(toDosKey) !== '[]'
    ? JSON.parse(localStorage.getItem(toDosKey))
    : new Array();

function saveToDos() {
  localStorage.setItem(toDosKey, JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem(toDosKey);
export function checkSavedToDos() {
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => {
      const todoItem = document.createElement('li');
      todoItem.classList.add('todolist-item');

      todoItem.innerHTML = `
        <input type="checkbox" class="checkbox todo-item-checkbox">
        <div class="todo-item-task"><p>${item}</p></div>
        <i class="todo-item-delete fa-solid fa-trash"></i>
        `;

      document.getElementById('todo-ul').append(todoItem);
      todoListInput.value = '';
      todoItem.addEventListener('click', affectTodoItem);
    });
  }
}

export const addTodoList = (event) => {
  if (todoUl.querySelectorAll('li').length > 2) {
    alert('You put too much on your plate! Why not let one task go?');
  }
  if (event.key === 'Enter' && todoListInput.value.length > 0) {
    toDos.push(todoListInput.value);
    saveToDos();
    const todoItem = document.createElement('li');
    todoItem.classList.add('todolist-item');

    todoItem.innerHTML = `
        <input type="checkbox" class="checkbox todo-item-checkbox">
        <div class="todo-item-task"><p>${todoListInput.value}</p></div>
        <i class="todo-item-delete fa-solid fa-trash"></i>
        `;

    document.getElementById('todo-ul').append(todoItem);
    todoListInput.value = '';
    todoItem.addEventListener('click', affectTodoItem);
  }
};

const affectTodoItem = (event) => {
  if (event.target.classList.contains('checkbox')) {
    const todoItem = event.target.closest('.todolist-item').querySelector('p');
    if (todoItem.style.textDecoration === 'line-through') {
      todoItem.style.textDecoration = 'none';
    } else {
      todoItem.style.textDecoration = 'line-through';
    }
  }
  if (event.target.classList.contains('todo-item-delete')) {
    const targetTodoItem = event.target.closest('.todolist-item');
    const targetTodoItemTask = targetTodoItem.querySelector('p').innerText;
    toDos = toDos.filter((item) => item !== targetTodoItemTask);
    saveToDos();
    targetTodoItem.remove();
  }
};
