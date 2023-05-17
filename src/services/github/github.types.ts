export type DTCommitActivity = DTCommitActivityWeek[]

export type DTCommitActivityWeek = {
  days: number[]
  total: number
  week: number
}

export type DTDayCommits = { date: Date; commits: number }

export type Calendar = DTDayCommits[]

export type DTFormatedCommitActivity = Array<{
  date: Date
  commits: number
}>
