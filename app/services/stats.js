const API_BASE = 'https://api.github.com/repos/facebook';

const resolver = url =>{
  return fetch(url).then(
    res => {
      return res.json().then(
        data => {
          return data;
        }
      );
    }
  );
};

export const fetchCommitActivity = repo => {
  return resolver(`${API_BASE}/${repo}/stats/commit_activity`);
};

