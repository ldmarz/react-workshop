# Les presentamos JSX
Consideremos la siguiente declaración de esta variable:
```
const element = <h1>Hello, world!</h1>;
```
Lo que le estamos asignando a la constante `element` no es HTML ni un string, es codigo JSX que puede parecer un HTML simple pero por detras tiene todo el poder de javascript.
JSX produce un elemento React, y recomendamos su uso porque describe de manera simple como la UI se va a ver.

## ¿Por que JSX?
React asume el hecho de que la logica para renderizar esta conectada al resto de la logica de UI (como manejar eventos, cambios de estado, como se prepara la data para mostarla).
En vez de separarla poniendo el lenguaje de markup aparte de la logica, React une la lógica y el markup en unidades llamadas componentes.
React no requiere usar JSX, pero mucha gente lo considera de mucha ayuda como una guia visual cuando estamos trabajando con UI dentro de código JavaScript.