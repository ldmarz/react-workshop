import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import TodayList from './components/TodayList';
import TomorrowList from './components/TomorrowList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App" id="app">
        <TodayList />
        <TomorrowList />
      </div>
    );
  }
}

export default hot(module)(App);
