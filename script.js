let searchInp = document.querySelector('.searchWeather');
let city = document.querySelector('.city');
let day = document.querySelector('day-of-week');
let humidity = document.querySelector('humidity-indicator>.value');
let wind = document.querySelector('wind-indicator>.value');
let image = document.querySelector('weather-image');
let temperature = document.querySelector('temp>.value');
let apiKey = 'b50e4ce47df2796b12bbad5dd2db25bf';
let weatherEndpoint = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=' + apiKey;
let getWeatherbyCity = async (city) => {
    let endpoint = weatherEndpoint + '&q=' + city;
    let response = await fetch(endpoint);
    let weather = await response.json();
    return weather;
}

searchInp.addEventListener('keydown', async (e) => {
    if(e.keyCode === 13) {
        let weather = await getWeatherbyCity(searchInp.value);
        updateCurrentWeather(weather);
    }
})

let updateCurrentWeather = (data) => {
    city.textContent = data.name + ',' + data.sys.country;
}

