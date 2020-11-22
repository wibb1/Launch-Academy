import React from "react";

const Dest = (props) => {
  let destination;
  
  if (props.selectedStatus) {
    ClassFormat = "done"
  } else {
    classFormat = ""
  }
  return (
    <div>
      <h2 className={classForamt} onClick={props.handleClick}>
      {destination}
      </h2>
    </div>
  );
};

export default Dest;
