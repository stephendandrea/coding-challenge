export const getWeekFromTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const week = date.getUTCDay();
  return week;
};

export const isPastDate = (date: number) => {
  return new Date(date) <= new Date();
};

export const isToday = (date: number) => {
  const passedDate = new Date(date);
  const today = new Date();
  // Set hours, minutes, seconds, and milliseconds to 0 for accurate comparison
  passedDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  return passedDate.getTime() === today.getTime();
};
