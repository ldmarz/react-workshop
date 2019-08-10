import React, { Component } from 'react';

class ControlledComponent extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <h1>Componentes Controlados</h1>
          <label>
             Nombre
            <input type="text" />
          </label>
          <label>
             Descripci&oacute;n
            <textarea></textarea>
          </label>
          <label>
             Pa&iacute;s
            <select>
              <option value="argentina">Argentina</option>
              <option selected value="chile">Chile</option>
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