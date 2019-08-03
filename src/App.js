import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import ColorBox from './components/ColorBox';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: '#333',
      laberToggle: 'Quitar',
      showColorBox: true
    }
    this.handlerOnClick = this.handlerOnClick.bind(this);
    this.handlerRemoveColorBox = this.handlerRemoveColorBox.bind(this);
  }
  
  handlerOnClick() {
    const randomColor = `#${Math.random().toString(16).slice(-6)}`;
    this.setState({color: randomColor});
  }

  handlerRemoveColorBox() {
    this.setState((prevState) => {
      return {laberToggle: prevState.showColorBox? 'Agregar': 'Quitar', showColorBox: !prevState.showColorBox};
    })
  }

  render() {

    const { color, laberToggle, showColorBox } = this.state;
    return (
      <div className="App">
        {showColorBox ? <ColorBox color={color}/> : null}
        <button type="button" onClick={this.handlerOnClick}>cambiar color</button>
        <button type="button" onClick={this.handlerRemoveColorBox}>{laberToggle}</button>
      </div>
    );
  }
}

export default hot(module)(App);
