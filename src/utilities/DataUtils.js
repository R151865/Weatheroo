/**
 * Groups an array of objects by a specified key.
 * @param {string} key The key to group by
 * @returns {function(array: Object[]): Object} Function to group an array of objects
 */
export function groupBy(key) {
  return function group(array) {
    return array.reduce((acc, obj) => {
      // Extract the property value to group by
      const property = obj[key];
      // Destructure obj to exclude 'date' property
      const { date, ...rest } = obj;
      // Initialize an array for the grouped property if not exists
      acc[property] = acc[property] || [];
      // Push the rest of the object into the grouped array
      acc[property].push(rest);
      return acc;
    }, {});
  };
}

/**
 * Calculates the average value of an array of numbers.
 * @param {number[]} array Array of numbers
 * @param {boolean} isRound Whether to round the average (default true)
 * @returns {number} Calculated average
 */
export function getAverage(array, isRound = true) {
  let average = 0;
  if (isRound) {
    // Calculate rounded average
    average = Math.round(array.reduce((a, b) => a + b, 0) / array.length);
    // Ensure average is 0 if it rounds to 0
    if (average === 0) {
      average = 0;
    }
  } else {
    // Calculate average with fixed 2 decimal places
    average = (array.reduce((a, b) => a + b, 0) / array.length).toFixed(2);
  }
  return average;
}

/**
 * Finds the most frequent element in an array.
 * @param {any[]} arr Array of elements
 * @returns {any} Most frequent element
 */
export function getMostFrequentWeather(arr) {
  // Create a hashmap to count occurrences of each element
  const hashmap = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  // Find the key with the maximum count
  return Object.keys(hashmap).reduce((a, b) =>
    hashmap[a] > hashmap[b] ? a : b
  );
}

/**
 * Converts a weather description to an icon name using a provided descriptions list.
 * @param {string} desc Weather description
 * @param {Object[]} descriptions_list List of objects with 'description' and 'icon' properties
 * @returns {string} Icon name corresponding to the description, or 'unknown' if not found
 */
export const descriptionToIconName = (desc, descriptions_list) => {
  // Find the corresponding icon name for the description
  let iconName = descriptions_list.find((item) => item.description === desc);
  // Return the icon name or 'unknown' if not found
  return iconName ? iconName.icon : 'unknown';
};

/**
 * Processes the weekly forecast weather data response and returns an array of average daily forecasts.
 * @param {Object} response Weekly forecast weather data response
 * @param {Object[]} descriptions_list List of objects with 'description' property for weather descriptions
 * @returns {Object[]} Array of daily average forecast objects
 */
export const getWeekForecastWeather = (response, descriptions_list) => {
  let forecast_data = [];
  let descriptions_data = [];

  // Check if response is valid and not empty
  if (!response || Object.keys(response).length === 0 || response.cod === '404')
    return [];

  // Map through each item in the forecast list
  response.list.slice().map((item) => {
    // Extract description and date data
    descriptions_data.push({
      description: item.weather[0].description,
      date: item.dt_txt.substring(0, 10),
    });
    // Extract temperature, humidity, wind, and clouds data
    forecast_data.push({
      date: item.dt_txt.substring(0, 10),
      temp: item.main.temp,
      humidity: item.main.humidity,
      wind: item.wind.speed,
      clouds: item.clouds.all,
    });
    return { item };
  });

  // Group forecast data by date
  const groupByDate = groupBy('date');
  let grouped_forecast_data = groupByDate(forecast_data);
  let grouped_forecast_descriptions = groupByDate(descriptions_data);

  // Get keys (dates) from grouped descriptions
  const description_keys = Object.keys(grouped_forecast_descriptions);
  let dayDescList = [];

  // For each date, find the most frequent weather description
  description_keys.forEach((key) => {
    let singleDayDescriptions = grouped_forecast_descriptions[key].map(
      (item) => item.description
    );
    let mostFrequentDescription = getMostFrequentWeather(singleDayDescriptions);
    dayDescList.push(mostFrequentDescription);
  });

  // Get keys (dates) from grouped forecast data
  const forecast_keys = Object.keys(grouped_forecast_data);
  let dayAvgsList = [];

  // Calculate average temperature, humidity, wind, and clouds for each date
  forecast_keys.forEach((key, idx) => {
    let dayTempsList = [];
    let dayHumidityList = [];
    let dayWindList = [];
    let dayCloudsList = [];

    // Collect data arrays for each metric
    for (let i = 0; i < grouped_forecast_data[key].length; i++) {
      dayTempsList.push(grouped_forecast_data[key][i].temp);
      dayHumidityList.push(grouped_forecast_data[key][i].humidity);
      dayWindList.push(grouped_forecast_data[key][i].wind);
      dayCloudsList.push(grouped_forecast_data[key][i].clouds);
    }

    // Calculate averages and prepare daily forecast object
    dayAvgsList.push({
      date: key,
      temp: getAverage(dayTempsList),
      humidity: getAverage(dayHumidityList),
      wind: getAverage(dayWindList, false),
      clouds: getAverage(dayCloudsList),
      description: dayDescList[idx],
      icon: descriptionToIconName(dayDescList[idx], descriptions_list),
    });
  });

  return dayAvgsList;
};

/**
 * Processes the today's forecast weather data response and returns an array of forecasts.
 * @param {Object} response Today's forecast weather data response
 * @param {string} current_date Current date in 'YYYY-MM-DD' format
 * @param {number} current_datetime Current timestamp in milliseconds
 * @returns {Object[]} Array of today's forecast objects
 */
export const getTodayForecastWeather = (
  response,
  current_date,
  current_datetime
) => {
  let all_today_forecasts = [];

  // Check if response is valid and not empty
  if (!response || Object.keys(response).length === 0 || response.cod === '404')
    return [];

  // Map through each item in the forecast list
  response.list.slice().map((item) => {
    // Check if the forecast item belongs to today and future times
    if (item.dt_txt.startsWith(current_date.substring(0, 10))) {
      if (item.dt > current_datetime) {
        // Extract time, icon, and temperature data for valid forecast items
        all_today_forecasts.push({
          time: item.dt_txt.split(' ')[1].substring(0, 5),
          icon: item.weather[0].icon,
          temperature: Math.round(item.main.temp) + ' °C',
        });
      }
    }
    return all_today_forecasts;
  });

  // Ensure only up to 6 future forecasts are returned
  if (all_today_forecasts.length < 7) {
    return [...all_today_forecasts];
  } else {
    return all_today_forecasts.slice(-6);
  }
};
