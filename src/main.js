import './style.css';

const loggedIn = true;
const loggedInContainer = document.querySelector('.loggedIn');
const notLoggedInContainer = document.querySelector('.notLoggedIn');
const username = 'Bonnie';

const clock = document.getElementById('clock');
const greetingBox = document.getElementById('greeting');

if (loggedIn) {
  loggedInContainer.style.display = 'block';
  notLoggedInContainer.style.display = 'none';
  updateClock();
  loggedinStartup();
} else {
  loggedInContainer.style.display = 'none';
  notLoggedInContainer.style.display = 'block';
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
  let time = `${now.getHours()}:${now.getMinutes()}`;
  clock.innerText = time;

  setTimeout(updateClock, 1000);
  return now.getHours();
}
