export const SET_COMMIT_ACTIVITY = 'SET_COMMIT_ACTIVITY';
export const SET_DENSITY_SCALE   = 'SET_DENSITY_SCALE';

export const setCommitActivity = data => {
  return {
    type: SET_COMMIT_ACTIVITY,
    payload: data
  };
};

export const setDensityScale = data => {
  return {
    type: SET_DENSITY_SCALE,
    payload: data
  };
};
