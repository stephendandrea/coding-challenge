import { Suspense } from 'react';
import './App.css';
import commitGraph from './assets/git-graph.gif';
import { CommitSquare } from './components/commit-square';
import { WeekType } from './types/weekType';
import { useWeeks } from './utils/hooks/useWeeks';

function App() {
  
  const { weeks } : { weeks : WeekType[] | null } = useWeeks();

  let maxCommits = 0
  for (const week of weeks) {
    for (const day of week.days) {
      if (day > maxCommits) {
        maxCommits = day
      }
    }
  }
  
  const getColorByCommits = (commits : number) => {
    if (commits === 0) return "#ebedf0"
    if (commits<maxCommits/4) return "#cce295"
    if (commits<maxCommits/2) return "#8dc678"
    if (commits<maxCommits*3/4) return "#4b9747"
    return "#305f2e"
  } 

  // 3. Create a graph that represents the data
  return (
    <div className="container">
      <h2>Coding Challenge</h2>
      <img src={commitGraph} alt="Git Graph" className="git-graph" />
      <p>
        Create the graph above using this data:
        <br />
        <a href="https://api.github.com/repos/facebook/react/stats/commit_activity">
          https://api.github.com/repos/facebook/react/stats/commit_activity
        </a>
      </p>
      
      <div style={{display: 'flex', position: "relative"}}>
      <Suspense fallback={<div>Loading...</div>}>
      {weeks.map((week, column) => (
        <div key={week.week}>
          {week.days.map((commit, row) => {
            return (
              <>
              <div onMouseOver={() => console.log("row, col: ", row, column)}>
                <CommitSquare commits={commit} color={getColorByCommits(commit)} key={row} />
              </div>
              </>
            );
          })}
        </div>
      ))}
    </Suspense>
      </div>
    </div>
  );
}

export default App;
