import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Gagtoon restaurant.
        </p>
        <img src="logo.png" className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </header>
      <Login/>
    </div>
  );
}

export default App;
