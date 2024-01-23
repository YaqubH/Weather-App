// Import React and Accordion components from 'react-accessible-accordion'
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
// Import specific styles for the forecast component
import "./forecast.css";

// Array containing the days of the week for display purposes
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// The Forecast component accepts 'data' prop with weather forecast information
const Forecast = ({ data }) => {
  // Calculate the current day of the week index (0-6, where 0 is Sunday)
  const dayInAWeek = new Date().getDay();
  // Rearrange WEEK_DAYS starting from today to the end of the week followed by the days before today
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
  return (
    <>
      {/* Title for the forecast section */}
      <label className="title">Daily</label>
      {/* Accordion component to show daily forecasts; allows all items to be collapsed */}
      <Accordion allowZeroExpanded>
        {/* Map through the first 7 items of the forecast data to display a week's forecast */}
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                {/* Daily weather summary including icon, day of the week, description, and temperature */}
                <div className="daily-item">
                  <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="min-max">{Math.round(item.main.temp_max)}°F /{Math.round(item.main.temp_min)}°F</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {/* Detailed weather information displayed in a grid layout */}
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

// Export the Forecast component for use in other parts of the application
export default Forecast;
