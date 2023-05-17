import {
  format,
  getDaysInMonth,
  getMonth,
  getYear,
  isSameDay,
  subYears,
} from 'date-fns'
import { FC } from 'react'
import { FCCalendar } from './calendar.type'
import styles from './calendar.module.css'
import { arrays } from '../../../utils/arrays'

// TODO: complete the months with gray squares so that all together form a square
// TODO: improve component structure (Month and Day atomic components)
export const Calendar: FC<FCCalendar> = ({ highestMark, markers }) => {
  const currentMonth = getMonth(new Date())
  const months = Array.from(
    { length: 12 },
    (_, index) => (currentMonth + index) % 12
  )

  // TODO: move function to a right place
  const colorDensity = (mark: number, highestMark: number) => {
    const quarter = highestMark / 4
    switch (true) {
      case mark === 0:
        return 'dayLightest'
      case mark >= 1 && mark <= quarter:
        return 'dayLighter'
      case mark > quarter && mark <= quarter * 2:
        return 'dayBase'
      case mark > quarter * 2 && mark <= quarter * 3:
        return 'dayDarker'
      case mark > quarter * 3 && mark <= highestMark:
        return 'dayDarkest'
      default:
        return 'Invalid commits value'
    }
  }

  return (
    <span className={styles.calendar}>
      {months.map((monthNumber: number) => {
        const previousYearNumber = getYear(subYears(new Date(), 1))
        const daysInMonth = Array.from(
          { length: getDaysInMonth(new Date(previousYearNumber, monthNumber)) },
          (v, i) => i + 1
        )
        const weeksToShow = arrays.chunkArray<number>(daysInMonth, 7)
        return (
          <div className={styles.month}>
            <p className={styles.monthName}>
              {format(new Date(2023, monthNumber), 'MMMM')}
            </p>
            <table>
              <tbody className={styles.monthDays}>
                {weeksToShow.map((week) => {
                  return (
                    <tr className={styles.week}>
                      {week.map((day, index) => {
                        const dayToCheck = new Date(
                          previousYearNumber,
                          monthNumber,
                          day
                        )
                        const commits =
                          markers.find((day) => isSameDay(day.date, dayToCheck))
                            ?.commits || 0
                        return (
                          <td
                            key={day}
                            className={`${styles.day} ${
                              styles[colorDensity(commits, highestMark)]
                            }`}
                          />
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )
      })}
    </span>
  )
}
