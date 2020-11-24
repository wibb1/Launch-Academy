import React from 'react';

import OrderTile from './OrderTile';

const DonutOrdersList = props => {
  const donutOrderTiles = props.donutOrderList.map(order => {
    return(
      <OrderTile
        key={order.id}
        name={order.name}
        flavor={order.flavor}
      />
    )
  })

  return(
    <div className='small-6 columns'>
      <h1>Donuts to Buy</h1>
      <ul>
        {donutOrderTiles}
      </ul>
    </div>
  )
}

export default DonutOrdersList;
