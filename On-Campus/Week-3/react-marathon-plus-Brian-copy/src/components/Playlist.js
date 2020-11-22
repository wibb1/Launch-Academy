import React, { Fragment } from "react";

const Playlist = (props) => {
  let formating = "";
  if (props.selectedPlayStatus) {
    formating = "selected";
  }

  return (
    <div onClick={props.playHandleClick} className={formating}>
      {props.name}
    </div>
  );
};

export default Playlist;
