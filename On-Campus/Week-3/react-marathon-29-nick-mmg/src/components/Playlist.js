import React from 'react'

const Playlist = (props) => {
  // debugger
  const name = props.individualPlaylistData.name

  // if  we receive a prop that says this Playlist should be selected THEN 
  // we should give our div the className of selected
  let selectedClassName = ""
  if (props.selectedStatus === true){
    selectedClassName = "selected"
  }

    return(
      <div className={selectedClassName} onClick={props.changeSelectedPlaylist}>
        {name}
      </div>
    )
}


export default Playlist