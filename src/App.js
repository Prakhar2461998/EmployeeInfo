import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/Info';
import  { Provider } from 'react-redux';

import store from './store';
import InfoForm from './components/InfoForm';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Employee Details</h2>
        </div>
       <InfoForm />
       <Info />

      </div>
      </Provider>                                                                                                                                                                                                                                                                   
    );
  }
}

export default App;
