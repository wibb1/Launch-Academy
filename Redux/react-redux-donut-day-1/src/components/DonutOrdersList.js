import React from 'react';
import { connect} from 'react-redux'

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

const mapStateToProps = (state) => {
  return {
    donutOrderList: state.donuts.donutOrderList
  }
}

export default connect(
  mapStateToProps,
  null
)(DonutOrdersList);
