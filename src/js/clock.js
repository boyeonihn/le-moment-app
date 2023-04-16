export function updateClock() {
  let now = new Date();
  let minutes =
    now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
  let time = `${now.getHours()}:${minutes}`;

  clock.innerText = time;
  return now.getHours();
}
