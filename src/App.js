import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  SvgIcon,
} from "@mui/material";
import Search from "./components/Search/Search";
import WeeklyForecast from "./components/WeeklyForecast/WeeklyForecast";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import { fetchWeatherData } from "./api/OpenWeatherService";
import { transformDateFormat } from "./utilities/DatetimeUtils";
import LoadingBox from "./components/Reusable/LoadingBox";
import { ReactComponent as SplashIcon } from "./assets/splash-icon.svg";
import ErrorBox from "./components/Reusable/ErrorBox";
import { ALL_DESCRIPTIONS } from "./utilities/DateConstants";
import { getTodayForecastWeather, getWeekForecastWeather } from "./utilities/DataUtils";


import Toast from "./components/Reusable/Toast";

function App() {
  // State variables
  const [todayWeather, setTodayWeather] = useState(null);
  const [todayForecast, setTodayForecast] = useState([]);
  const [weekForecast, setWeekForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isMyLocation, setIsMyLocation] = useState(false);

  // Handler for when the search input changes
  const searchChangeHandler = async (enteredData) => {
    // Extract latitude and longitude from entered data
    const [latitude, longitude] = enteredData.value.split(" ");

    // Set loading state to true
    setIsLoading(true);

    // Get current date in a specific format
    const currentDate = transformDateFormat();
    
    // Get current timestamp in seconds
    const date = new Date();
    let dt_now = Math.floor(date.getTime() / 1000);

    try {
      // Fetch weather data using latitude and longitude
      const [todayWeatherResponse, weekForecastResponse] =
        await fetchWeatherData(latitude, longitude);

      // Process and filter today's forecast
      const all_today_forecasts_list = getTodayForecastWeather(
        weekForecastResponse,
        currentDate,
        dt_now
      );

      // Process and filter weekly forecast
      const all_week_forecasts_list = getWeekForecastWeather(
        weekForecastResponse,
        ALL_DESCRIPTIONS
      );

      // Update state variables with fetched data
      setTodayForecast([...all_today_forecasts_list]);
      setTodayWeather({ city: enteredData.label, ...todayWeatherResponse });
      setWeekForecast({
        city: enteredData.label,
        list: all_week_forecasts_list,
      });
    } catch (error) {
      // Set error state to true if there's an error fetching data
      setError(true);
    }

    // Set loading state to false after data fetching is complete
    setIsLoading(false);
  };

  // Function to get current geolocation
  const getLocation = (successCallback, errorCallback) => {
    if (navigator.geolocation) {
      // Use geolocation API to get current position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          successCallback(latitude, longitude);
        },
        (error) => {
          errorCallback(error);
        }
      );
    } else {
      errorCallback(new Error("Geolocation is not supported by this browser."));
    }
  };

  // Effect hook to run the getLocation function when isMyLocation state changes
  useEffect(() => {
    // Get user's current location and trigger searchChangeHandler with location data
    getLocation(
      (latitude, longitude) => {
        const data = {
          label: "Your location",
          value: `${latitude} ${longitude}`,
        };
        setError(false);
        searchChangeHandler(data);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, [isMyLocation]); // Run this effect whenever isMyLocation state changes

  // Default app content before data is fetched
  let appContent = (
    <Box
      xs={12}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        minHeight: "500px",
      }}
    >
      <SvgIcon
        component={SplashIcon}
        inheritViewBox
        sx={{ fontSize: { xs: "100px", sm: "120px", md: "140px" } }}
      />
      <Typography
        variant="h4"
        component="h4"
        sx={{
          fontSize: { xs: "12px", sm: "14px" },
          color: "rgba(255,255,255, .85)",
          fontFamily: "Poppins",
          textAlign: "center",
          margin: "2rem 0",
          maxWidth: "80%",
          lineHeight: "22px",
        }}
      >
        Explore current and more weather data
      </Typography>
    </Box>
  );

  // Update appContent based on fetched data and loading/error states
  if (todayWeather && todayForecast && weekForecast) {
    appContent = (
      <React.Fragment>
        <Grid item xs={12} md={todayWeather ? 6 : 12}>
          <Grid item xs={12}>
            <TodayWeather data={todayWeather} forecastList={todayForecast} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <WeeklyForecast data={weekForecast} />
        </Grid>
      </React.Fragment>
    );
  }

  // Show error message if there's an error fetching data
  if (error) {
    appContent = (
      <ErrorBox
        margin="3rem auto"
        flex="inherit"
        errorMessage="Something went wrong"
      />
    );
  }

  // Show loading box while data is being fetched
  if (isLoading) {
    appContent = (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "500px",
        }}
      >
        <LoadingBox value="1">
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontSize: { xs: "10px", sm: "12px" },
              color: "rgba(255, 255, 255, .8)",
              lineHeight: 1,
              fontFamily: "Poppins",
            }}
          >
            Loading...
          </Typography>
        </LoadingBox>
      </Box>
    );
  }

  // Render the main container with app content
  return (
    <Container
      sx={{
        maxWidth: { xs: "95%", sm: "80%", md: "1100px" },
        width: "100%",
        height: "100%",
        margin: "0 auto",
        padding: "1rem 0 3rem",
        marginBottom: "1rem",
        borderRadius: {
          xs: "none",
          sm: "0 0 1rem 1rem",
        },
      }}
    >

  
      <div className="rotating-image" alt="bg "></div>

      <Grid
        sx={{ zIndex: "1", position: "relative" }}
        container
        columnSpacing={2}
      >
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: "100%",
              marginBottom: "1rem",
            }}
          >
            {/* Logo or title */}
            <Typography
              sx={{
                color: "white",
                fontWeight: "bolder",
                letterSpacing: "3px",
                fontSize: "15px",
                lineHeight: "15px",
              }}
            >
              WEATHEROO
            </Typography>
            
            {/* Button to get user's location weather */}
            <Button onClick={() => setIsMyLocation(!isMyLocation)} variant="contained" size="small">
              Get my location weather
            </Button>
          </Box>
          
          {/* Search component */}
          <Search onSearchChange={searchChangeHandler} />
        </Grid>

        <Toast text="Please do enable Location access" />
        {/* Render app content based on conditions */}
        {appContent}

        
      </Grid>
    </Container>
  );
}

export default App;
