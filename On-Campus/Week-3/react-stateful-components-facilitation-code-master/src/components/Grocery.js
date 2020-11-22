import React from 'react'

const Grocery = props => {
  let groceryName = props.name

  if (props.selectedStatus === true){
    groceryName = `${props.name} SELECTED`
  }

  return(
    <li onClick={props.setSelectedGroceryIdClosure}>
      {groceryName}
    </li>
  )
}

export default Grocery
