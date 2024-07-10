// Constants for API URLs and keys
const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_API_KEY = "20072c8614708e5625d82e18255d8db2";

// Options for Geo API request headers
const GEO_API_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4f0dcce84bmshac9e329bd55fd14p17ec6fjsnff18c2e61917",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

// Function to fetch weather data based on latitude and longitude
export async function fetchWeatherData(lat, lon) {
  try {
    // Make concurrent API requests using Promise.all
    let [weatherPromise, forecastPromise] = await Promise.all([
      fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      ),
      fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      ),
    ]);

    // Extract JSON responses from promises
    const weatherResponse = await weatherPromise.json();
    const forecastResponse = await forecastPromise.json();

    // Return an array with weather and forecast responses
    return [weatherResponse, forecastResponse];
  } catch (error) {
    // Handle errors, if any, and log them
    console.log(error);
  }
}

// Function to fetch cities based on input query
export async function fetchCities(input) {
  try {
    // Make a fetch request to Geo API with specified parameters and options
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
      GEO_API_OPTIONS
    );

    // Extract JSON data from the response
    const data = await response.json();

    // Return the data fetched from Geo API
    return data;
  } catch (error) {
    // Handle errors, if any, log them, and return undefined
    console.log(error);
    return;
  }
}
