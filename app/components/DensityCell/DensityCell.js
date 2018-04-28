import React from 'react';

import './DensityCell.scss';

export const DensityCell = (props) => {
  const {density} = props;
  const cellClasses = `cell density-${density}`;
  return (
    <li className={cellClasses}/>
  )
}