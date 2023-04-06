import './style.css';

const loggedIn = false;
const loggedInContainer = document.querySelector('.loggedIn');

if (loggedIn) {
  loggedInContainer.style.display = 'block';
} else {
  loggedInContainer.style.display = 'none';
}
