import React, { Fragment, useState } from 'react'
import Playlist from './Playlist'


const PlaylistCollection = (props) => {

  const [getVariable, setVariable] = useState(null)
   
    const mappedPlaylists = props.playlistData.map((item)=> {
       
      const handleClick = () => {
        event.preventDefault()
        //  debugger
        if (getVariable === item.id) {
          setVariable(null)
        } else {
          setVariable(item.id)
        }
      }


      let selectedStatus = false
      if (getVariable===item.id) {
        selectedStatus = true
      }
        return (
            <Playlist key={item.id} id={item.id} name={item.name} songs={item.songs} handleClick={handleClick} selectedStatus={selectedStatus}/>
        )
    })

    

    return (
        <>
        <h3>Playlists</h3>
          {mappedPlaylists}
        </>
    )
}





export default PlaylistCollection


