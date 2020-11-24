import React from 'react'

const GroceryInputField = (props) => {
  return (
    <input
      type="text"
      placeholder="name of grocery"
      value={props.name}
      onChange={props.handleChange}
    />
  )
}

export default GroceryInputField
