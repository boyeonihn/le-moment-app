export function geoSuccess(pos) {
  const lat = pos.coords.latitude;
  const long = pos.coords.longitude;
  getLocationName(lat, long);
}

export function geoError() {
  alert('Cannot get your location :(');
}

async function getLocationName(lat, long) {
  const location = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c51a233a7cde933b1210034788d92d2f&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      const realFeelTemp = document.getElementById('realFeel');
      const location = document.getElementById('location');

      realFeelTemp.innerText = `Feels like ${Math.round(
        data.main.feels_like
      )}°C`;
      location.innerText = `${data.weather[0].main} / ${data.name}`;
    });
}
