import logo from './logo.svg';
import './App.css';
import React from 'react';
import firebase from "./firestore";

import "firebase/firestore";

function App() {
  function SendTime() {
    
    console.log("hi2")
    const db = firebase.firestore();
    console.log("hi")
    db.collection("users").add({
      fullname: this.state.fullname,
      email: this.state.email
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={SendTime}>
          UpdateButton
        </button>
      </header>
    </div>
  );
}

export default App;
