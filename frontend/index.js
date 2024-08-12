async function moduleProject4() {

  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  let descriptions = [
    ["Sunny", "☀️"],
    ["Cloudy", "☁️"],
    ["Rainy", "🌧️"],
    ["Thunderstorm", "⛈️"],
    ["Snowy", "❄️"],
    ["Partly Cloudy", "⛅️"]
  ]

  // 👉 Tasks 1 - 5 go here


  // Task 1 - Hide the weather widget initially
  document.getElementById('weatherWidget').style.display = 'none';

  // Task 2 - Add event listener to the city dropdown
  const cityDropdown = document.getElementById('cityDropdown');
  
  cityDropdown.addEventListener('change', async (event)) => {
      const selectedCity = event.target.value;
      console.log(`Selected city: ${selectedCity}`);
  
      // Task 3 - Disable the dropdown, hide the widget, and show loading message
      cityDropdown.disabled = true;
      document.getElementById('weatherWidget').style.display = 'none';
      document.querySelector('p.info').textContent = 'Fetching weather data...';
  
      // Task 4 - Form the correct URL and fetch the weather data
      const url = `http://localhost:3003/api/weather?city=${encodeURIComponent(selectedCity)}`;
  
      try {
          const response = await axios.get(url);
          const weatherData = response.data;
  
          // Task 5 - Handle the successful response
          document.querySelector('p.info').textContent = '';
          cityDropdown.disabled = false;
          document.getElementById('weatherWidget').style.display = 'block';
  
          // Inject data into the DOM
          document.getElementById('cityName').textContent = weatherData.city;
          document.getElementById('temperature').textContent = `${weatherData.temperature}°F`;
          document.getElementById('conditions').textContent = weatherData.weather_description;
  
          // Convert weather description to emoji
          const descriptions = {
              "Sunny": "☀️",
              "Cloudy": "☁️",
              "Rainy": "🌧️",
              "Thunderstorm": "⛈️",
              "Snowy": "❄️",
              "Partly Cloudy": "⛅️"
          };
          document.getElementById('weatherIcon').textContent = descriptions[weatherData.weather_description];
  
          // Convert date to day of the week
          const date = new Date(weatherData.date);
          const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          document.getElementById('dayOfWeek').textContent = days[date.getDay()];
  
      } catch (error) {
          console.error(`Error fetching weather data: ${error.message}`);
      }
  }
}


// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
