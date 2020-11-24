import {
  activities,
  initialState,
  GET_ACTIVITIES_REQUEST_SUCCESS,
  UPDATE_ACTIVITY_STATUS,
  updateActivityStatus
} from '../../../app/javascript/react/modules/activities'

describe('activities reducer', () => {
  it('should set and initial state', () => {
    const newState = activities(undefined, {})
    expect(newState).toEqual(initialState)
  })

  it('changes activity list on GET_ACTIVITIES_REQUEST_SUCCESS action', () => {
    const newActivities = [{id: 1, name: "Activity 1"}]
    const action = { type: GET_ACTIVITIES_REQUEST_SUCCESS, newActivities }
    const newState = activities(initialState, action)

    expect(newState.activityList).toEqual(newActivities)
  })

  it('updates list with UPDATE_ACTIVITY_STATUS', () => {
    const stateWithList = { activityList: [{id: 1, name: "Activity 1", complete: true}, { id: 2, name: "Activity 2", complete: false }] }
    const updatedActivity = { id: 1, name: "Activity 1", complete: false }
    const updatedActivities = [{id: 1, name: "Activity 1", complete: false}, { id: 2, name: "Activity 2", complete: false }] 

    const action = { type: UPDATE_ACTIVITY_STATUS, updatedActivity }
    const newState = activities(stateWithList, action)

    expect(newState.activityList).toEqual(updatedActivities)
  })
})