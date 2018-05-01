import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ActivityCell } from '../ActivityCell';

import CommitActivityWeek from '../../vos/CommitActivityWeek';
import DensityScale from '../../vos/DensityScale';

import './ActivityColumn.scss';

export class ActivityColumn extends Component {
  static propTypes = {
    weekData     : PropTypes.instanceOf(CommitActivityWeek),
    densityScale : PropTypes.instanceOf(DensityScale)
  };

  static defaultProps = {
    weekData     : new CommitActivityWeek(),
    densityScale : new DensityScale(25)
  };

  commitDensity (commits) {
    const { densityScale } = this.props;
    switch (true) {
      case commits >= densityScale.lv5:
        return 5;
      case (commits < densityScale.lv5) && (commits >= densityScale.lv4):
        return 4;
      case (commits < densityScale.lv4) && (commits >= densityScale.lv3):
        return 3;
      case (commits < densityScale.lv3) && (commits >= 1):
        return 2;
      default:
        return 1;
    }
  }
  render () {
    const { weekData } = this.props;
    return (
      <ul className="activity-column">
        {weekData.days.map(
          (commits, idx) =>
            <ActivityCell
              density={this.commitDensity(commits)}
              key={`cell-${weekData.week}-${idx}`}
            />
        )}
      </ul>
    );
  }
}
