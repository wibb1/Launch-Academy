import {
  groceries,
  initialState,
  POST_GROCERY_REQUEST_SUCCESS,
  CLEAR_FORM,
  GET_GROCERIES_REQUEST_SUCCESS,
  HANDLE_NAME_CHANGE
} from '../../../app/javascript/src/modules/groceries'

describe('groceries reducer', () => {
  it('should set an initial state', () => {
    const newState = groceries(undefined, {})
    expect(newState).toEqual(initialState)
  })

  it('updates the grocery list when POST_GROCERY_REQUEST_SUCCESS action type is received', () => {
    const grocery = { id: 1, name: 'bananas' }
    const action = { type: POST_GROCERY_REQUEST_SUCCESS, grocery }
    const newState = groceries(initialState, action)

    expect(newState.groceryList).toEqual([grocery])
  })

  it('updates the grocery list when GET_GROCERIES_REQUEST_SUCCESS action type is received', () => {
    const newGroceries = [{ id: 1, name: 'bananas' }, {id: 2, name: 'oranges'}]
    const action = { type: GET_GROCERIES_REQUEST_SUCCESS, groceries: newGroceries }
    const newState = groceries(initialState, action)

    expect(newState.groceryList).toEqual(newGroceries)
  })

  it('updates the name when HANDLE_NAME_CHANGE action type is received', () => {
    const newName = 'orange'

    const action = { type: HANDLE_NAME_CHANGE, newName }
    const newState = groceries(initialState, action)

    expect(newState.name).toEqual(newName)
  })

  it('should clear the name when CLEAR_FORM action type is received', () => {
    const stateWithName = {
      groceryList: [],
      name: 'bread',
      isFetching: false
    }

    const action = { type: CLEAR_FORM }
    const newState = groceries(stateWithName, action)

    expect(newState.name).toEqual('')
  })
})
