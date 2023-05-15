export const getColor = (number: number, highestNumber: number): string => {
  const range = Math.floor(highestNumber / 4);
  const thresholds = [
    { color: " rgb(48, 95, 46)", min: range * 3, max: highestNumber },
    { color: "rgb(75, 151, 71)", min: range * 2, max: range * 3 - 1 },
    { color: "rgb(141, 198, 120)", min: range, max: range * 2 - 1 },
    { color: "rgb(204, 226, 149)", min: 1, max: range - 1 },
    { color: "rgb(235, 237, 240)", min: 0, max: 0 },
  ];

  for (const threshold of thresholds) {
    if (number >= threshold.min && number <= threshold.max) {
      return threshold.color;
    }
  }

  return "";
};
