import { useMemo } from "react";
import { getColor } from "../utils/getColor";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

type DayProp = {
  commitsForDay: number;
  highestCommit: number;
};

const Day = ({ commitsForDay, highestCommit }: DayProp) => {
  const renderTooltip = (number: number) => (
    <Tooltip id="button-tooltip">{number} commits</Tooltip>
  );

  const color = useMemo(() => {
    return getColor(commitsForDay, highestCommit);
  }, [commitsForDay, highestCommit]);

  return (
    <OverlayTrigger placement="top" overlay={renderTooltip(commitsForDay)}>
      <div
        style={{
          backgroundColor: color,
          height: "18px",
          width: "18px",
          margin: "1px",
        }}
      ></div>
    </OverlayTrigger>
  );
};

export default Day;
