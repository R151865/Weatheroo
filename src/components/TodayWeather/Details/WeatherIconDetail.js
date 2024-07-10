import { Box } from '@mui/material'; // Importing Box component from Material-UI
import React from 'react'; // Importing React

/**
 * WeatherIconDetail component for displaying weather icon.
 * @param {Object} props - Props passed to the WeatherIconDetail component
 * @param {string} props.src - Source URL of the weather icon image
 * @returns {JSX.Element} - Rendered WeatherIconDetail component
 */
const WeatherIconDetail = (props) => {
  return (
    <Box
      component="img" // Rendering component as 'img' element
      sx={{
        width: { xs: '50px', sm: '60px' }, // Responsive width
        height: 'auto', // Auto height to maintain aspect ratio
        display: 'flex', // Flex display
        alignItems: 'center', // Center content vertically
        justifyContent: 'center', // Center content horizontally
        alignSelf: 'center', // Align self at center within parent
        margin: '0 auto', // Center horizontally with auto margin
        padding: '0', // No padding
      }}
      alt="weather" // Alternative text for accessibility
      src={props.src} // Source URL of the weather icon image
    />
  );
};

export default WeatherIconDetail; // Exporting WeatherIconDetail component as default
