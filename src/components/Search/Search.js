import React, { useState } from 'react'; // Importing React and useState hook
import { AsyncPaginate } from 'react-select-async-paginate'; // Importing AsyncPaginate component from react-select-async-paginate
import { fetchCities } from '../../api/OpenWeatherService'; // Importing fetchCities function from '../../api/OpenWeatherService'

/**
 * Search component for rendering a searchable city input using AsyncPaginate.
 * @param {Object} props - Props passed to the Search component
 * @param {function} props.onSearchChange - Function to handle search input change
 * @returns {JSX.Element} - Rendered Search component
 */
const Search = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState(null); // State for storing search input value

  // Function to load options for AsyncPaginate based on user input
  const loadOptions = async (inputValue) => {
    const citiesList = await fetchCities(inputValue); // Fetch cities list based on user input

    // Transforming fetched cities data into options array required by AsyncPaginate
    return {
      options: citiesList.data.map((city) => ({
        value: `${city.latitude} ${city.longitude}`, // Value of the option (latitude and longitude)
        label: `${city.name}, ${city.countryCode}`, // Label displayed in the dropdown (city name and country code)
      })),
    };
  };

  // Handler function for handling change in the input value
  const onChangeHandler = (enteredData) => {
    setSearchValue(enteredData); // Update searchValue state with entered data
    onSearchChange(enteredData); // Call onSearchChange prop function with entered data
  };

  return (
    <AsyncPaginate
      placeholder="Search for cities" // Placeholder text for the input
      debounceTimeout={600} // Debounce timeout duration (in milliseconds)
      value={searchValue} // Current value of the input
      onChange={onChangeHandler} // Handler function called when input value changes
      loadOptions={loadOptions} // Function to load options based on user input
    />
  );
};

export default Search; // Exporting Search component as default
