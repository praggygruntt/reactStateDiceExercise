import React, { Component } from 'react';
import Die from './Die';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Die face={"six"}/>
        <Die face={"six"}/>
        <Die face={"six"}/>
        <Die face={"six"}/>
      </div>
    );
  }
}

export default App;
