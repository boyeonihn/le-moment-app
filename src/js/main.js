import { geoSuccess, geoError } from './weather';
import { getBackgroundImage } from './backgroundImg';
import { renderQuote, generateQuote } from './quoteFetchRender';
import { updateClock } from './clock';
import { addTodoList, checkSavedToDos } from './todoList';
import { loggedinStartup } from './greeting';
import { checkOffMainFocus, addMainFocus } from './mainFocus';
// general variable declarations
let username = '';

// logged in vs. not logged in container
const loggedInContainer = document.querySelector('.loggedIn');
const notLoggedInContainer = document.querySelector('.notLoggedIn');

//notloggedIn container elements
const loginForm = document.querySelector('.login-form');

// loggedInContainer elements
const focusInput = document.getElementById('focusInput');
const focusTask = document.getElementById('focusTask');
const todoListInput = document.querySelector('.todo-list-input');

//footer elements
const footer = document.querySelector('footer');
const todoHeading = document.getElementById('todo-heading');
const todoList = document.getElementById('todo-list');

const submitName = (event) => {
  event.preventDefault();
  if (loginForm.querySelector('input').value.length === 0) {
    alert('Please enter your name!');
    return;
  }
  username = loginForm.querySelector('input').value;
  switchToLoginMode();
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};

loginForm.addEventListener('submit', submitName);

function switchToLogoutMode() {
  loggedInContainer.classList.add('invisible');
  notLoggedInContainer.classList.remove('invisible');
  footer.classList.add('invisible');
}

function switchToLoginMode() {
  loggedInContainer.classList.remove('invisible');
  notLoggedInContainer.classList.add('invisible');
  footer.classList.remove('invisible');
  setInterval(updateClock, 1000);
  loggedinStartup(updateClock, username);
  renderQuote();
  checkSavedToDos();
}

focusInput.addEventListener('keydown', addMainFocus);
focusTask.addEventListener('click', checkOffMainFocus);
todoHeading.addEventListener('click', openTodoList);

function openTodoList() {
  todoList.classList.toggle('invisible');
}

todoListInput.addEventListener('keydown', addTodoList);
getBackgroundImage();
