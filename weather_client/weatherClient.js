

class WeatherClient {
    constructor() {
        this.weather = require('./apiKey');
    };

    fetchWeatherData(city) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
    return fetch(apiURL)
    .then((response) => response.json())
  .then((data) => {
    console.log(data)
  });
        };

};

module.exports = WeatherClient;