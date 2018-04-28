import React, { Component } from 'react';
import { ActivityLegend } from '../ActivityLegend/ActivityLegend';
import { ActivityColumn } from '../ActivityColumn/ActivityColumn';

import './CommitActivityGrid.scss';
import CommitActivityWeek from '../../vos/CommitActivityWeek';

export class CommitActivityGrid extends Component {
  static defaultProps = {
    activityData: Array(52).fill(new CommitActivityWeek())
  };

  render () {
    const date = new Date();
    const { activityData } = this.props;
    //  use last month because the data could span < 1 year
    const lastMonth = (new Date(activityData[51].week * 1000)).getMonth();
    console.log('lastMonth', lastMonth);
    const months = [...Array(12)].map(
      (val, i) => {
        console.log(i);
        let month = lastMonth - i;
        if (month < 0 ) {
          month += 12;
        }
        date.setMonth(month);
        return date.toLocaleString('en-us', {month: 'short'});
      }
    ).reverse();
    console.log(months);
    const columns = Array(52).fill(true);
    let weekData = activityData;
    if (activityData.length < 52) {
      weekData = [
        ...(Array(52 - activityData.length)).fill(new CommitActivityWeek()),
        ...activityData
      ];
    }
    console.log(columns);
    return (
      <section className="activity-stats">
        <div className="label-wrapper">
          <ul className="days vertical">
            <li/><li>Mon</li><li/><li>Wed</li><li/><li>Fri</li>
          </ul>
          <div className="grid-wrapper">
            <ul className="months">
              {months.map(month=><li>{month}</li>)}
            </ul>
            <section className="activity-grid">
              {weekData.map(week => <ActivityColumn weekData={week}/>)}
            </section>
          </div>
        </div>
        <ActivityLegend/>
      </section>
    );
  }
}
