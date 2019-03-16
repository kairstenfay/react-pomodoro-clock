import React, { Component } from 'react';
import Pomodoro from './components/Pomodoro';
import './App.css';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-127100738-6');

ReactGA.pageview(window.location.pathname + window.location.search);

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
