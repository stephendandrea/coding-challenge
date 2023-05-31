import { CommitActivity } from '../models/github'

// You can also have this constant in a config file
const COMMIT_ACTIVITY_URL =
  'https://api.github.com/repos/facebook/react/stats/commit_activity'

export function getCommitActivity(): Promise<CommitActivity> {
  return fetch(COMMIT_ACTIVITY_URL).then(response => response.json())
}
