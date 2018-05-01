import { SET_COMMIT_ACTIVITY, SET_DENSITY_SCALE } from '../actions/stats';
import CommitActivityWeek from '../vos/CommitActivityWeek';
import DensityScale from '../vos/DensityScale';

const statsInitialState = {
  activityData: Array(52).fill(new CommitActivityWeek()),
  densityScale: new DensityScale(25)
};

const stats = (state = statsInitialState, {type, payload }) => {
  switch (type) {
    case SET_COMMIT_ACTIVITY:
      return {
        ...state,
        activityData: payload
      };
    case SET_DENSITY_SCALE:
      return {
        ...state,
        densityScale: payload
      };
    default:
      return state;
  }
};

export default stats;
