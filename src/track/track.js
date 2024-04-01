import React from 'react';
import './Track.css';

function Track() {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>Title</h3>
        <p>Artist | Album</p>
      </div>
      <button className="Track-action">+</button>
    </div>
  );
}

export default Track;