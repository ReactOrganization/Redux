import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Car2 {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    this.getColor() {
      return
    }
  }
}

class App extends Component {
   
//   Car = (color) => {
//    this.color = color;
//  }
//   // we use prototype to create a method for a class in ES5
//  Car.prototype.getColor = () => {
//    return this.color
//  }
//
// let my Car = new Car('red')

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
        </header>
      </div>
    );
  }
}

export default App;
