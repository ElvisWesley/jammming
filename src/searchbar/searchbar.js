import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const [term, setTerm] = useState('');
  function passTerm() {
    props.onSearch(term); 
  }
  function handleTermChange(e) {
    setTerm(e.target.value);
  }
  return (
    <div className="SearchBar">
      <input placeholder="Enter a song title" onChange={handleTermChange}/>
      <button className="SearchButton" onClick={passTerm}>SEARCH</button>
    </div>
  );
}

export default SearchBar;