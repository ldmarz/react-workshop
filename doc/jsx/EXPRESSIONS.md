
# Expresiones dentro de JSX
Un ejemplo comun es mostrar data que puede variar dentro de un JSX, esto se hace de manera facil al llamar a una variable encerrada dentro de llaves, usemos nuestro componente App.js
Declarando cualquier variable dentro de nuestro código JavaScript, podemos acceder a ella desde nuestro código JSX.
```
<div className="App">
  <h1>Hola, {name}! </h1>
</div>
```
Se puede poner cualquier expresion valida de JavaScript dentro de las llaves. Por ejemplo `2 + 2`, `user.email` o `functionName(param)`. Como ejemplo creemos el objeto user y una funcion para mostrar su nombre en el formato que queramos.
```
const user = {
  firstName: 'Luis',
  lastName: 'Fuenmayor',
};
```
Y una funcion para el formato:
```
const formatUserName = (user) => {
  return `${user.firstName} ${user.lastName}`;
}
```
Ahora, dentro de nuestra funcion `render` del componente `App` modificamos el código:
```
render() {
  return (
    <div className="App">
      <h1>Hola, {formatUserName(user)}! </h1>
    </div>
  );
}
```
## JSX es una expresión también
Despues de compilar JSX se convierte en llamadas a funciones Javascript comunes y corrientes. Esto significa que puedes usar JSX dentro de otras funciones.
```
const getGreeting = (user) => {
  if (user) {
    return <h1>Hola, {formatUserName(user)}!</h1>;
  }
  return <h1>Hola, invitado.</h1>;
}
```