import React, { Fragment } from "react";

const Song = (props) => {
  let formating = "";
  if (props.selectedStatus) {
    formating = "selected";
  }

  return (
    <div onClick={props.handleClick} className={formating}>
      {props.name}
    </div>
  );
};

export default Song;