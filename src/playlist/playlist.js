import React from 'react';
import './Playlist.css';
import Tracklist from '../tracklist/tracklist';

function Playlist(props) {
  function handleNameChange(e) {
    props.onNameChange(e.target.value);
  }
  return (
    <div className="Playlist">
      <input className="Playlist-input" defaultValue={props.playlistName} onChange={handleNameChange}/>
      <Tracklist userSearchResults={props.playlistTracks} onRemove={props.onRemove} isRemoval={false}/>
      <button onClick={props.onSave}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;