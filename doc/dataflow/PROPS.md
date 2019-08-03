# Props - Propiedades del componente
Cuando hicimos el componente `App.js` utilizamos los `props`. Los `props` son las propiedades o atributos entrantes de un componente.
```
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import Avatar from './components/Avatar';
import Greeting from './components/Greeting';

const user = {
  firstName: 'Luis',
  lastName: 'Fuenmayor',
  avatar: 'https://lh3.googleusercontent.com/-pfYVJ6a4g2w/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reIM31YMp5DqyszmAwOKnNfWC1peg.CMID/s192-c/photo.jpg',
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting firstName={user.firstName} lastName={user.lastName} />
        <Avatar picture={user.avatar} />
      </div>
    );
  }
}

export default hot(module)(App);
```
En el `App.js` tenemos 2 componentes hijos de `App` que son `Avatar` y `Greeting`. Y a estos les estamos pasando atributos. A `Avatar` le estamos pasando `picture` y a `Greeting` le estamos pasando `firstName` y `lastName`.
```
<Greeting firstName={user.firstName} lastName={user.lastName} />
<Avatar picture={user.avatar} />
```
Ahora si observamos dentro de nuestros componentes hijos
```
// Avatar.js
import React from 'react';

const Avatar = (props) => (
  <img className="Avatar" src={props.picture} />
);

export default Avatar;
```
```
// Greeting.js
import React from 'react';

const formatUserName = (user) => {
  return `${user.firstName} ${user.lastName}`;
}

const h1Style = {
  backgroudColor: 'red',
};

const Greeting = (props) => (
  <h1 className="Greeting" style={h1Style}>
    Hola, {formatUserName({ firstName: props.firstName, lastName: props.lastName })}!
  </h1>
);

export default Greeting;
```
Podemos observar como dentro de nuestros componentes estamos llamando a `props.picture`, `props.firstName` y `props.lastName`. Estas son las propiedades o `props`de nuestros componentes. Lo que en la llamada de un componente son atributos, por dentro son propiedades.