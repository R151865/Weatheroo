// Constants for API URLs and keys
const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
const WEATHER_API_KEY = '20072c8614708e5625d82e18255d8db2';

// Options for the GEO API fetch request
const GEO_API_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4f0dcce84bmshac9e329bd55fd14p17ec6fjsnff18c2e61917',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

/**
 * Fetches weather data and forecast for a given latitude and longitude.
 * @param {number} lat Latitude of the location
 * @param {number} lon Longitude of the location
 * @returns {Promise<Array>} Array containing weatherResponse and forecastResponse
 */
export async function fetchWeatherData(lat, lon) {
  try {
    // Fetch weather and forecast data concurrently
    let [weatherPromise, forecastPromise] = await Promise.all([
      fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      ),
      fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      ),
    ]);

    // Parse JSON responses
    const weatherResponse = await weatherPromise.json();
    const forecastResponse = await forecastPromise.json();

    // Return an array with weather and forecast data
    return [weatherResponse, forecastResponse];
  } catch (error) {
    // Log any errors that occur during fetching
    console.log(error);
  }
}

/**
 * Fetches cities from the geo database API based on user input.
 * @param {string} input User input to filter city names
 * @returns {Promise<Object>} Data object containing cities information
 */
export async function fetchCities(input) {
  try {
    // Fetch cities data from GEO API with specified parameters
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
      GEO_API_OPTIONS
    );

    // Parse JSON response
    const data = await response.json();

    // Return data object containing cities information
    return data;
  } catch (error) {
    // Log any errors that occur during fetching
    console.log(error);
    // Return undefined if an error occurs
    return;
  }
}
