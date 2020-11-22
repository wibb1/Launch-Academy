import React from 'react';

const Elephant = props => {

  return (
    <div onClick={props.onClick} className="center">
      <img src={props.image} height="400" width="600" />
      <h1>{props.text}</h1>
    </div>
  );
};

export default Elephant;
