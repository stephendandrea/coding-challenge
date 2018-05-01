import {
  setCommitActivity,
  setDensityScale
} from '../actions/stats';

import { fetchCommitActivity } from '../services/stats';
import CommitActivityWeek from '../vos/CommitActivityWeek';
import DensityScale from '../vos/DensityScale';

export const getCommitActivity = repo => {
  return dispatch => {
    return fetchCommitActivity(repo).then(
      data => {
        const mappedData = [];
        let commits = [];
        data.forEach(
          week => {
            mappedData.push(new CommitActivityWeek(week));
            commits = [
              ...commits,
              ...week.days
            ];
          }
        );
        commits.sort((a, b) => a > b);
        const max = commits.pop();
        dispatch(setCommitActivity(mappedData));
        dispatch(setDensityScale(new DensityScale(max)));
      }
    );
  };
};
