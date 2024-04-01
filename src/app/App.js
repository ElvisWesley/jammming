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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Jammming</h1>
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
          <Playlist />
      </div>
    </div>
  );
}

export default App;
