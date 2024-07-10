import { Typography, Box } from "@mui/material";  // Importing Typography and Box components from Material-UI
import { useEffect, useState } from "react";      // Importing useEffect and useState hooks from React
import { toastConstants } from "../../constants/constants";  // Importing toastConstants from constants/constants file

export default function Toast({ text, toastState = toastConstants.success }) {
  const [show, setShow] = useState(true);  // State variable 'show' to control visibility of the toast

  useEffect(() => {
    // Effect hook to run logic after component mounts
    setTimeout(() => {
      setShow(false);  // Hide the toast after 3000 milliseconds (3 seconds)
    }, 3000);  // Timeout set to 3 seconds to automatically hide the toast
  }, []);  // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

  // Function to determine styles based on 'toastState'
  const getToastState = () => {
    switch (toastState) {
      case toastConstants.success:
        return { bg: "#1976d2", color: "white" };  // Green background for success toast
      case toastConstants.failure:
        return { bg: "red", color: "white" };    // Red background for failure toast
      case toastConstants.info:
        return { bg: "blue", color: "white" };   // Blue background for info toast
      default:
        return null;
    }
  };

  const toastStyle = getToastState();  // Get the style object based on 'toastState'

  return (
    show && (  // Render the toast only if 'show' is true
      <Box
        sx={{
          padding: "12px 24px",              // Padding of 12px top/bottom, 24px left/right
          background: toastStyle.bg,         // Background color based on 'toastStyle.bg'
          borderRadius: "10px",              // Rounded corners with 10px border-radius
          position: "fixed",                 // Fixed positioning
          top: "5%",                         // 5% from the top of the viewport
          left: "50%",                       // Centered horizontally
          transform: "translate(-50%, 0%)",  // Adjust horizontally to center
        }}
      >
        <Typography
          sx={{
            color: toastStyle.color,  // Text color based on 'toastStyle.color'
            fontSize: "14px",         // Font size of 14px
          }}
        >
          {text} 
        </Typography>
      </Box>
    )
  );
}
