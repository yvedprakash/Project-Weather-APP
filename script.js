document.getElementById('search-button').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
        fetchWeather(city);
    }
});

function fetchWeather(city) {
    const apiKey = 'your_api_key_here'; // Replace with your actual API key
    const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('City not found');
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}

function displayWeather(data) {
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const weatherDescription = document.getElementById('weather-description');
    const humidity = document.getElementById('humidity');

    cityName.textContent = data.name;
    temperature.textContent = Temperature : ${data.main.temp} °C;
    weatherDescription.textContent = Weather : ${data.weather[0].description};
    humidity.textContent = Humidity : ${data.main.humidity}%;
}