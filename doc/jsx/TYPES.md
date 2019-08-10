# Tipos de componentes
Esencialmente existen 2 tipos de componentes, los componentes de funcion y los componentes de clase. Se diferencian principalmente por su declaracion
## Class component
```javascript
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
```
Este es un componente con el cual se le pueden incluir funciones (ciclo de vida) para interactuar de forma más detallada con su estado y sus propiedades.

## Function components
```javascript
const Avatar = (props) => (
  <img className="Avatar" src={props.picture} />
);
```
Los componentes de funcion son mucho mas sencillos de hacer y mas cortos de programar.
Esta sencilles trae como consecuencia que los componentes no posean un estado y no se puedan hacer muchas de las cosas que se hacen con un componente clase.
Estos componentes son utilizados mayormente para pintar secciones de nuestra aplicacion que carecen de cambios, o cuyos cambios son manejados por un componente padre.