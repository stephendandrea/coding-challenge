import "./App.css";
import { CommitGraph } from "./components/commit-graph";

function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1>Facebook React commit graph</h1>
      </div>
      <div className="flex justify-center mt-10">
        <CommitGraph />
      </div>
      <div className="flex justify-center items-center text-xs mt-5">
        <h4>
          Technical challenge solution by{" "}
          <a href="https://github.com/julian-pineiro">Julian Piñeiro</a>
        </h4>
      </div>
    </>
  );
}

export default App;
