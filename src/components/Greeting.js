import React, { Component } from 'react';

class Greeting extends Component {
  formatUserName(firstName, lastName) {
    return firstName + ' ' + lastName;
  }

  render() {
    return (
      <h1 style={this.props.h1Style}>
        Hola, {this.formatUserName(this.props.firstName, this.props.lastName)}!
      </h1>
    )
  }
}

export default Greeting;