import { addDays } from 'date-fns'
import { DTService } from '../services.types'
import {
  DTCommitActivity,
  DTCommitActivityWeek,
  DTFormatedCommitActivity,
} from './github.types'

const commitActivity = async (): DTService<DTCommitActivity> => {
  try {
    const response = await fetch(
      'https://api.github.com/repos/facebook/react/stats/commit_activity'
    )
    const activity = await response.json()
    return activity
  } catch (error) {
    console.error('Error:', error)
  }
}

const activityToCalendar = (
  commitActivity: DTCommitActivity
): DTFormatedCommitActivity => {
  const calendar = commitActivity.map((week: DTCommitActivityWeek) => {
    const initialDate = new Date(week.week * 1000)
    return week.days.map((day, index) => ({
      date: addDays(initialDate, index),
      commits: day,
    }))
  })
  return calendar.flat()
}

export const github = {
  activityToCalendar,
  commitActivity,
}
