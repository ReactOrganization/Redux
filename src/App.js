import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
import Body from './components/body';
import store from  './stores/configureStore.js'

class App extends Component {
  componentDidMount() {
    store.subscribe(() =>{
      this.setState({})    
    })
  }
  render() { return (
      <div className="App">
        <Body originAmount={store.getState().originAmount} change={this.handleOriginAmountChange}/>
      </div>
    );
  }
}

export default App;
