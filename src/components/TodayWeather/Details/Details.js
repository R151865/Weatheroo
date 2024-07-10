import React from 'react'; // Importing React
import { Grid } from '@mui/material'; // Importing Grid component from Material-UI
import { getDayMonthFromDate } from '../../../utilities/DatetimeUtils'; // Importing getDayMonthFromDate utility function
import { weatherIcon } from '../../../utilities/IconsUtils'; // Importing weatherIcon utility function
import ErrorBox from '../../Reusable/ErrorBox'; // Importing ErrorBox component
import CityDateDetail from './CityDateDetail'; // Importing CityDateDetail component
import TemperatureWeatherDetail from './TemperatureWeatherDetail'; // Importing TemperatureWeatherDetail component
import WeatherIconDetail from './WeatherIconDetail'; // Importing WeatherIconDetail component
import Layout from '../../Reusable/Layout'; // Importing Layout component

const dayMonth = getDayMonthFromDate(); // Getting day and month from current date using utility function

/**
 * Details component for displaying current weather details.
 * @param {Object} props - Props passed to the Details component
 * @param {Object} props.data - Weather data object containing current weather details
 * @returns {JSX.Element} - Rendered Details component
 */
const Details = ({ data }) => {
  // Checking if no data is provided or if the data is empty or error response
  const noDataProvided =
    !data || Object.keys(data).length === 0 || data.cod === '404';

  let content = <ErrorBox flex="1" type="error" />; // Default content is an ErrorBox if no data is provided

  // If data is available, populate the content with weather details
  if (!noDataProvided)
    content = (
      <>
        {/* Grid item for displaying CityDateDetail */}
        <Grid
          item
          xs={4} // Grid item takes 1/3 of the width in extra small screens
          sx={{
            height: '80px', // Fixed height for the Grid item
          }}
        >
          <CityDateDetail city={data.city} date={dayMonth} /> {/* Passing city and date props to CityDateDetail */}
        </Grid>
        {/* Grid item for displaying TemperatureWeatherDetail */}
        <Grid
          item
          xs={4} // Grid item takes 1/3 of the width in extra small screens
          sx={{
            height: '80px', // Fixed height for the Grid item
          }}
        >
          <TemperatureWeatherDetail
            temperature={data.main.temp} // Temperature value
            description={data.weather[0].description} // Weather description
          />
        </Grid>
        {/* Grid item for displaying WeatherIconDetail */}
        <Grid
          item
          xs={4} // Grid item takes 1/3 of the width in extra small screens
          sx={{
            display: 'flex', // Flex display
            justifyContent: 'center', // Center content horizontally
            alignItems: 'center', // Center content vertically
            height: '80px', // Fixed height for the Grid item
          }}
        >
          <WeatherIconDetail src={weatherIcon(`${data.weather[0].icon}.png`)} /> {/* Passing icon source to WeatherIconDetail */}
        </Grid>
      </>
    );

  return <Layout title="CURRENT WEATHER" content={content} />; // Rendering Layout component with title and content
};

export default Details; // Exporting Details component as default
