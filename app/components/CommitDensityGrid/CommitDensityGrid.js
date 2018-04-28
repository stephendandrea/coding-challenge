import React, { Component, Fragment } from 'react'
import { DensityLegend } from '../DensityLegend/DensityLegend';
import { DensityColumn } from '../DensityColumn/DensityColumn';

import './CommitDensityGrid.scss';

export class CommitDensityGrid extends Component {
  render () {
    const months = [];
    for (let i = 0; i < 12; i++) {
      const date = new Date();
      date.setMonth(i);
      const mStr = date.toLocaleString('en-us', {month: 'short'});
      months.push(mStr);
    }
    const columns = Array(52).fill(true);
    console.log(columns);
    return (
      <section className="density-stats">
        <div className="label-wrapper">
          <ul className="days vertical"><li/><li>Mon</li><li/><li>Wed</li><li/><li>Fri</li></ul>
          <div className="grid-wrapper">
            <ul className="months">
              {months.map(month=><li>{month}</li>)}
            </ul>
            <section className="density-grid">
              {columns.map(()=><DensityColumn/>)}
            </section>
          </div>
        </div>
        <DensityLegend/>
      </section>
    )
  }
}
