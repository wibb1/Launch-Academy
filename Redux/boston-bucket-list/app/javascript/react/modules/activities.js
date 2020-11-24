const initialState = {
  activityList: []
}

const activities = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_ACTIVITY_STATUS:
      const index = state.activityList.findIndex(activity => {
        return activity.id === action.updatedActivity.id
      })
      const currentList = state.activityList
      const newActivities = [...currentList.slice(0, index), action.updatedActivity, ...currentList.slice(index + 1)]
      return {...state, activityList: newActivities }
    case GET_ACTIVITIES_REQUEST_SUCCESS:
      return {...state, activityList: action.newActivities}
    default:
      return state
  }
}

const GET_ACTIVITIES_REQUEST_SUCCESS = 'GET_ACTIVITIES_REQUEST_SUCCESS'

const getActivitiesRequestSuccess = newActivities => {
  return {
    type: GET_ACTIVITIES_REQUEST_SUCCESS,
    newActivities
  }
}

const getActivities = () => {
  return function(dispatch) {
    return fetch('/api/v1/activities.json')
    .then(response => response.json())
    .then(activities => {
      dispatch(getActivitiesRequestSuccess(activities))
    })
  }
}

const UPDATE_ACTIVITY_STATUS = 'UPDATE_ACTIVITY_STATUS'

const updateActivityStatus = updatedActivity => {
  return {
    type: UPDATE_ACTIVITY_STATUS,
    updatedActivity
  }
}

const patchActivity = activityId => {
  return function(dispatch) {
    return fetch(`/api/v1/activities/${activityId}.json`,
      {
        method: 'PATCH',
        credentials: 'same-origin',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      }
    )
    .then(response => response.json())
    .then(updatedActivity => {
      dispatch(updateActivityStatus(updatedActivity))
    })
  }
}

export {
  activities,
  getActivities,
  getActivitiesRequestSuccess,
  GET_ACTIVITIES_REQUEST_SUCCESS,
  patchActivity,
  updateActivityStatus,
  UPDATE_ACTIVITY_STATUS,
  initialState
}
