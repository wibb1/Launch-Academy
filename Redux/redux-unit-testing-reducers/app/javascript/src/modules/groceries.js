import { displayAlertMessage } from './alertMessage.js'

const initialState = {
  groceryList: [],
  name: '',
  isFetching: false
}

const groceries = (state = initialState, action) => {
  switch(action.type) {
    case CLEAR_FORM:
      return {...state, name: ''}
    case HANDLE_NAME_CHANGE:
      return {...state, name: action.newName}
    case GET_GROCERIES_REQUEST:
      return {...state, isFetching: true }
    case GET_GROCERIES_REQUEST_SUCCESS:
      return {...state,
        groceryList: action.groceries,
        isFetching: false
      }
    case GET_GROCERIES_REQUEST_FAILURE:
      return {...state, isFetching: false }
    case POST_GROCERY_REQUEST:
      return {...state, isFetching: true }
    case POST_GROCERY_REQUEST_SUCCESS:
      const newGroceries = state.groceryList.concat(action.grocery)
      return {...state,
        groceryList: newGroceries,
        isFetching: false
      }
    case POST_GROCERY_REQUEST_FAILURE:
      return {...state, isFetching: false }
    default:
      return state
  }
}

const CLEAR_FORM = 'CLEAR_FORM'

const clearForm = () => {
  return {
    type: CLEAR_FORM
  }
}

const HANDLE_NAME_CHANGE = 'HANDLE_NAME_CHANGE'

const handleNameChange = event => {
  const newName = event.target.value
  return {
    type: HANDLE_NAME_CHANGE,
    newName
  }
}

const GET_GROCERIES_REQUEST = 'GET_GROCERIES_REQUEST'

const getGroceriesRequest = () => {
  return {
    type: GET_GROCERIES_REQUEST
  }
}

const GET_GROCERIES_REQUEST_SUCCESS = 'GET_GROCERIES_REQUEST_SUCCESS'

const getGroceriesRequestSuccess = groceries => {
  return {
    type: GET_GROCERIES_REQUEST_SUCCESS,
    groceries
  }
}

const GET_GROCERIES_REQUEST_FAILURE = 'GET_GROCERIES_REQUEST_FAILURE'

const getGroceriesRequestFailure = () => {
  return {
    type: GET_GROCERIES_REQUEST_FAILURE
  }
}

const getGroceries = () => {
  return dispatch => {
    dispatch(getGroceriesRequest())

    return fetch('/api/v1/groceries.json')
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        // dispatch additional action creator upon error
        dispatch(getGroceriesRequestFailure())
        dispatch(displayAlertMessage("Something went wrong."))
        return { error: 'Something went wrong.' }
      }
    })
    .then(groceries => {
      if(!groceries.error) {
        dispatch(getGroceriesRequestSuccess(groceries))
      }
    })
  }
}

const POST_GROCERY_REQUEST = 'POST_GROCERY_REQUEST'

const postGroceryRequest = () => {
  return {
    type: POST_GROCERY_REQUEST
  }
}

const POST_GROCERY_REQUEST_SUCCESS = 'POST_GROCERY_REQUEST_SUCCESS'

const postGroceryRequestSuccess = grocery => {
  return {
    type: POST_GROCERY_REQUEST_SUCCESS,
    grocery
  }
}

const POST_GROCERY_REQUEST_FAILURE = 'POST_GROCERY_REQUEST_FAILURE'

const postGroceryRequestFailure = () => {
  return {
    type: POST_GROCERY_REQUEST_FAILURE
  }
}

const postGrocery = groceryData => {
  return dispatch => {
    dispatch(postGroceryRequest())

    return fetch(`/api/v1/groceries.json`,
      {
        method: 'POST',
        body: JSON.stringify(groceryData),
        credentials: 'same-origin',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      }
    )
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        dispatch(postGroceryRequestFailure())
        dispatch(displayAlertMessage("Something went wrong."))
       return { error: 'Something went wrong.' }
      }
    })
    .then(grocery => {
      if(!grocery.error) {
        dispatch(postGroceryRequestSuccess(grocery))
      }
    })
  }
}

export {
  clearForm,
  getGroceries,
  getGroceriesRequestSuccess,
  groceries,
  handleNameChange,
  initialState,
  postGrocery,
  postGroceryRequestSuccess,
  CLEAR_FORM,
  GET_GROCERIES_REQUEST_SUCCESS,
  HANDLE_NAME_CHANGE,
  POST_GROCERY_REQUEST_SUCCESS
}
