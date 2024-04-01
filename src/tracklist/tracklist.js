import React from 'react';
import './Tracklist.css';
import Track from '../track/track';

function Tracklist() {
  return (
    <div className="Tracklist">
      <Track />
      <Track />
      <Track />
    </div>
  );
}

export default Tracklist;