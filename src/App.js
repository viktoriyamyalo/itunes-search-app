import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/search-bar';
import TracksList from './components/tracks-list';



class App extends Component {
  render() {
    return (
      <div className="App">
        
        <SearchBar/>
        <TracksList />
        
      </div>
    );
  }
}

export default App;
