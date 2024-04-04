import logo from '../logo.svg';
import './App.css';
import Playlist from '../playlist/playlist';
import SearchBar from '../searchbar/searchbar';
import SearchResults from '../searchresults/searchresults';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Jammming</h1>
      </header>
      
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
    </div>
  );
}

export default App;
