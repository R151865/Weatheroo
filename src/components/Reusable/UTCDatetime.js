import { Typography } from '@mui/material'; // Importing Typography component from Material-UI
import React from 'react'; // Importing React
import { getUTCDatetime } from '../../utilities/DatetimeUtils'; // Importing getUTCDatetime function from utilities/DatetimeUtils

/**
 * UTCDatetime component for displaying UTC date and time with specified styles.
 * @returns {JSX.Element} - Rendered UTCDatetime component
 */
const UTCDatetime = () => {
  const utcFullDate = getUTCDatetime(); // Calling utility function to get current UTC date and time
  const utcTimeValue = (
    <Typography
      variant="h3" // Typography variant (heading 3)
      component="h3" // HTML component type (h3)
      sx={{ // Styling object for Typography component using sx prop (theme-aware styling)
        fontWeight: '400', // Font weight (normal)
        fontSize: { xs: '10px', sm: '12px' }, // Responsive font size based on screen size
        color: 'rgba(255, 255, 255, .7)', // Text color (semi-transparent white)
        lineHeight: 1, // Line height (normal)
        paddingRight: '2px', // Right padding
        fontFamily: 'Poppins', // Font family
      }}
    >
      {utcFullDate} GMT {/* Render the UTC date and time with 'GMT' suffix */}
    </Typography>
  );
  return utcTimeValue; // Return the Typography component with UTC date and time
};

export default UTCDatetime; // Exporting UTCDatetime component as default
