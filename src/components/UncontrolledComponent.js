import React, { Component } from 'react';

class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
      console.log("awqdasd")
    // this.input.current.value
    event.preventDefault();
    console.log(this.input.current.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <h1>Componente NO Controlado</h1>
          <label>
             email
            <input type="text" ref={this.input}/>
          </label>
          <input type="submit" value="Enviar"/>
        </form>
    );
  }
}

export default UncontrolledComponent;