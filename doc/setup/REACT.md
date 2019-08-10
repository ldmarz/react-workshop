# Setup de ReactJS
Para programar con ReactJS, no es instalar y ya, antes hay que hacer unas pequeñas instalaciones y configuraciones para arrancar.

## Inicializar el proyecto
Partimos de que ya tenemos NodeJS instalado, si aún no lo has instalado puede ir a Setup de NodeJS.
Creamos nuestra carpeta donde tendremos el proyecto con `mkdir react-workshop`
Entramos en la carpeta con `cd react-workshop`
Y desde adentro hacemos `npm i`para inicializar el directorio como un proyecto de NodeJS, y de una vez podemos inicializarlo como un repositorio Git para tener control de versiones e ir guardando los cambios, esto con `git init`. Creamos el archivo `.gitignore` para excluir por lo menos el directorio `node_modules`que es donde se instalan las dependencias y uno que otro archivo del sistema operativo y la build.
```
# mac files
.DS_Store

# dependencies
node_modules

# build
dist
```
Creamos los directorios `public` donde guardaremeos todo nuestro contenido estático y nuestro `index.html` que luego utilizara ReactJS para renderizar nuestra app. Podemos copiar este código html en public/index.html para empezar:
```html
<!-- sourced from https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html -->
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>React Starter</title>
</head>

<body>
  <div id="root"></div>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <script src="../dist/bundle.js"></script>
</body>

</html>
```
Las lineas mas importantes son las de `<div id="root"></div>` y la de `<script src="../dist/bundle.js"></script>`, que son las encargadas de decir donde se renderizara nuestra app. Pero primero tenemos que asegurarnos de que nuestro codigo puede ser transpilado para que lo entiendan todos los navegadores, y para eso utilizamos Babel.

## Babel
Empezamos por instalar Babel con `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react`.
`babel-core`es el paquete principal y es necesario para transformar nuestro código. `babel-cli`nos permite compilar archivos desde la terminal. `preset-react` y `preset-env`son ambos paquetes que nos permiten transformar sabores especificos de codigo, en este caso `env`nos deja transformar ES6 a javascript mas tradicional y `react`hace lo mismo pero con código JSX (o JavaScript extendido, que es el codigo de ReactJS).

En la raíz del proyecto creamos el archivo `.babelrc` y ponemos el siguiente código:
```json
{
  "presets": ["@babel/env", "@babel/preset-react"]
}
```
Babel tiene muchos otros plugins disponibles que pueden ser usados para transformar cualquier código javascript.

## Webpack
Ahora necesitamos instalar y configurar Webpack. Lo instalamos con `npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass babel-loader`. Webpack usa loaders para procesar diferentes tipos de archivos y construir la app. Tambien nos da un servidor de desarrollo para ver los cambios en nuestros componentes mientras desarrollamos. Para esto primero tenemos que configurar webpack.
Creamos un nuevo archivo el el directorio raíz `webpack.config.js`. Éste archivo exporta un objeto con la configuración de webpack. Explicamos rapidamente en el mismo archivo para que sirve cada sección.
```javascript
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  stats: {
    warnings: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

```

### React
Primero necesitamos instalar dos modulos mas `react` y `react-dom`, para eso corremos `npm install --save react react-dom react-hot-loader`.
Despues tenemos que decirle a nuestro React que se enganche a nuestro DOM (el que esta en nuestro `index.html`). Creamos el archivo `index.js` en el directorio `src`. Este es un pequeño archivo que hace bastante para nuestra app de React.
```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("root"));
```
`ReactDOM.render` es la funcion que le dice a React que y donde renderizar. En este caso estamos renderizando el componente `App` (que crearemos pronto). Y esta siendo renderizado en el elemento de nuestro DOM con el id `"root"`, el cual esta en la línea 12 de nuestro `index.html`.

Ahora creamos otro componente en el directorio `src` llamado `App.js` con el siguiente código:
```javascript
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import './App.scss';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default hot(module)(App);
```
Ya por el codigo HTML o mejor dicho JSX nos podemos imaginar como se verá nuestra app. Mientras estamos en esto, agreguemos de una vez el `App.scss` que ya estamos importando en nuestro componente:
```scss
$app-font-family: Arial, Helvetica, sans-serif;

.App {
  margin: 1rem;
  font-family: $app-font-family;
}
```
Y ya tenemos una aplicacion funcional en react. Para arrancar nuestra app lo podemos hacer ejecutando `webpack-dev-server --mode development`. Podemos agregar este comando a nuestro `package.json`como `start`, y una vez aqui, agregamos el `build` para generar nuestra app, nuestro archivo quedaría algo así:
```json
{
  "name": "react-workshop-project",
  "version": "1.0.0",
  "description": "ReactJS project for workshop",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --mode development",
    "build": "webpack --mode development",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.5.0",
    "@babel/core": "^7.5.0",
    "@babel/preset-env": "^7.5.2",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.6",
    "css-loader": "^3.0.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.35.3",
    "webpack-cli": "^3.3.5",
    "webpack-dev-server": "^3.7.2"
  },
  "dependencies": {
    "lodash": "^4.17.15",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-hot-loader": "^4.12.5"
  }
}
```

## ESlint
Por ultimo instalaremos eslint que nos ayudara a crear codigo limpio y a prueba de errores sintacticos. Empecemos por instalar eslint y sus modulos para webpack con `npm install --save-dev eslint eslint-loader babel-eslint`.
Luego de esto hay que hacer un pequeño ajuste en nuestro `webpack.config.js`, agregamos la siguiente regla:
```javascript
{
  test: /\.(js)$/,
  exclude: /node_modules/,
  use: ["babel-loader", "eslint-loader"]
},
```
Listo esto, instalamos la configuracion de airbnb que esta bastante buena con `npx install-peerdeps --dev eslint-config-airbnb`. Luego creamos nuetro archivo de configuracion para eslint en el directorio raíz llamado `.eslintrc` y agregamos:

```json
{
  "parser": "babel-eslint",
  "rules": {
    "max-len": "off",
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "off"
  },
  "globals": {
    "window": true,
    "document": true
  }
}
```
Corremos el proyecto y vemos los errores, luego de corregirlos tendremos un codigo mucho mas limpio y legible y listo para agregar mas.

Para correr el proyecto basta con ejecutar en consola `npm start` e ingresar a `http://localhost:3000`.