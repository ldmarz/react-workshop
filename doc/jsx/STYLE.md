# Estilos dentro de JSX
Ya en el setup creamos un archivo que llamamos `App.scss` que contiene unos pocos estilos, pero podemos agregar muchos mas, pero JSX nos permite agreagar estilos dentro del codigo JavaScript en forma de un objeto.
```
<div className="App">
  <h1>Hola, {formatUserName(user)}! </h1>
  <img src={user.avatar} />
</div>
```
Para agregar estilos a los elementos que ya hicimos basta con crear un objeto.
```
const h1Style = {
  backgroudColor: 'red',
};
```
Como pueden observar, estamos modificando el parametro CSS `background-color`, pero para modificarlo dentro de JSX solo basta con transformar su nombre a `camelCase`.
`background-color` ahora lo llamamos `backgroudColor`dentro del objeto de estilos y le pasamos este objeto como atributo a `h1`.
```
<div className="App">
  <h1 style={h1Style}>Hola, {formatUserName(user)}! </h1>
  <img src={user.avatar} />
</div>
```
Si queremos dejar los estilos fuera del JSX, podemos hacerlo en nuestro `App.scss` y especificar clases y ids en nuestrs elementos con `className`y `id`, respectivamente. Para luego referenciarlos dentro de nuestro archivo de estilos como hariamos con cualquier archivo CSS.