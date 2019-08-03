# State - Estado del componente
Dentro de un componente ademas de los `props`, tambien tenemos el `state`, y estas son atributos que solo existen dentro del componente. Podemos ver lo que es un `state` con nuestro ejemplo pasando la variable usuario al estado del componente padre.
```
// App.js
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import Avatar from './components/Avatar';
import Greeting from './components/Greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Luis',
      lastName: 'Fuenmayor',
      avatar: 'https://lh3.googleusercontent.com/-pfYVJ6a4g2w/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reIM31YMp5DqyszmAwOKnNfWC1peg.CMID/s192-c/photo.jpg',
    };
  }
  render() {
    return (
      <div className="App">
        <Greeting firstName={this.state.firstName} lastName={this.state.lastName} />
        <Avatar picture={this.state.avatar} />
      </div>
    );
  }
}

export default hot(module)(App);
```
## setState
Dentro de un componente pueden ocurrir eventos que nosotros queramos que modifiquen el estado, por ejemplo podriamos agregar un botón que al hacer click cambie el contenido del `state`. Para esto tenemos que usar `setState`
```
<button type="button" onClick={() => this.setState({ firstName: 'Sergio', lastName: 'Toro' })}>
  Cambiar nombre
</button>
```
El uso de la funcion setState de un componente esta definida como
```
setState(updater, callback)
```
Donde `updater` es un objeto que puede o no contener atributos ya definidos en el estado, y `callback` es la funcion donde podemos acceder al `state` y `props` antes de que ocurra el cambio. Por ejemplo:
```
this.setState({ quantity: 2 })
```
Esto cambia `quantity` a 2 dentro del `state`, o lo crea con valor 2:
```
this.setState({ quantity: 2 })
```
Mientras que esto:
```
this.setState((state, props) => {
  return { counter: state.counter ?  state.counter + 1 : 1 };
});
```
De existir la variable `counter` dentro del estado la incrementa en 1, sino la crea con valor 1.