import { CommitWeek } from "../types/CommitWeek";

const getHighestCommitDay = (weeks: CommitWeek[]) => {
  let highest = 0;
  weeks.forEach((item) => {
    if (item.total < highest) return;
    item.days.forEach((day) => {
      if (day > highest) {
        highest = day;
      }
    });
  });
  return highest;
};

export default getHighestCommitDay;
