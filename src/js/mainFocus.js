const focusTask = document.getElementById('focusTask');
const focusInput = document.getElementById('focusInput');
const focusPromptContainer = document.querySelector('.focusPromptContainer');
const focusTaskContainer = document.querySelector('.focusTaskContainer');

export const checkOffMainFocus = (event) => {
  if (event.target.classList.contains('checkbox')) {
    const focusTaskText = focusTask.querySelector('h3');
    const completeMessage = document.querySelector('.complete-message');
    if (focusTaskText.style.textDecoration === 'line-through') {
      focusTaskText.style.textDecoration = 'none';
      completeMessage.innerText = '';
    } else {
      focusTaskText.style.textDecoration = 'line-through';
      completeMessage.innerText = 'You got it done!';
    }
  }
};

export function addMainFocus(event) {
  if (event.key === 'Enter' && focusInput.value.length > 0) {
    const inputValue = focusInput.value;
    focusTask.innerHTML = `
        <input type="checkbox" class="checkbox" id="main-focus-checkbox">
        <h3 id="main-focus-task">${inputValue}</h3>
        <i id="main-focus-edit" class="fa-solid fa-pen-to-square"></i>
        `;
    focusPromptContainer.classList.toggle('invisible');
    focusTaskContainer.classList.toggle('invisible');
    document
      .getElementById('main-focus-edit')
      .addEventListener('click', editFocus);
  }

  function editFocus() {
    focusPromptContainer.classList.toggle('invisible');
    focusTaskContainer.classList.toggle('invisible');
  }
}
