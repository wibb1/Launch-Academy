import {
  POST_GROCERY_REQUEST_SUCCESS,
  CLEAR_FORM,
  GET_GROCERIES_REQUEST_SUCCESS,
  HANDLE_NAME_CHANGE,
  postGroceryRequestSuccess,
  clearForm,
  getGroceriesRequestSuccess,
  handleNameChange
} from '../../../app/javascript/src/modules/groceries'

describe('postGroceryRequestSuccess action', () => {
  it('should create an ADD_NEW_GROCERY action', () => {
    const grocery = { id: 1, name: 'bananas' }
    const action = postGroceryRequestSuccess(grocery)
    expect(action).toEqual({
      type: POST_GROCERY_REQUEST_SUCCESS,
      grocery
    })
  })
})

describe('clearForm action', () => {
  it('should create a CLEAR_FORM action', () => {
    const action = clearForm()
    expect(action).toEqual({
      type: CLEAR_FORM
    })
  })
})

describe('getGroceriesRequestSuccess action', () => {
  it('should create a GET_GROCERIES_REQUEST_SUCCESS action', () => {
    const newGroceries = [{ id: 1, name: 'bananas' }, { id: 2, name: 'oranges' }]
    const action = getGroceriesRequestSuccess(newGroceries)
    expect(action).toEqual({
      type: GET_GROCERIES_REQUEST_SUCCESS,
      groceries: newGroceries
    })
  })
})

describe('handleNameChange action', () => {
  it('should create a HANDLE_NAME_CHANGE action', () => {
    const event = { target: { value: 'orange' } }
    const action = handleNameChange(event)
    expect(action).toEqual({
      type: HANDLE_NAME_CHANGE,
      newName: event.target.value
    })
  })
})