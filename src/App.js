import './App.css';
import React from 'react';
import BoxGridScene from './scenes/box-grid-scene';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          June Ho basic REACT site
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <BoxGridScene />
      </header>
    </div>
  );
}

export default App;
