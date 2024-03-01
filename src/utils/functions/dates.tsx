import { WeekType } from "../../types/weekType";

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
  passedDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  return passedDate.getTime() === today.getTime();
};

export const GetDayOfWeekLabel = ({ dayIndex }: { dayIndex: number }) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return <span>{daysOfWeek[dayIndex]}</span>;
};

export const GetMonthLabel = ({ timestamp }: { timestamp: number }) => {
  return (
    <span>
      {new Date(timestamp).toLocaleString("en-US", { month: "short" })}
    </span>
  );
};

export const isFirstWeekOfMonth = (week: WeekType) => {
  return new Date(week.week * 1000).getDate() <= 7;
};
