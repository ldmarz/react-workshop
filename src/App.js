import React, { Component } from 'react';
import axios from 'axios';
import { hot } from 'react-hot-loader';
import './App.scss';

import ControlledComponent from './components/ControlledComponent';
import UncontrolledComponent from './components/UncontrolledComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ControlledComponent />
        {/* <UncontrolledComponent /> */}
      </div>
    );
  }
}

export default hot(module)(App);
