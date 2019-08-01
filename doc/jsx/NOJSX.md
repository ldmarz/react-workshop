# ReactJS sin JSX
Tambien podemos crear componentes y elementos sin usar una sola linea de JSX. Por ejemplo si queremos crear el siguiente elemento JSX:
```
<h1 className="greeting">
  Hola, world!
</h1>
```
Nuestro código JavaScript sería algo mas o menos así:
```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
Luego React crea un objeto con la siguiente estructura
```
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```
Luego React usa estos objetos para crear el DOM y mantenerlo actualizado.