import { Box, Typography } from '@mui/material'; // Importing Box and Typography components from Material-UI
import React from 'react'; // Importing React

/**
 * CityDateDetail component for displaying city name and date details.
 * @param {Object} props - Props passed to the CityDateDetail component
 * @param {string} props.city - City name to display
 * @param {string} props.date - Date to display (e.g., "Today")
 * @returns {JSX.Element} - Rendered CityDateDetail component
 */
const CityDateDetail = (props) => {
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
      {/* Typography for displaying city name */}
      <Typography
        variant="h3" // Heading variant
        component="h3" // Heading element type
        sx={{
          fontFamily: 'Poppins', // Font family
          fontWeight: '600', // Font weight
          fontSize: { xs: '18px', md: '22px' }, // Responsive font size
          color: 'white', // Text color
          textTransform: 'uppercase', // Uppercase text
          lineHeight: 1, // Line height
          marginBottom: '8px', // Bottom margin
        }}
      >
        {props.city} {/* Displaying the city name */}
      </Typography>

      {/* Typography for displaying date */}
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
        Today {props.date} {/* Displaying the date */}
      </Typography>
    </Box>
  );
};

export default CityDateDetail; // Exporting CityDateDetail component as default
