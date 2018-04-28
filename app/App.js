import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';

// import {CommitActivityGrid} from './components/CommitActivityGrid';
import { ReactCommitActivityGrid } from './components/ReactCommitActivityGrid';

import store from './store';

export default class App extends React.Component {

  render () {

    return (
      <React.Fragment>
        <h2>Coding Challenge</h2>
        <p>Recreate this graph:</p>
        <img src="/images/git-graph.gif" alt="Git Graph" className="git-graph"/>
        <p>Using this data:</p>
        <a href="https://api.github.com/repos/facebook/react/stats/commit_activity">
          https://api.github.com/repos/facebook/react/stats/commit_activity
        </a>
        <ReactCommitActivityGrid />
      </React.Fragment>
    );

  }
}

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
