import React, { Component } from 'react'
import { ActivityCell } from '../ActivityCell';

import './ActivityColumn.scss';

export class ActivityColumn extends Component {
  render () {
    return (
      <ul className="activity-column">
        <ActivityCell activity={((Math.random() * 5) >> 0) + 1} />
        <ActivityCell activity={((Math.random() * 5) >> 0) + 1} />
        <ActivityCell activity={((Math.random() * 5) >> 0) + 1} />
        <ActivityCell activity={((Math.random() * 5) >> 0) + 1} />
        <ActivityCell activity={((Math.random() * 5) >> 0) + 1} />
        <ActivityCell activity={((Math.random() * 5) >> 0) + 1} />
        <ActivityCell activity={((Math.random() * 5) >> 0) + 1} />
      </ul>
    )
  }
}
