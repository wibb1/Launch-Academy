import React from 'react'

const ActivityTile = props => {
  let icon = 'far fa-2x '
  if(props.complete) {
    icon = icon + 'fa-check-square'
  } else {
    icon = icon + `fa-square`
  }

  return(
    <div>
      <i className={icon} onClick={props.handleClick}></i>
      <h4 className='activity'>{props.name}</h4>
    </div>
  )
}

export default ActivityTile;
