import { useState, useEffect } from "react";
import useApi from "../hooks/useApi";
import { Container, Row, Col } from "react-bootstrap";
import getHighestCommitDay from "../utils/getHighestDay";
import Day from "./Day";

type Week = {
  total: number;
  week: number;
  days: number[];
};

const Graph = () => {
  const [highestDay, setHighestDay] = useState(0);
  const { data, loading, error, reFetch } = useApi({
    url: "https://api.github.com/repos/facebook/react/stats/commit_activity",
  });

  useEffect(() => {
    if (data) {
      setHighestDay(getHighestCommitDay(data));
    }
  }, [data]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          <div className="d-flex align-items-center">
            {data.map((item: Week) => {
              return (
                <div className="d-flex flex-column align-items-center">
                  {item.days.map((day: number, index) => {
                    return (
                      <Day
                        commitsForDay={day}
                        highestCommit={highestDay}
                        key={item.week + index}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </Container>
      )}
    </>
  );
};

export default Graph;
