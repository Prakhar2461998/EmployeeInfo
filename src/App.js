import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/Info'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Employee Details</h2>
        </div>
       
       <Info />

      </div>
    );
  }
}

export default App;
