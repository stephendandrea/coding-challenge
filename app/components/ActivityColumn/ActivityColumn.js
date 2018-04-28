import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityCell } from '../ActivityCell';

import './ActivityColumn.scss';
import CommitActivityWeek from '../../vos/CommitActivityWeek';

export class ActivityColumn extends Component {
  static propTypes = {
    weekData : PropTypes.instanceOf(CommitActivityWeek)
  };

  static defaultProps = {
    weekData: new CommitActivityWeek()
  };

  commitDensity (commits) {
    switch (true) {
      case commits >= 25:
        return 5;
      case (commits < 25) && (commits >= 15):
        return 4;
      case (commits < 15) && (commits >= 5):
        return 3;
      case (commits < 5) && (commits >= 1):
        return 2;
      default:
        return 1;
    }
  }
  render () {
    const { weekData } = this.props;
    return (
      <ul className="activity-column">
        {weekData.commitDensity.map(
          density => <ActivityCell density={density} />
        )}
      </ul>
    );
  }
}
