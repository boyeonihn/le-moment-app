import { geoSuccess, geoError } from './weather';
import { getBackgroundImage } from './backgroundImg';
import { renderQuote, generateQuote } from './quoteFetchRender';
import { updateClock } from './clock';
import { addTodoList } from './todoList';
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
const clock = document.getElementById('clock');
const greetingBox = document.getElementById('greeting');
const focusInput = document.getElementById('focusInput');
const focusTaskContainer = document.querySelector('.focusTaskContainer');
const focusPromptContainer = document.querySelector('.focusPromptContainer');
const focusTask = document.getElementById('focusTask');

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
}

function switchToLoginMode() {
  loggedInContainer.classList.remove('invisible');
  notLoggedInContainer.classList.add('invisible');
  setInterval(updateClock, 1000);
  loggedinStartup();
  renderQuote();
}

focusInput.addEventListener('keydown', addMainFocus);
focusTask.addEventListener('click', checkOffMainFocus);
todoHeading.addEventListener('click', openTodoList);

function updateClock() {
  let now = new Date();
  let minutes =
    now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
  let time = `${now.getHours()}:${minutes}`;
  clock.innerText = time;
  return now.getHours();
}

const todoListInput = document.querySelector('.todo-list-input');
todoListInput.addEventListener('keydown', addTodoList);
getBackgroundImage();
