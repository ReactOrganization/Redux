import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

let defaultState = 0

//reducer is a function that updates state and it takes two arguments state and action
//(state = defaultState) is equivalent of ES5 state = state || defaultState - if state is defined use state if not, use dafaultState
let amount = (state = defaultState, action) => {
  return state + 1
}

//store is where you save you state
let store = createStore(amount);

//subscribe watches for store update. store.getState() - a way we read the state
store.subscribe(() => {
  console.log('state', store.getState());
})

//to update store we use store.dispatch that fires an action and action must be an object
store.dispatch({type: ''})

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>App component that inherits render method from React.Components</p>
      </div>
    );
  }
}

export default App;
