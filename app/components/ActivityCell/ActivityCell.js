import React from 'react';

import './ActivityCell.scss';

export const ActivityCell = (props) => {
  const {activity} = props;
  const cellClasses = `cell activity-${activity}`;
  return (
    <li className={cellClasses}/>
  )
}