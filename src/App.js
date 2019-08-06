import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import Avatar from './components/Avatar';
import Greeting from './components/Greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Workshop',
      lastName: 'React',
      avatar: 'http://olegif.com/bin/gifs/00/25/06.gif',
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    e.preventDefault();
    this.setState({ firstName: 'Mercado libre' });
    // this.setState((prevState) => {
    //   return { firstName: `${prevState.firstName} Mercado Libre` };
    // });
  }

  render() {
    return (
      <div className="App" id="app">
        <Greeting
          h1Style={{ backgroundColor: 'green' }}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
        <Avatar picture={this.state.avatar} />
        <button style={{ fontSize: '34px' }} type="button" onClick={this.onClickHandler}>Cambiar nombre</button>
        <Greeting
          h1Style={{ backgroundColor: 'blue', color: 'white' }}
          firstName="Google"
          lastName="brand"
        />
        <Avatar picture={'https://www.google.cl/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'} />
      </div>
    );
  }
}

export default hot(module)(App);
