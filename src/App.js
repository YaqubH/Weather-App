// Import the useState hook from React for managing component state
import { useState } from "react";
// Import the Search, Forecast, and CurrentWeather components from their respective files
import Search from "./components/search/search";
import Forecast from "./components/forecast/forecast";
import CurrentWeather from "./components/current-weather/current-weather";
// Import API constants for weather data fetching
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
// Import stylesheet for the App component
import "./App.css";

// Define the main App component
function App() {
  // State hook for current weather data
  const [currentWeather, setCurrentWeather] = useState(null);
  // State hook for forecast data
  const [forecast, setForecast] = useState(null);

  // Handler function for search component changes, takes searchData as argument
  const handleOnSearchChange = (searchData) => {
    // Destructure latitude and longitude from searchData.value
    const [lat, lon] = searchData.value.split(" ");

    // Fetch current weather data using the OpenWeatherMap API
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);
    // Fetch weather forecast data using the OpenWeatherMap API
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`);

    // Execute both fetch requests in parallel and process their responses
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        // Parse the JSON response for current weather
        const weatherResponse = await response[0].json();
        // Parse the JSON response for forecast
        const forcastResponse = await response[1].json();

        // Update the currentWeather state with the fetched data
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        // Update the forecast state with the fetched data
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log); // Log any errors to the console
  };

  // Render the application UI
  return (
    <div className="container">
      {/* Search component with onSearchChange event handler */}
      <Search onSearchChange={handleOnSearchChange} />
      {/* Conditionally render CurrentWeather component if currentWeather data is available */}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {/* Conditionally render Forecast component if forecast data is available */}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

// Export the App component for use in other parts of the application
export default App;
