import React from 'react';
import { Grid } from '@mui/material';
import { getWeekDays } from '../../utilities/DatetimeUtils';
import { weatherIcon } from '../../utilities/IconsUtils';
import WeeklyForecastItem from './WeeklyForecastItem';
import ErrorBox from '../Reusable/ErrorBox';
import UnfedForecastItem from './UnfedForecastItem';
import DayWeatherDetails from './DayWeatherDetails';
import Layout from '../Reusable/Layout';

const WeeklyForecast = ({ data }) => {
  // Get an array of forecast days (e.g., ['Monday', 'Tuesday', ...])
  const forecastDays = getWeekDays();

  // Check if data is not provided or empty
  const noDataProvided =
    !data ||
    Object.keys(data).length === 0 ||
    !data.list ||
    data.list.length === 0;

  // Initial content for when no data is provided
  let content = (
    <div style={{ width: '100%' }}>
      <ErrorBox type="error" />
    </div>
  );

  // Render content if data is provided
  if (!noDataProvided) {
    content = (
      <Grid
        item
        container
        display="flex"
        flexDirection="column"
        xs={12}
        gap="4px"
      >
        {/* Map through each item in data.list (daily forecast) */}
        {data.list.map((item, idx) => {
          return (
            <Grid
              item
              key={idx}
              xs={12}
              display="flex"
              alignItems="center"
              sx={{
                padding: '2px 0 2px',
                background:
                  'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%',
                boxShadow:
                  'rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                borderRadius: '8px',
              }}
            >
              {/* Display day of the week, weather icon, and description */}
              <DayWeatherDetails
                day={forecastDays[idx]}
                src={weatherIcon(`${item.icon}`)}
                description={item.description}
              />

              {/* Container for temperature and clouds forecast items */}
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Display temperature and clouds forecast */}
                <WeeklyForecastItem
                  type="temperature"
                  value={Math.round(item.temp) + ' °C'}
                  color="black"
                />
                <WeeklyForecastItem
                  type="clouds"
                  value={item.clouds + ' %'}
                  color="black"
                />
              </Grid>

              {/* Container for wind and humidity forecast items */}
              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Display wind and humidity forecast */}
                <WeeklyForecastItem
                  type="wind"
                  value={item.wind + ' m/s'}
                  color="green"
                />
                <WeeklyForecastItem
                  type="humidity"
                  value={item.humidity + ' %'}
                  color="green"
                />
              </Grid>
            </Grid>
          );
        })}
        {/* Display an additional item for the sixth day if there are exactly 5 items in data.list */}
        {data.list.length === 5 && (
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            sx={{
              padding: '2px 0 2px',
              background:
                'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%',
              boxShadow:
                'rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              borderRadius: '8px',
            }}
          >
            {/* Display information for the sixth day */}
            <UnfedForecastItem
              day={forecastDays[5]}
              value="NaN"
              src={weatherIcon('unknown.png')}
            />
          </Grid>
        )}
      </Grid>
    );
  }

  // Return the layout with the rendered content
  return (
    <Layout
      title="WEEKLY FORECAST"
      content={content}
      mb=".8rem"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '3rem 0 0',
      }}
    />
  );
};

export default WeeklyForecast;
