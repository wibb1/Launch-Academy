import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock, { mock } from 'fetch-mock'

import { 
  getActivities,
  getActivitiesRequestSuccess,
  GET_ACTIVITIES_REQUEST_SUCCESS,
  patchActivity,
  updateActivityStatus,
  UPDATE_ACTIVITY_STATUS 
} from '../../../app/javascript/react/modules/activities'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('getActivitiesRequestSuccess action', () => {
  it('should create an GET_ACTIVITIES_REQUEST_SUCCESS action', () => {
    const newActivities = [{id: 1, name: "Activity 1"}]
    const action = getActivitiesRequestSuccess(newActivities)

    expect(action).toEqual({
      type: GET_ACTIVITIES_REQUEST_SUCCESS,
      newActivities
    })
  })
})

describe('updateActivityStatus action', () => {
  it('should create a UPDATE_ACTIVITY_STATUS', () => {
    const updatedActivity = {id: 1, name: "Activity 1"}
    const action = updateActivityStatus(updatedActivity)

    expect(action).toEqual({
      type: UPDATE_ACTIVITY_STATUS,
      updatedActivity
    })
  })
})

describe('getActivities', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('calls the request success actions if the fetch response was successfull', done => {
    const newActivities = [
      { "id": 1, "name": "Activity 1"}, 
      { "id": 2, "name": "Activity 2"}
    ]

    fetchMock.get('/api/v1/activities.json', {
      status: 200,
      body: newActivities
    })

    const expectedActions = [
      { type: GET_ACTIVITIES_REQUEST_SUCCESS, newActivities } 
    ]
    const store = mockStore({
      activityList: []
    })

    store
      .dispatch(getActivities())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
  })
})

describe('patchActivity', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('fetch response successfull', done => {
    const updatedActivity = {"id": 1, "name": "Activity 1", complete: false }

    fetchMock.patch(`/api/v1/activities/${updatedActivity.id}.json`, {
      status: 200,
      body: updatedActivity
    })

    const expectedActions = [
      { type:UPDATE_ACTIVITY_STATUS, updatedActivity}
    ]
    const store = mockStore({
      activityList: []
    })

    store
      .dispatch(patchActivity(updatedActivity.id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
  })
})