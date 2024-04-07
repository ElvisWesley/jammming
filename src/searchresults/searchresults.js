import React from 'react';
import './SearchResults.css';
import Tracklist from '../tracklist/tracklist';

function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h2>Search Results</h2>
      <Tracklist userSearchResults={props.userSearchResults} isRemoval={true} onAdd={props.onAdd}/>
    </div>
  );
}

export default SearchResults;