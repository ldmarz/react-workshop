import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import Avatar from './components/Avatar'

const user = {
  firstName: 'Lenin',
  lastName: 'Martinez',
  avatar: 'https://cdn.arstechnica.net/wp-content/uploads/2018/10/NewGlenn-2-800x450.jpeg'
};

const formatUserName = (user) => {
  return `${user.firstName} ${user.lastName}`
};

const h1Style = {
  backgroundColor: "red",
  width: "500px"
};


class App extends Component {
  render() {
    return (
      <div className="App" id="app">
        <h1 style={h1Style}> Hello, World! {formatUserName(user)}</h1>
        <Avatar picture={user.avatar}/>
      </div>
    );
  }
}

export default hot(module)(App);
