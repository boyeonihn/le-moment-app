import { geoSuccess, geoError } from './weather';
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

function loggedinStartup() {
  const currentHour = updateClock();
  let greetingType;
  if (currentHour >= 0 && currentHour <= 11) {
    greetingType = 'Good morning';
  } else if (currentHour >= 12 && currentHour <= 16) {
    greetingType = 'Good afternoon';
  } else if ((currentHour >= 15 && currentHour <= 24) || currentHour == 0) {
    greetingType = 'Good evening';
  }
  greetingBox.innerText = `${greetingType}, ${username}.`;
}

function updateClock() {
  let now = new Date();
  let minutes =
    now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
  let time = `${now.getHours()}:${minutes}`;
  clock.innerText = time;
  return now.getHours();
}

focusInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && focusInput.value.length > 0) {
    const inputValue = focusInput.value;
    focusTask.innerHTML = `
      <span><i class="fa-regular fa-square"></i></span>
      <h3>${inputValue}</h3>
      <span><i class="fa-solid fa-ellipsis"></i></span>
      `;
    focusPromptContainer.classList.toggle('invisible');
    focusTaskContainer.classList.toggle('invisible');
    focusTaskContainer.classList.toggle('visible');
    focusTask.classList.toggle('flex');
  }
});

focusTask.addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-square')) {
    const focusTaskText = focusTask.querySelector('h3');
    if (focusTaskText.style.textDecoration === 'line-through') {
      focusTaskText.style.textDecoration = 'none';
    } else {
      focusTaskText.style.textDecoration = 'line-through';
    }
  }
});

async function generateQuote() {
  const response = await fetch(
    'https://api.api-ninjas.com/v1/quotes?category=inspirational',
    {
      method: 'GET',
      headers: { 'X-Api-Key': import.meta.env.VITE_API_KEY },
    }
  )
    .then((res) => res.json())
    .then((data) => data[0])
    .catch((err) => {
      console.log(err);
    });
  return response;
}

async function renderQuote() {
  const quoteObject = await generateQuote();
  const quote = quoteObject.quote;
  const author = quoteObject.author;

  document.getElementById('quote').innerText = quote;
}
