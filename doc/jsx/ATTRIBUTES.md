# Especificar atributos con JSX
Para especificar atributos literales podemos usar doble comillas como lo estamos haciendo con el atributo `className`, que es el equivalente a usar `class`en HTML. No podemos usar `class` porque es una palabra reservada de JavaScript.
```javascript
<div className="App">
  <h1>Hola, {formatUserName(user)}! </h1>
</div>
```
Como atributo podemos pasar tambien expresiones JavaScript, agregamos una imagen como avatar de nuestro usuario:
```javascript
const user = {
  firstName: 'Luis',
  lastName: 'Fuenmayor',
  avatar: 'https://lh3.googleusercontent.com/-pfYVJ6a4g2w/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reIM31YMp5DqyszmAwOKnNfWC1peg.CMID/s192-c/photo.jpg',
};
```
Y podemos pasarla como atributo a un elemento usando las llaves
```javascript
<div className="App">
  <h1>Hola, {formatUserName(user)}! </h1>
  <img src={user.avatar} />
</div>
```