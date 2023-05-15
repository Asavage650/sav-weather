let searchInp = document.querySelector('.searchWeather');
let city = document.querySelector('.city');
let day = document.querySelector('.day-of-week');
let humidity = document.querySelector('.humidity-indicator>.value');
let wind = document.querySelector('.wind-indicator>.value');
let image = document.querySelector('weather-image');
let temperature = document.querySelector('.temp>.value');
let weekDayWeather = document.querySelector('.forecast')
let DayAPI = '0562462fb984b292b6802663f61c2a03'
let apiKey = 'b50e4ce47df2796b12bbad5dd2db25bf'
let weeklyWeatherEndpoint = 'api.openweathermap.org/data/2.5/forecast?q={new york}&appid=' + DayAPI;
let weatherEndpoint = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=' + apiKey;
let getWeatherbyCity = async (city) => {
    let endpoint = weatherEndpoint + '&q=' + city;
    let response = await fetch(endpoint);
    let weather = await response.json();
    return weather;
}
let getWeatherbyDay = async (weekDayWeather) => {
    let endpoint = weeklyWeatherEndpoint + '&q=' + weekDayWeather;
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
    day.textContent = dayofWeek();
    humidity.textContent = data.main.humidity
    let windDirection 
    let deg = data.wind.deg;
    if (deg > 45 && deg <= 135){
        windDirection = 'East';
    } else if(deg > 135 && deg <=225){
        windDirection = 'South';
    }else if(deg > 225 && deg <=315){
        windDirection = 'West';
    } else {
        windDirection = 'North';
    }
    wind.textContent = windDirection + ',' + data.wind.speed;
    temperature.textContent = data.main.temp > 0 ? '+' + Math.round(data.main.temp) : Math.round(data.main.temp);
}

let dayofWeek = () => {
    return new Date().toLocaleDateString('en-En', {'weekday': 'long'});
}

