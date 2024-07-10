import React from 'react';
import { Box, SvgIcon, Typography } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { ReactComponent as HumidityIcon } from '../../assets/humidity.svg';

const WeeklyForecastItem = ({ value, type }) => {
  let iconContent;

  // Determine which icon to display based on the type prop
  if (type === 'temperature')
    iconContent = (
      <ThermostatIcon
        sx={{ fontSize: { xs: '15px', sm: '16px', md: '18px' } }} // Responsive font size based on breakpoints
      />
    );
  else if (type === 'wind')
    iconContent = (
      <AirIcon sx={{ fontSize: { xs: '15px', sm: '16px', md: '18px' } }} />
    );
  else if (type === 'clouds')
    iconContent = (
      <FilterDramaIcon
        sx={{ fontSize: { xs: '15px', sm: '16px', md: '18px' } }}
      />
    );
  else if (type === 'humidity')
    iconContent = (
      <SvgIcon
        component={HumidityIcon} // Using a custom SVG icon for humidity
        inheritViewBox // Ensures the SVG scales appropriately
        sx={{
          fontSize: { xs: '15px', sm: '16px', md: '18px' }, // Responsive font size
        }}
      />
    );

  // Return the styled Box component containing the icon and value
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '31px', // Fixed height for consistent alignment
        color: 'rgba(255, 255, 255, .7)', // Semi-transparent white color for icon and text
        gap: { xs: '3px', sm: '4px', md: '6px' }, // Responsive gap between icon and text
        width: '100%', // Full width to fill the container
      }}
    >
      {iconContent} {/* Render the determined icon */}
      <Typography
        variant="p" // Using variant="p" for a paragraph text
        component="p" // Component type is a paragraph
        sx={{
          fontSize: { xs: '12px', sm: '13px' }, // Responsive font size
          fontWeight: { xs: '400', sm: '600' }, // Responsive font weight
          color: 'white', // White color for text
          fontFamily: 'Poppins', // Font family
          lineHeight: 1, // Normal line height
        }}
      >
        {value} {/* Render the value (temperature, wind speed, etc.) */}
      </Typography>
    </Box>
  );
};

export default WeeklyForecastItem;
