// Import React and the CSS file for styling
import React from "react";
import "./current-weather.css";

// CurrentWeather component definition accepting 'data' as a prop
const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      {/* Top section for displaying city name, weather description, and icon */}
      <div className="top">
        <div>
          {/* City name */}
          <p className="city">{data.city}</p>
          {/* Weather description */}
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        {/* Weather icon */}
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      {/* Bottom section for displaying temperature and other weather details */}
      <div className="bottom">
        {/* Current temperature */}
        <p className="temperature">{Math.round(data.main.temp)}°F</p>
        <div className="details">
          {/* Static label for the details section */}
          <div className="parameter-row">
            <span className="parameter-label">Details:</span>
          </div>
          {/* Feels like temperature */}
          <div className="parameter-row">
            <span className="parameter-label">Feels like:</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°F
            </span>
          </div>
          {/* Wind speed */}
          <div className="parameter-row">
            <span className="parameter-label">Wind:</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          {/* Humidity percentage */}
          <div className="parameter-row">
            <span className="parameter-label">Humidity:</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          {/* Atmospheric pressure */}
          <div className="parameter-row">
            <span className="parameter-label">Pressure:</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the CurrentWeather component for use in other parts of the application
export default CurrentWeather;
