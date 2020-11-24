// Action type constants go here
const ADD_DONUT_ORDER = 'ADD_DONUT_ORDER'

const CLEAR_FORM = 'CLEAR_FORM'

const HANDLE_FIELD_CHANGE = 'HANDLE_FIELD_CHANGE'

const handleFieldChange = (event) => {
  const newValue = event.target.value
  const field = event.target.name
  return {
    type: HANDLE_FIELD_CHANGE,
    field,
    newValue
  }
}

const addDonutOrder = (donut) => {
  return {
    type: ADD_DONUT_ORDER,
    donut
  }
}

const clearForm = () => {
  return {
    type: CLEAR_FORM
  }
}

const initialState = {
  name: '',
  flavor: '',
  donutOrderList: [
    {
      id: 1,
      name: 'Brianna',
      flavor: 'Everything Bagel Doughnut'
    },
    {
      id: 2,
      name: "Alex",
      flavor: 'Blackberry Hibiscus'
    },
    {
      id: 3,
      name: 'Dan',
      flavor: 'The biggest coffee roll ever'
    }
  ]
}

const donuts = (state = initialState, action) => {
  switch(action.type) {
    case ADD_DONUT_ORDER:
      const newDonutOrders = state.donutOrderList.concat(action.donut)
      return {...state, donutOrderList: newDonutOrders}
    case HANDLE_FIELD_CHANGE:
      return{...state, [action.field]: action.newValue}
    case CLEAR_FORM:
      return {...state, name: '', flavor: ''}
    default:
      return state
  }
};

export {
  addDonutOrder,
  clearForm,  
  donuts,
  handleFieldChange
};
