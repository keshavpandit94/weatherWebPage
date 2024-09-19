const apikey = '3614619e8d2a7437133f7832d61abc4d'
const searchBtn = document.getElementById('search-btn')
const searchCity = document.getElementById('search-input')
const weatherDescription = document.getElementById('weatherDescription')
const humidity = document.getElementById('humidity')
const windSpeed = document.getElementById('windSpeed')
const weatherInfo = document.getElementById('weather-info')


searchBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    const city = searchCity.value
    fetchWeather(city)
})

function fetchWeather (city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

    fetch(url)
    .then( (responed) => { 
        return responed.json()
    })
    .then(data => {
        console.log(data)
        weatherDescription.textContent = `Weather: ${data.weather[0].description}`;
        temperature.textContent = `Temperature: ${parseInt(data.main.temp)} °C`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

        weatherInfo.style.display = 'flex';
    })
      .catch(error => {
        console.error('Error fetching weather data:', error)
        weatherDescription.textContent = 'City not found. Please try again.';
        weatherInfo.style.display = 'none';
      });


}