import { Box, Typography } from '@mui/material'; // Importing Box and Typography components from Material-UI
import React from 'react'; // Importing React

/**
 * TemperatureWeatherDetail component for displaying temperature and weather description.
 * @param {Object} props - Props passed to the TemperatureWeatherDetail component
 * @param {number} props.temperature - Temperature value to display
 * @param {string} props.description - Weather description to display
 * @returns {JSX.Element} - Rendered TemperatureWeatherDetail component
 */
const TemperatureWeatherDetail = (props) => {
  return (
    <Box
      sx={{
        display: 'flex', // Flex display
        flexDirection: 'column', // Column direction for children
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        textAlign: 'center', // Center text
        height: '100%', // Full height of parent container
      }}
    >
      {/* Typography for displaying temperature */}
      <Typography
        variant="h3" // Heading variant
        component="h3" // Heading element type
        sx={{
          fontWeight: '600', // Font weight
          fontSize: { xs: '30px',  md: '24px' }, // Responsive font size
          color: 'white', // Text color
          textTransform: 'uppercase', // Uppercase text
          lineHeight: 1, // Line height
          marginBottom: '8px', // Bottom margin
          fontFamily: 'Poppins', // Font family
        }}
      >
        {Math.round(props.temperature)} °C {/* Displaying rounded temperature value */}
      </Typography>
      
      {/* Typography for displaying weather description */}
      <Typography
        variant="h4" // Heading variant
        component="h4" // Heading element type
        sx={{
          fontSize: { xs: '10px', sm: '12px', md: '14px' }, // Responsive font size
          color: 'rgba(255,255,255, .7)', // Text color with opacity
          lineHeight: 1, // Line height
          letterSpacing: { xs: '1px', sm: '0' }, // Letter spacing
          fontFamily: 'Roboto Condensed', // Font family
        }}
      >
        {props.description} {/* Displaying weather description */}
      </Typography>
    </Box>
  );
};

export default TemperatureWeatherDetail; // Exporting TemperatureWeatherDetail component as default
