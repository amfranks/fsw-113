import convertTemp from './convertTemp.js';
import getDaylight from './getDaylight.js';

const goButton = document.getElementById('goBttn');
let input;
let weatherData;

goButton.addEventListener('click', function() {
    fetchWeatherData();
});
   
function fetchWeatherData() { // Asynchronous call to await/fetch function and writeWeatherData function
    input = document.getElementById('city').value;

    getWeatherData()
        .then(function(weatherData) {
            writeWeatherData(weatherData);
        })
        .catch(function(err) {
            console.warn(err);
        })
}

const getWeatherData = async() => { // Fetches information from weather API
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=63b2b15dd383ffdd72ca21f3cf842ad9`);
    weatherData = await weatherResponse.json();

    console.log(weatherData);
    return weatherData;
}

function writeWeatherData(weatherData) { // Writes data from weather API to the DOM
    let temperatureData = document.getElementById('temfffffffpData');
    let humidityData = document.getElementById('humidData');
    let conditionsData = document.getElementById('conditionsData');
    let weatherDiv = document.querySelector('.weatherWrapper');

    temperatureData.innerText = convertTemp(weatherData.sys.country, weatherData.main.temp);
    humidityData.innerText = weatherData.main.humidity + '%';
    conditionsData.innerText = weatherData.weather[0].main;
    weatherDiv.style.backgroundColor = getDaylight(weatherData.sys.sunrise, weatherData.sys.sunset, weatherData.dt);
}