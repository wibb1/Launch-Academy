import React, { Fragment, useState } from "react";
import Playlist from "./Playlist";
import Song from "./Song";

const Collection = (props) => {
  const [getPlayVariable, setPlayVariable] = useState(null);

  const mappedPlaylists = props.playlistData.map((list) => {
    const playHandleClick = () => {
      event.preventDefault();

      if (getPlayVariable === list.id) {
        setPlayVariable(null);
      } else {
        setPlayVariable(list.id);
      }
    };

    let selectedPlayStatus = false;
    if (getPlayVariable === list.id) {
      selectedPlayStatus = true;
    }
    return (
      <Playlist
        key={list.id}
        id={list.id}
        name={list.name}
        songs={list.songs}
        playHandleClick={playHandleClick}
        selectedPlayStatus={selectedPlayStatus}
      />
    );
  });
  const [getVariable, setVariable] = useState(null);
  const mappedSongs = props.songData.map((item) => {


    const handleClick = () => {
      event.preventDefault();

      if (getVariable === item.id) {
        setVariable(null);
      } else {
        setVariable(item.id);
      }
    };

    let selectedStatus = false;
    if (getVariable === item.id) {
      selectedStatus = true;
    }

    return (
      <Song
        key={item.id}
        id={item.id}
        name={item.name}
        artist={item.artist}
        album={item.album}
        selectedStatus={selectedStatus}
        handleClick={handleClick}
      />
    );
  });

  return (
    <>
      <h3>Playlists</h3>
      {mappedPlaylists}
      <h3>Songs</h3>
      {mappedSongs}
    </>
  );
};

export default Collection;
