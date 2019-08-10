import React, { Component } from 'react';
import axios from 'axios';

class ControlledComponent extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.selectRef = React.createRef();
    this.state = {
        name: "lenin",
        country: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post("http://localhost:8080/submit-form", {name: "lenin"})
  }

  handleChangeInput(event) {
    this.setState({
        name: event.target.value
    });
  }

  handleChangeSelect(event) {
    this.setState({
      country: event.target.value
    })
  }

  render() {
    const {name, country} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
          <h1>Componentes Controlados</h1>
          <label>
             Nombre: {name}
            <input type="text" ref={this.inputRef} value={name} onChange={this.handleChangeInput}/>
          </label>
          <label>
             Descripci&oacute;n
            <textarea></textarea>
          </label>
          <label>
             Pa&iacute;s : {country}
            <select onChange={this.handleChangeSelect} value={country}>
              <option value="argentina">Argentina</option>
              <option value="chile">Chile</option>
              <option value="colombia">Colombia</option>
              <option value="venezuela">Venezuela</option>
            </select>
          </label>
          <input type="submit" value="Enviar"/>
        </form>
    );
  }
}

export default ControlledComponent;