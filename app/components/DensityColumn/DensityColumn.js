import React, { Component } from 'react'
import { DensityCell } from '../DensityCell';

import './DensityColumn.scss';

export class DensityColumn extends Component {
  render () {
    return (
      <ul className="density-column">
        <DensityCell density={((Math.random()*5)>>0)+1} />
        <DensityCell density={((Math.random()*5)>>0)+1} />
        <DensityCell density={((Math.random()*5)>>0)+1} />
        <DensityCell density={((Math.random()*5)>>0)+1} />
        <DensityCell density={((Math.random()*5)>>0)+1} />
        <DensityCell density={((Math.random()*5)>>0)+1} />
        <DensityCell density={((Math.random()*5)>>0)+1} />
      </ul>
    )
  }
}
