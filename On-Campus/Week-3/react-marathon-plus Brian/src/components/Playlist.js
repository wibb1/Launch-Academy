import React, { Fragment } from "react";

const Playlist = (props) => {
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

export default Playlist;
