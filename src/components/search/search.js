// Import necessary React hooks and components
import React, { useState } from "react";
// Import AsyncPaginate component from react-select-async-paginate for asynchronous dropdown
import { AsyncPaginate } from "react-select-async-paginate";
// Import API configuration for accessing the GeoAPI
import { geoApiOptions, GEO_API_URL } from "../../api";

// The Search component that handles city search functionality
const Search = ({ onSearchChange }) => {
  // State to manage the current search selection
  const [search, setSearch] = useState(null);

  // Function to load city options based on user input
  const loadOptions = (inputValue) => {
    // Fetch cities from the GeoAPI based on the user's input and minimum population
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json()) // Convert the response to JSON
      .then((response) => {
        // Map the response data to format suitable for AsyncPaginate options
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`, // Use city's latitude and longitude as the value
              label: `${city.name}, ${city.countryCode}`, // Format the label as "City Name, Country Code"
            };
          }),
        };
      });
  };

  // Handler function for when a new city is selected
  const handleOnChange = (searchData) => {
    setSearch(searchData); // Update the search state with the selected city
    onSearchChange(searchData); // Propagate the change up to the parent component
  };

  // Render the AsyncPaginate component
  return (
    <AsyncPaginate
      placeholder="Search for city" // Placeholder text for the search input
      debounceTimeout={600} // Wait for 600ms of inactivity before triggering loadOptions
      value={search} // Current value of the search input
      onChange={handleOnChange} // Handler for when the selection changes
      loadOptions={loadOptions} // Function to load options asynchronously based on input
    />
  );
};

// Export the Search component for use in other parts of the application
export default Search;
