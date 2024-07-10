import * as React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'; // Importing ErrorOutlineIcon from Material-UI icons
import Box from '@mui/material/Box'; // Importing Box component from Material-UI
import { Typography } from '@mui/material'; // Importing Typography component from Material-UI

export default function ErrorBox(props) {
  return (
    <Box
      display={props.display || 'flex'} // Display type (flex by default)
      justifyContent={props.justifyContent || 'center'} // Justify content (center by default)
      alignItems={props.alignItems || 'center'} // Align items (center by default)
      margin={props.margin || '1rem auto'} // Margin (1rem auto by default)
      gap={props.gap || '8px'} // Gap between children (8px by default)
      flex={props.flex || 'auto'} // Flex property (auto by default)
      width={props.width || 'auto'} // Width (auto by default)
      sx={{ // Styling object using sx prop (theme-aware styling)
        padding: '1rem', // Padding of the box
        flexDirection: { xs: 'column', sm: 'row' }, // Flex direction based on screen size (column on xs, row on sm)
        color: props.type === 'info' ? '#f5a922' : '#DC2941', // Color based on type prop ('info' or default)
        border: props.type === 'info' ? '1px solid #f5a922' : '1px solid #DC2941', // Border based on type prop
        borderRadius: '8px', // Border radius
        background: // Background color based on type prop
          props.type === 'info'
            ? 'rgba(245, 169, 34, .1)'
            : 'rgba(220, 41, 65, .25)',
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: '24px' }} /> {/* Error outline icon with specific font size */}

      <Typography
        variant="h2" // Typography variant (h2)
        component="h2" // HTML component type (h2)
        sx={{ // Typography styling using sx prop
          fontSize: // Font size based on type prop and screen size
            props.type === 'info'
              ? { xs: '12px', sm: '14px' }
              : { xs: '14px', sm: '16px' },
          fontFamily: 'Poppins', // Font family
          textAlign: 'center', // Text alignment
        }}
      >
        {props.errorMessage || 'Internal error'} {/* Error message text or default */}
      </Typography>
    </Box>
  );
}
