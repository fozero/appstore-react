import React from 'react';
import logo from './logo.svg';
import List from './components/List.js'
import './App.css';
import Search from './components/Search.js';
import Recommend from './components/Recommend.js';

function App() {
  return (
    <div className="App">
      <Search></Search>
      <Recommend></Recommend>
      <List></List>
    </div>
  );
}

export default App;
