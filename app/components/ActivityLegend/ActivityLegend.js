import React from 'react';
import { ActivityCell } from '../ActivityCell';

import './ActivityLegend.scss';

export const ActivityLegend = () => {
  return (
    <ul>
      <li>Less</li>
      <ActivityCell activity={1} />
      <ActivityCell activity={2} />
      <ActivityCell activity={3} />
      <ActivityCell activity={4} />
      <ActivityCell activity={5} />
      <li>More</li>
    </ul>
  )
}