import { FC, useEffect, useState } from 'react'
import './home.css'
import commitGraph from './assets/git-graph.gif'
import { DTFormatedCommitActivity } from '../../services/github/github.types'
import { services } from '../../services/services'
import { Calendar } from '../../components/atoms/calendar/calendar'

export const Home: FC = () => {
  const [commitActivity, setCommitActivity] =
    useState<DTFormatedCommitActivity>()
  const [dateWithMaxCommits, setDateWithMaxCommits] = useState<number>(0)
  const [status, setStatus] = useState<'success' | 'error' | 'loading'>(
    'loading'
  )

  useEffect(() => {
    const getCommitActivity = async () => {
      const commitActivity = await services.github.commitActivity()
      if (commitActivity) {
        const formatedCommitActivity =
          services.github.activityToCalendar(commitActivity)
        setCommitActivity(formatedCommitActivity)

        const dateWithMaxCommits = Math.max(
          ...formatedCommitActivity.reduce(
            (acc, curr) => [...acc, curr.commits],
            [0]
          )
        )
        setDateWithMaxCommits(dateWithMaxCommits)

        setStatus('success')
      }
    }
    getCommitActivity()
  }, [])

  return (
    <main className='container'>
      <section>
        <h2>Coding Challenge</h2>
        <img src={commitGraph} alt='Git Graph' className='git-graph' />
        <p>
          Create the graph above using this data:
          <br />
          <a href='https://api.github.com/repos/facebook/react/stats/commit_activity'>
            https://api.github.com/repos/facebook/react/stats/commit_activity
          </a>
        </p>
        <h3>Notes:</h3>
        <ul>
          <li>
            Commit color density should be relative to the highest single day
            activity and broken into 4 quarters.
          </li>
          <li>
            For example, if the highest single day activity is 84 commits the
            breakdown of color density would be:
            <br />
            <br />
            <code>
              Darkest: 63-84 commits
              <br />
              Darker: 42 - 62 commits
              <br />
              Base: 21 - 41 commits
              <br />
              Lighter: 1 - 21 commits
              <br />
              Lightest (empty): 0 commits
            </code>
          </li>
        </ul>
      </section>
      <section>
        <h2>My solution</h2>
        {status === 'success' && commitActivity && (
          <Calendar highestMark={dateWithMaxCommits} markers={commitActivity} />
        )}
        <p>
          Try to use the time you had available wisely, there is a LOT to
          improve
        </p>
      </section>
    </main>
  )
}
