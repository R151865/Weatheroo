import { MONTHS, DAYS } from './DateConstants';

const date = new Date();

/**
 * Returns an array of weekdays starting from the current day.
 * Example: If today is Wednesday, it returns ["Wednesday", "Thursday", ..., "Tuesday"]
 */
export function getWeekDays() {
  const dayInAWeek = new Date().getDay();
  const days = DAYS.slice(dayInAWeek, DAYS.length).concat(
    DAYS.slice(0, dayInAWeek)
  );
  return days;
}

/**
 * Returns a string in the format "day month" based on the current date.
 * Example: "9 Jul" for July 9th.
 */
export function getDayMonthFromDate() {
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const day = date.getUTCDate();

  return day + ' ' + month;
}

/**
 * Transforms the current date into a formatted string "yyyy-mm-dd hh:mm:ss".
 * Example: "2024-07-09 15:30:00"
 */
export function transformDateFormat() {
  const month = date.toLocaleString('en-US', { month: '2-digit' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();
  const time = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });

  const newFormatDate = year.toString().concat('-', month, '-', day, ' ', time);
  return newFormatDate;
}

/**
 * Returns a string with the UTC date and time in "yyyy-mm-dd hh:mm:ss" format.
 * Example: "2024-07-09 12:30:00" (assuming UTC time is 12:30:00)
 */
export function getUTCDatetime() {
  const utcTime = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: 'UTC',
  });

  const isoDateString = new Date().toISOString();
  const utcDate = isoDateString.split('T')[0].concat(' ', utcTime);
  return utcDate;
}

/**
 * Returns a string with the UTC time in "hh:mm:ss" format.
 * Example: "12:30:00" (assuming UTC time is 12:30:00)
 */
export function getUTCTime() {
  const utcTime = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
    timeZone: 'UTC',
  });

  return utcTime;
}
