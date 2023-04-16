const greetingBox = document.getElementById('greeting');

export function loggedinStartup(cb, name) {
  const currentHour = cb();
  let greetingType;
  if (currentHour >= 0 && currentHour <= 11) {
    greetingType = 'Good morning';
  } else if (currentHour >= 12 && currentHour <= 16) {
    greetingType = 'Good afternoon';
  } else if ((currentHour >= 15 && currentHour <= 24) || currentHour == 0) {
    greetingType = 'Good evening';
  }
  greetingBox.innerText = `${greetingType}, ${name}.`;

  // date rendering
  const date = new Date();
  document.getElementById(
    'todayDate'
  ).innerText = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
}
