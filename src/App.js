import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
import Body from './components/body';
import store from  './stores/configureStore.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body originAmount={store.getState().originAmount}/>
      </div>
    );
  }
}

export default App;
