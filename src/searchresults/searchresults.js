import React from 'react';
import './SearchResults.css';
import Tracklist from '../tracklist/tracklist';

function SearchResults() {
  return (
    <div className="SearchResults">
      <h2>Search Results</h2>
      <Tracklist />
    </div>
  );
}

export default SearchResults;