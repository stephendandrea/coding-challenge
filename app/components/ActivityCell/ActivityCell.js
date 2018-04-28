import React from 'react';

import './ActivityCell.scss';

export const ActivityCell = (props) => {
  const {density} = props;
  const cellClasses = `cell activity-density-${density}`;
  return (
    <li className={cellClasses}/>
  )
}