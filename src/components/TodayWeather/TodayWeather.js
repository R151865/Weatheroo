import { Grid } from '@mui/material'; // Importing Grid component from Material-UI
import React from 'react'; // Importing React

import AirConditions from './AirConditions/AirConditions'; // Importing AirConditions component
import DailyForecast from './Forecast/DailyForecast'; // Importing DailyForecast component
import Details from './Details/Details'; // Importing Details component

/**
 * TodayWeather component for displaying today's weather details.
 * @param {Object} props - Props passed to the TodayWeather component
 * @param {Object} props.data - Current weather data object
 * @param {Array} props.forecastList - List of forecast items
 * @returns {JSX.Element} - Rendered TodayWeather component
 */
const TodayWeather = ({ data, forecastList }) => {
  return (
    <Grid container sx={{ padding: '3rem 0rem 0rem' }}> {/* Grid container with padding */}
      <Details data={data} /> {/* Details component with current weather data */}
      <AirConditions data={data} /> {/* AirConditions component with current weather data */}
      <DailyForecast data={data} forecastList={forecastList} /> {/* DailyForecast component with current weather data and forecast list */}
    </Grid>
  );
};

export default TodayWeather; // Exporting TodayWeather component as default
