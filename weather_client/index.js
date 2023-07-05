const apiKey = require('./apiKey');

const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let data = null;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log({temp: data.main.temp, weather: data.weather[0].main})
  });

console.log('Requesting weather data');