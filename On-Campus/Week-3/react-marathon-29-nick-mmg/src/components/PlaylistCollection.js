import React, { Fragment, useState } from 'react'
import Playlist from './Playlist'

const PlaylistCollection = (props) => {
  const [getSelectedPlaylistId, toggleSelectedPlaylistIdState] = useState(null)
  // useState(null) => [getterFunction, setterFunction]

  // What is getState? 
  // - getState returns the current state of the selected song...

  // What is toggleState?
  // - a function that changes the value of what getState refers to 
  
  const playlistComponents = props.playlistData.map((playlistElement) => {

    const changeSelectedPlaylist = () => {
      return toggleSelectedPlaylistIdState(playlistElement.id)
    }

    let selectedStatus = false

    if (getSelectedPlaylistId === playlistElement.id){
      selectedStatus = true
    }

    return (
      <Playlist 
        key={playlistElement.id}
        individualPlaylistData={playlistElement} 
        changeSelectedPlaylist={changeSelectedPlaylist} 
        selectedStatus={selectedStatus}
      />
    )
  })

  return (
      <>
        <h2>Playlists</h2>
        {playlistComponents}
      </>
  )
}


export default PlaylistCollection