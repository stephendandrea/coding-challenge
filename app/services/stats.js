const API_BASE = 'https://api.github.com/repos/facebook/';

const resolver = (url) =>{
  return fetch(url).then(
    (res) => {
      return res.json().then(
        (data) => {
          return data;
        }
      );
    }
  );
};

export const commitActivity = (repo) => {
  console.log('fetching stats/commitActivity for', repo);
  return resolver(`${API_BASE}/${repo}/stats/commit_activity`);
}

