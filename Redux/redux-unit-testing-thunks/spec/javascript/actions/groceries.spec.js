import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import { DISPLAY_ALERT_MESSAGE } from '../../../app/javascript/src/modules/alertMessage'

import {
  clearForm,
  getGroceries,
  getGroceriesRequestSuccess,
  handleNameChange,
  postGrocery,
  postGroceryRequestSuccess,
  CLEAR_FORM,
  GET_GROCERIES_REQUEST,
  GET_GROCERIES_REQUEST_FAILURE,
  GET_GROCERIES_REQUEST_SUCCESS,
  HANDLE_NAME_CHANGE,
  POST_GROCERY_REQUEST,
  POST_GROCERY_REQUEST_SUCCESS,  
} from '../../../app/javascript/src/modules/groceries'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('getGroceriesRequestSuccess action', () => {
  describe('getGroceriesRequestSuccess', () => {
    it('should create an GET_GROCERIES_REQUEST_SUCCESS action', () => {
      const newGroceries = [{ id: 1, name: 'bananas' }, { id: 2, name: 'oranges' }]
      const action = getGroceriesRequestSuccess(newGroceries)
      expect(action).toEqual({
        type: GET_GROCERIES_REQUEST_SUCCESS,
        groceries: newGroceries
      })
    })
  })
})

describe('postGroceryRequestSuccess action', () => {
  describe('postGroceryRequestSuccess', () => {
    it('should create an ADD_NEW_GROCERY action', () => {
      const grocery = { id: 1, name: 'bananas' }
      const action = postGroceryRequestSuccess(grocery)
      expect(action).toEqual({
        type: POST_GROCERY_REQUEST_SUCCESS,
        grocery
      })
    })
  })
})

describe('handleNameChange action', () => {
  describe('handleNameChange', () => {
    it('should create an HANDLE_NAME_CHANGE action', () => {
      const event = { target: { value: 'orange' } }
      const action = handleNameChange(event)
      expect(action).toEqual({
        type: HANDLE_NAME_CHANGE,
        newName: event.target.value
      })
    })
  })
})

describe('clearForm action', () => {
  describe('clearForm', () => {
    it('should create an CLEAR_FORM action', () => {
      const action = clearForm()
      expect(action).toEqual({
        type: CLEAR_FORM
      })
    })
  })
})

describe('getGroceries', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('calls the request and success actions if the fetch response was successful', done => {
    const newGroceries = [
      { "id": 1, "name": "bananas" },
      { "id": 2, "name": "oranges"}
    ]

    fetchMock.get('/api/v1/groceries.json', {
      status: 200,
      body: newGroceries
    })

    const expectedActions = [
      { type: GET_GROCERIES_REQUEST },
      { type: GET_GROCERIES_REQUEST_SUCCESS, groceries: newGroceries}
    ]
    const store = mockStore({
      groceryList: [],
      name: '',
      isFetching: false
    })

    store
      .dispatch(getGroceries())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
  })

  it('calls the failure action if the fech response was unsuccessful', done => {
    fetchMock.get('/api/v1/groceries.json', {
      status: 422
    })

    const expectedActions = [
      { type: GET_GROCERIES_REQUEST },
      { type: GET_GROCERIES_REQUEST_FAILURE },
      { type: DISPLAY_ALERT_MESSAGE, alertMessage: "Something went wrong." }
    ]
    const store = mockStore({
      groceryList: [],
      name: '',
      isFetching: false
    })

    store
      .dispatch(getGroceries())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
  })
})

describe('postGrocery', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('calls the success action if the fetch response was successful', done => {
    const grocery = {
      "id": 1,
      "name": "bananas"
    }

    fetchMock.post('/api/v1/groceries.json', {
      status: 202,
      body: grocery
    })

    const expectedActions = [
      { type: POST_GROCERY_REQUEST },
      { type: POST_GROCERY_REQUEST_SUCCESS, grocery }
    ]
    const store = mockStore({
      groceryList: [],
      name: '',
      isFetching: false
    })

    store
      .dispatch(postGrocery())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
  })
})