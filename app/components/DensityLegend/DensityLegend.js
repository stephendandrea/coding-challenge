import React from 'react';
import { DensityCell } from '../DensityCell';

import './DensityLegend.scss';

export const DensityLegend = () => {
  return (
    <ul>
      <li>Less</li>
      <DensityCell density={1} />
      <DensityCell density={2} />
      <DensityCell density={3} />
      <DensityCell density={4} />
      <DensityCell density={5} />
      <li>More</li>
    </ul>
  )
}