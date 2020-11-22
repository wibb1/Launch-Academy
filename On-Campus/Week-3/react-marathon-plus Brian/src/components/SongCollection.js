import React, { Fragment, useState } from 'react'
import Song from './Song'


const SongCollection = (props) => {
  const [getVariable, setVariable] = useState(null);
 
  const mappedSongs = props.songData.map((item) => {

    const handleClick = () => {
      event.preventDefault();
      //  debugger
      if (getVariable === item.id) {
        setVariable(null);
      } else {
        setVariable(item.id)
      }
    }

    let selectedStatus = false;
    if (getVariable === item.id) {
      selectedStatus = true;
    }


    return (
      <Song key={item.id} id={item.id} name={item.name} artist={item.artist} album={item.album} selectedStatus={selectedStatus} handleClick={handleClick}/>
    )
  })
  

  return (
    <>
      <h3>Songs</h3>
      {mappedSongs}
    </>
  )
}

export default SongCollection