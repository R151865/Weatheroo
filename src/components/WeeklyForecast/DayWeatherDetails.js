import { Box, Grid, Typography } from '@mui/material'; // Importing necessary components from Material-UI
import React from 'react'; // Importing React

/**
 * DayWeatherDetails component for displaying weather details for a specific day.
 * @param {Object} props - Props passed to the DayWeatherDetails component
 * @param {string} props.day - Day of the week
 * @param {string} props.src - Source URL for the weather icon image
 * @param {string} props.description - Weather description
 * @returns {JSX.Element} - Rendered DayWeatherDetails component
 */
const DayWeatherDetails = (props) => {
  return (
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
      {/* Box component for displaying weather icon and description */}
      <Box
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
        {/* Typography component for displaying weather description */}
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
          {props.description}
        </Typography>
      </Box>
    </Grid>
  );
};

export default DayWeatherDetails; // Exporting DayWeatherDetails component as default
