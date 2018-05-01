import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CommitActivityGrid } from '../CommitActivityGrid';

import CommitActivityWeek from '../../vos/CommitActivityWeek';
import DensityScale from '../../vos/DensityScale';

import { getCommitActivity } from '../../thunks/stats';

class ReactCommitActivityGrid extends Component {
  componentWillMount () {
    const {getCommitActivity} = this.props;
    getCommitActivity('react');
  }

  render () {
    const { activityData } = this.props;
    return (
      <CommitActivityGrid activityData={activityData} />
    );
  }
}

ReactCommitActivityGrid.defaultProps = {
  activityData: Array(52).fill(new CommitActivityWeek())
};

ReactCommitActivityGrid.propTypes = {
  activityData : PropTypes.arrayOf(PropTypes.instanceOf(CommitActivityWeek)),
  densityScale : PropTypes.instanceOf(DensityScale)
};

function mapStateToProps (state) {
  return {
    activityData : state.stats.activityData,
    densityScale : state.stats.densityScale
  };
}

function mapDispatchToProps (dispatch) {
  return {
    ...bindActionCreators({
      getCommitActivity
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactCommitActivityGrid);
