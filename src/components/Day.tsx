type DayProp = {
  commitsForDay: number;
  highestCommit: number;
};

const Day = ({ commitsForDay, highestCommit }: DayProp) => {
  return (
    <div
      style={{
        backgroundColor: `rgba(48, 95, 46, ${commitsForDay / highestCommit})`,
        height: "18px",
        width: "18px",
        margin: "1px",
      }}
    ></div>
  );
};

export default Day;
