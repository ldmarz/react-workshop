import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import Avatar from './components/Avatar'
import Greetings from './components/Greetings'

const user = {
  firstName: 'Lenin',
  lastName: 'Martinez',
  avatar: 'https://cdn.arstechnica.net/wp-content/uploads/2018/10/NewGlenn-2-800x450.jpeg'
};

const h1Style = {
  backgroundColor: "green",
  width: "500px"
};

class App extends Component {
  render() {
    return (
      <div className="App" id="app">
          <Greetings
              h1Style={h1Style}
              firstName={user.firstName}
              lastName={user.lastName}/>

          <Avatar picture={user.avatar}/>
      </div>
    );
  }
}

export default hot(module)(App);
