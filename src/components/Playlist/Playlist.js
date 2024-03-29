import React, { useCallback } from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

const Playlist = (props) => {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );

  const saveAlert = () => {
    alert('Your playlist has been saved!')
  }

  return (
    <div className="Playlist">
      <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      <TrackList
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button onClick={() => { props.onSave(); saveAlert(); }}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
