import logo from '../logo.svg';
import './App.css';
import Playlist from '../playlist/playlist';
import SearchBar from '../searchbar/searchbar';
import SearchResults from '../searchresults/searchresults';
import React, { useState } from 'react';
import Spotify from '../util/spotify/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([
    
  ]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
    
  ]);
  function addTrack(track) {
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      console.log("track already added");
      return;
    } else {
      setPlaylistTracks(currentPlaylistTracks => [...currentPlaylistTracks, track]);
    }
  }
  function removeTrack(track) {
    setPlaylistTracks(currentPlaylistTracks => currentPlaylistTracks.filter(currentTrack => currentTrack.id !== track.id));
    
  }
  function updatePlaylistName(name) {
    setPlaylistName(name);
  }
  function savePlaylist() {
    const trackURIs = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {

    })
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
      
  }
  function search(term) {
    Spotify.search(term).then(searchResults => setSearchResults(searchResults));
    console.log(term);
    }
  return (
    <div className="App">
      <header className="App-header">
      <h1>Jammming</h1>
      </header>
      
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
          <SearchResults userSearchResults={searchResults} onAdd={addTrack}/>
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} 
          onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}/>
        </div>
    </div>
  );
}

export default App;
