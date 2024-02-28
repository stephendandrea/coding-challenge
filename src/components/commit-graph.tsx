import { WeekType } from "../types/weekType";
import { CommitSquare } from "./commit-square";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useCommitHistory } from "../utils/hooks/useCommitHistory";
import { isPastDate, isToday } from "../utils/functions/dates";
import { styled } from "styled-components";

export const CommitGraph = () => {
  const { commitHistory }: { commitHistory: WeekType[] | null } =
    useCommitHistory();

  let maxCommits = 0;
  if (commitHistory) {
    for (const week of commitHistory) {
      for (const day of week.days) {
        if (day > maxCommits) {
          maxCommits = day;
        }
      }
    }
  }

  const getColorByCommits = (commits: number) => {
    if (commits === 0) return "#ebedf0";
    if (commits < maxCommits / 4) return "#cce295";
    if (commits < maxCommits / 2) return "#8dc678";
    if (commits < (maxCommits * 3) / 4) return "#4b9747";
    return "#305f2e";
  };

  const getDayOfWeekLabel = (dayIndex: number) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek[dayIndex];
  };

  const getMonthLabel = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("default", { month: "short" });
  };

  const isFirstWeekofMonth = (week: WeekType) => {
    return new Date(week.week * 1000).getDate() <= 7;
  };

  const RenderMonthLabel = ({ week }: { week: WeekType }) => {
    if (!isFirstWeekofMonth(week)) return null;
    return (
      <StyledMonthLabelContainer>
        <StyledMonthLabel>
          <span>{getMonthLabel(week.week * 1000)}</span>
        </StyledMonthLabel>
      </StyledMonthLabelContainer>
    );
  };

  const RenderDayLabel = ({ column, row }: { column: number; row: number }) => {
    if (column === 0 && (row === 1 || row === 3 || row === 5)) {
      return (
        <StyledDayLabelContainer>
          <StyledDayLabel>{getDayOfWeekLabel(row)}</StyledDayLabel>
        </StyledDayLabelContainer>
      );
    } else {
      return null;
    }
  };

  return (
    <StyledContainer>
      {commitHistory?.map((week, column) => (
        <div key={column}>
          <RenderMonthLabel week={week} />
          {week.days.map((commit, row) => {
            return (
              <>
                <RenderDayLabel column={column} row={row} />
                <TooltipProvider key={row}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {isPastDate(
                        week.week * 1000 + row * 24 * 60 * 60 * 1000
                      ) ||
                      isToday(week.week * 1000 + row * 24 * 60 * 60 * 1000) ? (
                        <div>
                          <CommitSquare
                            color={getColorByCommits(commit)}
                            key={row}
                          />
                        </div>
                      ) : null}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {commit !== 0 ? commit : <span>No </span>} commits on{" "}
                        {new Date(
                          week.week * 1000 + row * 24 * 60 * 60 * 1000
                        ).toLocaleDateString()}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </>
            );
          })}
        </div>
      ))}
    </StyledContainer>
  );
};

const StyledMonthLabelContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: -25,
});

const StyledMonthLabel = styled.div({
  width: "1.5em",
  textAlign: "center",
  padding: "0.5em",
  fontSize: "0.75em",
  position: "absolute",
  left: -5,
});

const StyledDayLabelContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  left: -25,
});

const StyledDayLabel = styled.div({
  width: "1.5em",
  textAlign: "center",
  padding: "0.5em",
  fontSize: "0.75em",
  position: "absolute",
  top: -9,
});

const StyledContainer = styled.div({
  display: "flex",
  position: "relative",
});
