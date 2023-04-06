import './style.css';

const loggedIn = false;
const loggedInContainer = document.querySelector('.loggedIn');
const clock = document.getElementById('clock');

if (loggedIn) {
  loggedInContainer.style.display = 'block';
  notLoggedInContainer.style.display = 'none';
  updateClock();
  loggedinStartup();
} else {
  loggedInContainer.style.display = 'none';
function updateClock() {
  let now = new Date();
  let time = `${now.getHours()}:${now.getMinutes()}`;
  clock.innerText = time;

  setTimeout(updateClock, 1000);
  return now.getHours();
}
