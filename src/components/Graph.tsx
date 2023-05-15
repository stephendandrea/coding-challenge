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

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["", "Monday", "Wednesday", "Friday"];

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
          <Row>
            <Col
              xs={1}
              className="d-flex flex-column justify-content-around align-items-center"
            >
              {days.map((day) => {
                return (
                  <div key={day} className="indexName">
                    {day.substring(0, 3)}
                  </div>
                );
              })}
            </Col>
            <Col xs={11} className="overflow-auto">
              <Row className="justify-content-around">
                {months.map((month) => {
                  return (
                    <div key={month} className="indexName">
                      {month.substring(0, 3)}
                    </div>
                  );
                })}
              </Row>
              <Row>
                <div className="d-flex align-items-center justify-content-center w-100">
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
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Graph;
