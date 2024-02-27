export const getWeekFromTimestamp = (timestamp: number) => {
    // Create a new Date object using the provided timestamp
    const date = new Date(timestamp * 1000); // Unix timestamps are in seconds, so multiply by 1000 to convert to milliseconds

    // Use the getWeek method to get the week number
    const week = date.getUTCDay(); // Note: getUTCDay returns the day of the week (0 for Sunday through 6 for Saturday)

    return week;
}