import React, { Component } from 'react';
import Pomodoro from './components/Pomodoro';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Pomodoro Clock
        </header>
        <Pomodoro />
      </div>
    );
  }
}

export default App;
