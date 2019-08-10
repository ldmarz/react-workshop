# Inmutabilidad
Lo inmutable es lo opuesto a mutable, y mutable significa cambiante, modificable. Entonces, algo que es inmutable, es algo que no se puede cambiar.
Llevado al codigo, esto significa que en lugar de tener variables tradicionales, tendriamos que constantemente estar creando nuevos valores y reemplazando los antiguos.
Si en nuestro estado o propiedades de nuestros componentes tenemos arreglos, hay que evitar en lo posible modificarlos, al igual que los objetos.
¿Pero como vamos a hacer si queremos cambiar los datos?
Facil, creamos copias de nuestros arreglos y objetos y a estos agregamos las modificaciones, hay varias maneras de hacer esto:
## Arreglos
### Mutable
```javascript
const words = this.state.words;
words.push('marklar');
this.setState({ words: words });
```
### Inmutable
```javascript
this.setState(prevState => ({
  words: [ ...prevState.words, 'marklar' ],
}));
```
## Objetos
### Mutable
```javascript
const user = this.state.user;
user.lastName = 'Perez';
this.setState({ user: user });
```
### Inmutable
```javascript
this.setState(prevState => ({
  user: { ...prevState.user, lastName: 'Perez' },
}));
```
En las secciones mutable, aunque las partes internas del objeto y arreglo han cambiado, la referencia del objeto y arreglo no. Es el mismo dato en el exterior (por lo que una verificación de igualdad como `prevState.data === nextState.data` será `true` y como consecuencia volveria a renderizar nuestro componente).
