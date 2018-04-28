import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCommitActivity } from '../../thunks/stats';
import { CommitActivityGrid } from '../CommitActivityGrid';
import CommitActivityWeek from '../../vos/CommitActivityWeek';

class ReactCommitActivityGrid extends React.Component {
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
  activityData: PropTypes.arrayOf(CommitActivityWeek)
};

function mapStateToProps (state) {
  return {
    activityData: state.stats.activityData
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
