import React from 'react'; // Importing React
import ErrorBox from '../../Reusable/ErrorBox'; // Importing ErrorBox component from '../../Reusable/ErrorBox'
import AirConditionsItem from './AirConditionsItem'; // Importing AirConditionsItem component from './AirConditionsItem'
import Layout from '../../Reusable/Layout'; // Importing Layout component from '../../Reusable/Layout'

/**
 * TodayWeatherAirConditions component for displaying air conditions information.
 * @param {Object} props - Props passed to the TodayWeatherAirConditions component
 * @param {Object} props.data - Weather data object containing air conditions information
 * @returns {JSX.Element} - Rendered TodayWeatherAirConditions component
 */
const TodayWeatherAirConditions = ({ data }) => {
  // Checking if no data is provided or if the data object is empty or has a '404' error code
  const noDataProvided =
    !data || Object.keys(data).length === 0 || data.cod === '404';

  let content = <ErrorBox flex="1" type="error" />; // Default content as ErrorBox component if no data is provided

  // If data is provided, populate content with AirConditionsItem components displaying specific air condition details
  if (!noDataProvided)
    content = (
      <>
        <AirConditionsItem
          title="Real Feel"
          value={`${Math.round(data.main.feels_like)} °C`}
          type="temperature"
        />
        <AirConditionsItem
          title="Wind"
          value={`${data.wind.speed} m/s`}
          type="wind"
        />
        <AirConditionsItem
          title="Clouds"
          value={`${Math.round(data.clouds.all)} %`}
          type="clouds"
        />
        <AirConditionsItem
          title="Humidity"
          value={`${Math.round(data.main.humidity)} %`}
          type="humidity"
        />
      </>
    );

  return (
    <Layout
      title="AIR CONDITIONS" // Title displayed in the Layout component
      content={content} // Content to be displayed in the Layout component
      mb="1rem" // Margin bottom for the Layout component
      sx={{ marginTop: '2.9rem' }} // Custom styles applied using sx prop (theme-aware styling)
    />
  );
};

export default TodayWeatherAirConditions; // Exporting TodayWeatherAirConditions component as default
