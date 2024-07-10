import * as React from 'react'; // Importing React
import CircularProgress from '@mui/material/CircularProgress'; // Importing CircularProgress component from Material-UI
import Box from '@mui/material/Box'; // Importing Box component from Material-UI

/**
 * LoadingBox component to display a loading spinner with optional children.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Optional children elements to render alongside the loading spinner
 * @returns {JSX.Element} - Rendered LoadingBox component
 */
export default function LoadingBox(props) {
  return (
    <Box
      sx={{ // Styling object for Box component using sx prop (theme-aware styling)
        display: 'flex', // Display as flex container
        justifyContent: 'center', // Center content horizontally
        flexDirection: 'column', // Arrange items in a column
        alignItems: 'center', // Center items vertically
        gap: '1rem', // Spacing between child elements
      }}
    >
      <CircularProgress sx={{ color: 'rgba(255,255,255, .8)' }} /> {/* CircularProgress component with custom color */}
      {props.children} {/* Render optional children elements */}
    </Box>
  );
}
