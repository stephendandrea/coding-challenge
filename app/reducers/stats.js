import { SET_COMMIT_ACTIVITY } from '../actions/stats';
import CommitActivityWeek from '../vos/CommitActivityWeek';

const statsInitialState = {
  activityData: Array(52).fill(new CommitActivityWeek())
};

const stats = (state = statsInitialState, action) => {
  switch (action.type) {
    case SET_COMMIT_ACTIVITY:
      console.log('setting commit activity');
      return {
        ...state,
        activityData: action.data
      };
    default:
      return state;
  }
}

export default stats;
