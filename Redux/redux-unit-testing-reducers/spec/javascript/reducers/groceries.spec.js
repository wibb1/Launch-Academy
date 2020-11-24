import {
  groceries,
  initialState,
  POST_GROCERY_REQUEST_SUCCESS,
  CLEAR_FORM,
  GET_GROCERIES_REQUEST_SUCCESS,
  HANDLE_NAME_CHANGE
} from '../../../app/javascript/src/modules/groceries'

describe('groceries reducer', () => {

  it('updates the grocery list when POST_GROCERY_REQUEST_SUCCESS action type is recieved', () => {
    const grocery = { id: 1, name: 'bananas'}
    const action = { type: POST_GROCERY_REQUEST_SUCCESS, grocery}
    const newState = groceries(initialState, action)

    expect(newState.groceryList).toEqual([grocery])
  })

  it('should set an initial state', () => {
    const newState = groceries(undefined, {})
      expect(newState).toEqual(initialState)
  })
})