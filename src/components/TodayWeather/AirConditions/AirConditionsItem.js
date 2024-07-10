import { Box, Grid, SvgIcon } from '@mui/material'; // Importing Box, Grid, and SvgIcon components from Material-UI
import React from 'react'; // Importing React
import ThermostatIcon from '@mui/icons-material/Thermostat'; // Importing ThermostatIcon from Material-UI icons
import AirIcon from '@mui/icons-material/Air'; // Importing AirIcon from Material-UI icons
import FilterDramaIcon from '@mui/icons-material/FilterDrama'; // Importing FilterDramaIcon from Material-UI icons
import { ReactComponent as HumidityIcon } from '../../../assets/humidity.svg'; // Importing HumidityIcon as React component from assets/humidity.svg

/**
 * AirConditionsItem component for displaying air condition details with an icon.
 * @param {Object} props - Props passed to the AirConditionsItem component
 * @param {string} props.type - Type of air condition item ('temperature', 'wind', 'clouds', 'humidity')
 * @param {string} props.title - Title or label for the air condition item
 * @param {string} props.value - Value or measurement for the air condition item
 * @returns {JSX.Element} - Rendered AirConditionsItem component
 */
const AirConditionsItem = (props) => {
  let iconContent; // Variable to hold the JSX icon content based on props.type

  // Determine the icon content based on props.type
  if (props.type === 'temperature')
    iconContent = <ThermostatIcon sx={{ fontSize: '18px' }} />;
  else if (props.type === 'wind')
    iconContent = <AirIcon sx={{ fontSize: '18px' }} />;
  else if (props.type === 'clouds')
    iconContent = <FilterDramaIcon sx={{ fontSize: '18px' }} />;
  else if (props.type === 'humidity')
    iconContent = (
      <SvgIcon
        component={HumidityIcon} // Using SvgIcon with HumidityIcon component as SVG source
        inheritViewBox
        sx={{ fontSize: '18px' }} // Styling SVG icon size
      />
    );

  return (
    <Grid
      item
      xs={3} // Grid item takes 1/4 of the width in extra small screens
      sx={{
        padding: '0', // No padding for the Grid item
        height: '80px', // Fixed height for the Grid item
      }}
    >
      {/* Top Grid item for displaying icon and title */}
      <Grid
        item
        xs={12} // Grid item takes full width in extra small screens
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: '100%', // Full width
          height: '40px', // Fixed height for the top part
          flexDirection: { xs: 'column', sm: 'row' }, // Flex direction changes based on screen size
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'rgba(255, 255, 255, .7)', // Text color
            padding: 0, // No padding for the Box
          }}
        >
          {iconContent} {/* Displaying the determined icon content */}
        </Box>
        <Box
          sx={{
            color: 'rgba(255, 255, 255, .7)', // Text color
            fontSize: { xs: '10px', sm: '12px', md: '14px' }, // Responsive font size
            paddingLeft: { xs: '0px', sm: '4px', md: '6px' }, // Left padding based on screen size
            paddingTop: { xs: '2px', sm: '0px' }, // Top padding based on screen size
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {props.title} {/* Displaying the title */}
        </Box>
      </Grid>
      {/* Bottom Grid item for displaying value */}
      <Grid
        item
        xs={12} // Grid item takes full width in extra small screens
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ height: '40px' }} // Fixed height for the bottom part
      >
        <Box
          sx={{
            fontFamily: 'Poppins', // Font family
            fontWeight: '600', // Font weight
            fontSize: { xs: '12px', sm: '14px', md: '16px' }, // Responsive font size
            color: 'white', // Text color
            lineHeight: 1, // Line height
          }}
        >
          {props.value} {/* Displaying the value */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AirConditionsItem; // Exporting AirConditionsItem component as default
