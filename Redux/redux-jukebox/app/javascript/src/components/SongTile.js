import React from 'react'

const SongTile = props => {
  let iconClassname;

  if (props.type === 'add') {
    iconClassname = 'fa-plus'
  } else if (props.type === 'delete') {
    iconClassname = 'fa-minus'
  }

  return(
    <div className='tile'>
      <h3>{props.song.title}</h3>
      <p>Album: {props.song.album_name}</p>
      <span>Year: {props.song.year}</span>
      <i className={`fas ${iconClassname}`} onClick={props.handleClick}></i>
    </div>
  )
}

export default SongTile
