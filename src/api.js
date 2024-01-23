// Configuration for accessing the GeoDB API
export const geoApiOptions = {
  method: "GET", // HTTP method for the request, indicating a data retrieval action
  headers: {
    // HTTP request headers containing metadata for the request
    "X-RapidAPI-Key": "9bbf4113c5mshd288e903b62afb3p1ddfa3jsn34123a108916", // Your RapidAPI key for authentication
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com", // Host header specifying the target API server
  },
};

// Base URL for the GeoDB API, used to construct requests to the service
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// Base URL for the OpenWeatherMap API, used to fetch weather data
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

// Your API key for accessing the OpenWeatherMap API, required for authentication
export const WEATHER_API_KEY = "607d1436dfb48b4960d416b15e91dfe7";
