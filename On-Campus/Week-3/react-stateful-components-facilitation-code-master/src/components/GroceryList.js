import React, { useState } from 'react'
import Grocery from './Grocery'

const GroceryList = (props) => {
  const [selectedGroceryId, setSelectedGroceryId] = useState(null)

  const groceryList = props.groceries.map(grocery => {
    // each Grocery will receive a status on i
    let selectedStatus = false

    // if the id of the currently iterated grocery is equal to the id stored in state, set to true so that we can set a className conditionally
    if(grocery.id === selectedGroceryId) {
      selectedStatus = true
    }

    // define a "wrapper" function (closure) that can temporarily store the both a function and its argument together WITHOUT calling it
    const setSelectedGroceryIdClosure = () => {
      setSelectedGroceryId(grocery.id)
    }

    return(
      <Grocery
        key={grocery.id}
        name={grocery.name}
        selectedStatus={selectedStatus}
        setSelectedGroceryIdClosure={setSelectedGroceryIdClosure}
      />
    )
  })

  return(
    <ul>
      {groceryList}
    </ul>
  )
}

export default GroceryList
