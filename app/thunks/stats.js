import {
  setCommitActivity,
} from '../actions/stats';

import { fetchCommitActivity } from '../services/stats';

export const getCommitActivity = repo => {
  return (dispatch) => {
    console.log('getting commit activity for repo', repo);
    return fetchCommitActivity(repo).then(
      data => {
        console.log('dispatching setCommitActivity', data);
        dispatch(setCommitActivity(data));
      }
    );
  }
}