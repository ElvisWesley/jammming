import React from 'react';
import './Playlist.css';
import Tracklist from '../tracklist/tracklist';

function Playlist() {
  return (
    <div className="Playlist">
      <h2>Playlist</h2>
      <Tracklist />
      <button>Save to Spotify</button>
    </div>
  );
}

export default Playlist;