import React from 'react';

const OrderTile = props => {
  return(
    <li>{props.name}: {props.flavor}</li>
  )
}

export default OrderTile;
