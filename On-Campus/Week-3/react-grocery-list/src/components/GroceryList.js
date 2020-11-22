import React from 'react';

import Grocery from "./Grocery";

const GroceryList = (props) => {
  const groceries = props.groceries
  const items = groceries.map ((item) => {
    debugger
    return (
      <Item 
        //key = item.id
        //itemName = item.name
      />
    )
  })

  return(
      <li>
        <Item 
          key={key}
          ItemName={ItemName}
          />
      </li>
  );
};


export default GroceryList;