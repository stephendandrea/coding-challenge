import { useEffect, useState } from 'react'
import { CommitActivity, WeekActivity } from '../models/github'
import { getCommitActivity } from '../services/github'

/* TODO
 * Check if I can use <Suspense>
 */

type GraphData = {
  months: string[]
  highestIntensity: number
  orderedList: number[][]
}

export default function CommitGraph() {
  const [data, setData] = useState<GraphData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)
  const WEEKDAYS = ['', 'Mon', '', 'Wed', '', 'Fri', '']

  // TODO: Extract all functions to utils file and create tests
  function getHighestIntensity(commitActivity: CommitActivity): number {
    return commitActivity.reduce((currentMax, newWeek) => {
      const newMax = Math.max(...newWeek.days)
      return newMax > currentMax ? newMax : currentMax
    }, 0)
  }

  function getMonths(weekActivity: WeekActivity): string[] {
    let current = new Date(weekActivity.week * 1000)
    return Array(12)
      .fill(null)
      .map(_ => {
        const newCurrent = current
        if (current.getMonth() == 11) {
          current = new Date(current.getFullYear() + 1, 0, 1)
        } else {
          current = new Date(current.getFullYear(), current.getMonth() + 1, 1)
        }
        return newCurrent.toLocaleString('default', { month: 'short' })
      })
  }

  function getIntensityLevel(
    commitsCount: number,
    highestIntensity: number
  ): string {
    if (commitsCount === 0) return '0'

    if (commitsCount < highestIntensity / 4) return '1'

    if (commitsCount < highestIntensity / 2) return '2'

    if (commitsCount < highestIntensity / 3) return '3'
    return '4'
  }

  function getOrderedList(commitActivity: CommitActivity): number[][] {
    return commitActivity.reduce<number[][]>(
      (prev, next) =>
        next.days.map((_, i) => (prev[i] || []).concat(next.days[i])),
      []
    )
  }

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const data = await getCommitActivity()

        setData({
          months: getMonths(data[0]),
          highestIntensity: getHighestIntensity(data),
          orderedList: getOrderedList(data),
        })

        setLoading(false)
      } catch (err) {
        setHasError(true)
        setLoading(false)
      }
    }

    dataFetch()
  }, [])

  return (
    <>
      {/*TODO: Enhance L&F when is loading or has an error */}

      {hasError && "Sorry, we couldn't load the graph"}
      {loading && 'Loading...'}
      {data && (
        <table>
          {/*TODO: change this to show each month with real amount of weeks*/}
          <tr>
            <th></th>
            <th></th>
            <th></th>
            {data.months.map((month: string) => (
              <>
                <th colSpan={4}>{month}</th>
              </>
            ))}
          </tr>

          {data.orderedList.map((r: number[], i: number) => (
            <tr>
              <td>{WEEKDAYS[i]}</td>
              {r.map(d => (
                <td
                  className={`intensity-${getIntensityLevel(
                    d,
                    data.highestIntensity
                  )}`}
                ></td>
              ))}
            </tr>
          ))}
        </table>
      )}
    </>
  )
}
