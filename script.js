async function getWeather() {
  const city = document.getElementById("city-input").value;
  const apiKey = "8b1880b708f34c02833144426251307";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    const weatherInfo = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p><strong>Temperature:</strong> ${data.current.temp_c} °C</p>
      <p><strong>Condition:</strong> ${data.current.condition.text}</p>
      <img src="${data.current.condition.icon}" alt="Weather Icon" />
      <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
      <p><strong>Air Quality Index:</strong> ${data.current.air_quality.pm2_5.toFixed(2)}</p>
    `;

    document.getElementById("weather-result").innerHTML = weatherInfo;
  } catch (error) {
    document.getElementById("weather-result").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
