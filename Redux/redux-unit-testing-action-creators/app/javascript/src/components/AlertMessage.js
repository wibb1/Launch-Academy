import React from 'react';

const AlertMessage = props => {
  return(
    <div className={`alert-box`}>
      {props.message}
      <div onClick={props.closeAlertMessage} className='close'>&times;</div>
    </div>
  )
}

export default AlertMessage
