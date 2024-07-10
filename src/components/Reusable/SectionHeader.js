import { Typography } from '@mui/material'; // Importing Typography component from Material-UI
import React from 'react'; // Importing React

/**
 * SectionHeader component for displaying a styled section title.
 * @param {Object} props - Props passed to the SectionHeader component
 * @param {string} props.title - Title text to be displayed
 * @param {string} props.mb - Optional margin bottom value for the Typography component
 * @returns {JSX.Element} - Rendered SectionHeader component
 */
const SectionHeader = ({ title, mb }) => {
  return (
    <Typography
      variant="h5" // Typography variant (heading 5)
      component="h5" // HTML component type (h5)
      sx={{ // Styling object for Typography component using sx prop (theme-aware styling)
        fontSize: { xs: '12px', sm: '16px', md: '18px' }, // Responsive font size based on screen size
        color: 'rgba(255,255,255,.7)', // Text color (semi-transparent white)
        fontWeight: '600', // Font weight (600 for bold)
        lineHeight: 1, // Line height (normal)
        textAlign: 'center', // Text alignment (centered)
        fontFamily: 'Roboto Condensed', // Font family
        marginBottom: mb ? mb : '1rem', // Margin bottom value (default: 1rem, or specified by props)
      }}
    >
      {title} {/* Render the title text */}
    </Typography>
  );
};

export default SectionHeader; // Exporting SectionHeader component as default
