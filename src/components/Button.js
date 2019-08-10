import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="button_roll" onClick={this.props.onClick} ref={this.props.buttonRef} >{this.props.text}</button>
    );
  }
}

export default Button;
