# Composición de componentes con JSX
Podemos separar los componentes en distintas secciones y luego unirlos para crear un super componente.
Tenemos hasta ahora dos componentes que por ahora lo unico que hacen es renderizar el avatar del usuario y darle la bienvenida.
```
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';

const formatUserName = (user) => {
  return `${user.firstName} ${user.lastName}`;
}

const user = {
  firstName: 'Luis',
  lastName: 'Fuenmayor',
  avatar: 'https://lh3.googleusercontent.com/-pfYVJ6a4g2w/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reIM31YMp5DqyszmAwOKnNfWC1peg.CMID/s192-c/photo.jpg',
};

const h1Style = {
  backgroudColor: 'red',
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={h1Style}>
          Hola, {formatUserName(user)}!
        </h1>
        <img src={user.avatar} />
      </div>
    );
  }
}

export default hot(module)(App);
```
Facilmente podemos separar las logicas, los markups y los estilos de estos componentes, y luego unirlos formando un componente cuyas partes estan muy bien denotadas y separadas.
Dentro de nuestra carpeta `src` creamos la carpeta `components`, y dentro de `components` los archivos `Avatar.js` y `Greeting.js`, y procedemos a separar nuestras logicas.
## Avatar.js
```
// Avatar.js
import React from 'react';

const Avatar = (props) => (
  <img className="Avatar" src={props.picture} />
);

export default Avatar;
```
## Greeting.js
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
Luego de esto, basta con importar los componentes en nuestro componente principal `App.js`, que quedaría algo así:
## App.js
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
Y asi quedaria un componente compuesto de otros componentes, mucho mejor organizados y mas facil de leer.