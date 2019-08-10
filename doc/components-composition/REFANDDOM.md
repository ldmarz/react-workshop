# Referencias y el DOM
Las referencias proporcionan una forma de acceder a los nodos del DOM o a elementos React creados en el método de renderizado.
En un flujo normal en datos de React, las propiedades son la única forma en la que los componentes padres pueden interactuar con sus hijos. Para modificar un hijo, vuelves a renderizarlo con propiedades nuevas. Sin embargo, hay ciertos casos donde necesitarás modificar imperativamente un hijo fuera del flujo de datos típico. 
## Cuando usar referencias
Existen unos cuantos buenos casos de uso para referencias:
- Controlar enfoques, selección de texto, o reproducción de medios.
- Activar animaciones imperativas.
- Integración con bibliotecas DOM de terceros.
Un pequeño ejemplo seria crear un boton y hacer que el componente padre ruede la pantalla hasta el.
## Button.js
```javascript
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
```
## App.js
En `App.js` en el `constructor` agregamos una referencia por callback
```javascript
this.buttonRefCallback = (elem) => { this.buttonRef = elem; };
this.rollToButton = this.rollToButton.bind(this);
```
Agregamos la función `rollToButton` con la funcion `scrollIntoView` del API de javascript que coloca el pixel mas alto del nodo referenciado en el primer pixel del view port.
```javascript
rollToButton() {
  if (this.buttonRef) {
    this.buttonRef.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    });
  }
}
```
Y agregamos el boton
```javascript
<Button text="Roll to top!!!" buttonRef={this.buttonRefCallback} onClick={this.rollToButton} />
```
Get ready to roll!!!!