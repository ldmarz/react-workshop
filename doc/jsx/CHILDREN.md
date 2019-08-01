# Especificar hijos con JSX
Como podemos observar, al un tag estar vacio lo cerramos con `/>`, pero si queremos que ese elemento tenga hijos, basta con meterlos dentro y cerrar el tag como un elemento HTML comun y corriente. Tal cual como hicimos con el `div`
```
<div className="App">
  <h1>Hola, {formatUserName(user)}! </h1>
  <img src={user.avatar} />
</div>
```
En este caso `div` es un elemento que tiene como hijos un elemento `h1`y un elemento `img`. El elemento `h1`no tiene otros elementos como hijos pero si tiene nuestro saludo como contenido.