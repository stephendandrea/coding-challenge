import React from 'react';
import { ActivityCell } from '../ActivityCell';

import './ActivityLegend.scss';

export const ActivityLegend = () => {
  return (
    <ul className="activity-legend">
      <li>Less</li>
      <ActivityCell density={1} />
      <ActivityCell density={2} />
      <ActivityCell density={3} />
      <ActivityCell density={4} />
      <ActivityCell density={5} />
      <li>More</li>
    </ul>
  );
};
