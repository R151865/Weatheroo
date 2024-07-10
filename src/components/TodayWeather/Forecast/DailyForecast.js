import React from 'react'; // Importing React
import { Grid, Typography } from '@mui/material'; // Importing Grid and Typography components from Material-UI
import DailyForecastItem from './DailyForecastItem'; // Importing DailyForecastItem component
import ErrorBox from '../../Reusable/ErrorBox'; // Importing ErrorBox component
import Layout from '../../Reusable/Layout'; // Importing Layout component

/**
 * DailyForecast component for displaying daily weather forecasts.
 * @param {Object} props - Props passed to the DailyForecast component
 * @param {Object} props.data - Current weather data
 * @param {Array} props.forecastList - List of daily forecast items
 * @returns {JSX.Element} - Rendered DailyForecast component
 */
const DailyForecast = ({ data, forecastList }) => {
  // Checking if no data is provided or if data is empty or has 404 status
  const noDataProvided =
    !data ||
    !forecastList ||
    Object.keys(data).length === 0 ||
    data.cod === '404' ||
    forecastList.cod === '404';

  let subHeader; // Variable for subHeader content

  // Conditionally rendering subHeader if data is available
  if (!noDataProvided && forecastList.length > 0) {
    subHeader = (
      <Typography
        variant="h5" // Heading variant
        component="h5" // Heading element type
        sx={{
          fontSize: { xs: '10px', sm: '12px' }, // Responsive font size
          textAlign: 'center', // Center text alignment
          lineHeight: 1, // Line height
          color: '#04C4E0', // Text color
          fontFamily: 'Roboto Condensed', // Font family
          marginBottom: '1rem', // Bottom margin
        }}
      >
        {forecastList.length === 1
          ? '1 available forecast'
          : `${forecastList.length} available forecasts`}
      </Typography>
    );
  }

  let content; // Variable for main content

  // Rendering error box if no data is provided
  if (noDataProvided) content = <ErrorBox flex="1" type="error" />;

  // Rendering forecast items if data is available
  if (!noDataProvided && forecastList.length > 0) {
    content = (
      <Grid
        item
        container
        xs={12} // Full width on extra small screens
        sx={{
          display: 'flex', // Flex display
          justifyContent: 'center', // Center content horizontally
          width: 'fit-content', // Fit content width
        }}
        spacing="4px" // Spacing between grid items
      >
        {/* Mapping through forecastList to render DailyForecastItem */}
        {forecastList.map((item, idx) => (
          <Grid
            key={idx} // Unique key for each item
            item
            xs={4} // 4 columns on extra small screens
            sm={2} // 2 columns on small screens
            display="flex" // Flex display
            flexDirection="column" // Column direction for children
            alignItems="center" // Center content horizontally
            sx={{
              marginBottom: { xs: '1rem', sm: '0' }, // Responsive bottom margin
            }}
          >
            <DailyForecastItem item={item} data={data} /> {/* Rendering DailyForecastItem */}
          </Grid>
        ))}
      </Grid>
    );
  }

  // Rendering info box if forecastList is empty
  if (!noDataProvided && forecastList && forecastList.length === 0) {
    subHeader = (
      <ErrorBox
        flex="1" // Flex property
        type="info" // Info type for styling
        margin="2rem auto" // Margin for positioning
        errorMessage="No available forecasts for tonight." // Error message to display
      />
    );
  }

  return (
    <Layout
      title="TODAY'S FORECAST" // Title of the layout
      content={content} // Main content of the layout
      sectionSubHeader={subHeader} // Sub header content of the layout
      sx={{ marginTop: '2.9rem' }} // Styling for the layout
      mb="0.3rem" // Bottom margin for the layout
    />
  );
};

export default DailyForecast; // Exporting DailyForecast component as default
