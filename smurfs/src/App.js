import React, { Component } from "react";
import axios from 'axios';

import smurfList from './components/smurfList';





import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        {console.log(this)}
      </div>
    );
  }
}

export default App;
