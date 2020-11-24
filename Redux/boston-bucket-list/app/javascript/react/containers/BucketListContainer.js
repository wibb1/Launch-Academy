import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getActivities, patchActivity } from '../modules/activities'
import ActivityTile from '../components/ActivityTile'

class BucketListContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getActivities()
  }

  render() {
    const activities = this.props.activityList.map(activity => {
      const handleClick = () => {
        this.props.patchActivity(activity.id)
      }

      return(
        <ActivityTile
          key={activity.id}
          name={activity.name}
          complete={activity.complete}
          handleClick={handleClick}
        />
      )
    })

    return(
      <div>
        <h1>Boston Bucket List</h1>
        {activities}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activityList: state.activities.activityList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getActivities: () => dispatch(getActivities()),
    patchActivity: (activityId) => dispatch(patchActivity(activityId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BucketListContainer);
