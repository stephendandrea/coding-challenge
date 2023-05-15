import "./App.css";
import commitGraph from "./assets/git-graph.gif";
import Graph from "./components/Graph";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
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
      <br />
      <Graph />
      <br />
      <h3>Notes:</h3>
      <ul>
        <li>
          Commit color density should be relative to the highest single day
          activity and broken into 4 quarters.
        </li>
        <li>
          For example, if the highest single day activity is 84 commits the
          breakdown of color density would be:
          <br />
          <br />
          <code>
            Darkest: 63-84 commits
            <br />
            Darker: 42 - 62 commits
            <br />
            Base: 21 - 41 commits
            <br />
            Lighter: 1 - 21 commits
            <br />
            Lightest (empty): 0 commits
          </code>
        </li>
      </ul>
    </div>
  );
};

export default App;
