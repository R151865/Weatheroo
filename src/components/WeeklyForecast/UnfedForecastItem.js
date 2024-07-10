import { Box, Grid, Typography } from '@mui/material'; // Importing necessary components from Material-UI
import React from 'react'; // Importing React
import WeeklyForecastItem from './WeeklyForecastItem'; // Importing WeeklyForecastItem component

/**
 * UnfedForecastItem component for displaying detailed weather information for a specific day.
 * @param {Object} props - Props passed to the UnfedForecastItem component
 * @param {string} props.day - Day of the week
 * @param {string} props.src - Source URL for the weather icon image
 * @param {string} props.value - Value of the weather parameter
 * @returns {JSX.Element} - Rendered UnfedForecastItem component
 */
const UnfedForecastItem = (props) => {
  return (
    <>
      {/* Grid container for displaying weather details */}
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingLeft: { xs: '12px', sm: '20px', md: '32px' }, // Responsive padding left
        }}
      >
        {/* Typography component for displaying the day */}
        <Typography
          xs={12}
          sx={{
            fontFamily: 'Poppins',
            fontWeight: { xs: '400', sm: '600' }, // Responsive font weight
            fontSize: { xs: '12px', sm: '13px', md: '14px' }, // Responsive font size
            color: 'white',
            lineHeight: 1,
            height: '31px', // Fixed height
            alignItems: 'center',
            display: 'flex',
          }}
        >
          {props.day}
        </Typography>
        {/* Box component for displaying weather icon and value */}
        <Box
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '31px', // Fixed height
          }}
        >
          {/* Image component for displaying weather icon */}
          <Box
            component="img"
            sx={{
              width: { xs: '24px', sm: '28px', md: '31px' }, // Responsive width
              height: 'auto', // Maintain aspect ratio
              marginRight: '4px', // Margin to the right
            }}
            alt="weather"
            src={props.src} // Source URL for the weather icon image
          />
          {/* Typography component for displaying weather value */}
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontSize: { xs: '12px', md: '14px' }, // Responsive font size
              color: 'rgba(255,255,255, .8)',
              lineHeight: 1,
              fontFamily: 'Roboto Condensed',
            }}
          >
            {props.value}
          </Typography>
        </Box>
      </Grid>

      {/* Grid container for displaying weekly forecast items */}
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* WeeklyForecastItem components for temperature and clouds */}
        <WeeklyForecastItem type="temperature" value={props.value} color="black" />
        <WeeklyForecastItem type="clouds" value={props.value} color="black" />
      </Grid>

      {/* Grid container for displaying weekly forecast items */}
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* WeeklyForecastItem components for wind and humidity */}
        <WeeklyForecastItem type="wind" value={props.value} color="green" />
        <WeeklyForecastItem type="humidity" value={props.value} color="green" />
      </Grid>
    </>
  );
};

export default UnfedForecastItem; // Exporting UnfedForecastItem component as default
