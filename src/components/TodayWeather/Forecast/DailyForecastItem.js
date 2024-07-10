import { Box, Typography } from '@mui/material'; // Importing Box and Typography components from Material-UI
import React from 'react'; // Importing React
import { weatherIcon } from '../../../utilities/IconsUtils'; // Importing weatherIcon function from IconsUtils

/**
 * DailyForecastItem component for displaying a single daily forecast item.
 * @param {Object} props - Props passed to the DailyForecastItem component
 * @param {Object} props.item - Forecast item data object
 * @param {Object} props.data - Current weather data object
 * @returns {JSX.Element} - Rendered DailyForecastItem component
 */
const DailyForecastItem = (props) => {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%', // Background gradient
        borderRadius: '8px', // Border radius
        boxShadow:
          'rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px', // Box shadow
        textAlign: 'center', // Center align text
        padding: '4px 0', // Padding
        width: '100%', // Full width
      }}
    >
      <Typography
        variant="h3" // Heading variant
        component="h3" // Heading element type
        sx={{
          fontWeight: '400', // Font weight
          fontSize: { xs: '10px', sm: '12px' }, // Responsive font size
          color: 'rgba(255, 255, 255, .7)', // Text color
          lineHeight: 1, // Line height
          padding: '4px', // Padding
          fontFamily: 'Poppins', // Font family
        }}
      >
        {props.item.time} {/* Displaying forecast item time */}
      </Typography>
      <Box
        sx={{
          display: 'flex', // Flex display
          alignItems: 'center', // Center align items
          color: 'white', // Text color
          padding: '4px', // Padding
        }}
      >
        <Box
          component="img" // Image component
          sx={{
            width: { xs: '36px', sm: '42px' }, // Responsive width
            height: 'auto', // Auto height
            display: 'flex', // Flex display
            alignItems: 'center', // Center align items
            justifyContent: 'center', // Center justify content
            alignSelf: 'center', // Center self
            margin: '0 auto', // Margin
          }}
          alt="weather" // Alt attribute for accessibility
          src={weatherIcon(`${props.data.weather[0].icon}.png`)} // Weather icon source
        />
      </Box>
      <Typography
        variant="h3" // Heading variant
        component="h3" // Heading element type
        sx={{
          fontWeight: '600', // Font weight
          fontSize: { xs: '12px', sm: '14px' }, // Responsive font size
          color: 'white', // Text color
          textTransform: 'uppercase', // Uppercase text
          lineHeight: 1, // Line height
          marginBottom: { xs: '8px', md: '0' }, // Responsive bottom margin
          fontFamily: 'Poppins', // Font family
        }}
      >
        {props.item.temperature} {/* Displaying forecast item temperature */}
      </Typography>
    </Box>
  );
};

export default DailyForecastItem; // Exporting DailyForecastItem component as default
