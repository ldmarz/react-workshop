## Listas y keys
Cuando renderizamos un arreglo con `map`, serás advertido que una `key` debería ser proporcionada para ítems de lista. Una `key` es un atributo especial string que debes incluir al crear listas de elementos.
Las keys ayudan a React a identificar que ítems han cambiado, son agregados, o son eliminados. Las keys deben ser dadas a los elementos dentro del array para darle a los elementos una identidad estable. De no ser asi se pueden hacer renders de mas, les explico.
Con el codigo:
```javascript
{props.list.map((item, index) => (
  <li key={index}>
    {item.topic}
  </li>
))}
```
Renderizamos los elementos en el orden en que estan en la lista, pero ¿que pasa si agregamos un elemento al inicio de la lista?.
Teniendo el arreglo:
```json
[
  { "topic": "Hacer café" },
  { "topic": "Pasear a los perros" },
  { "topic": "Dar de comer a los perros" },
  { "topic": "Ir al workshop" },
]
```
Se renderizaria asi:
```javascript
[
  { 
    type: 'li',
    key: 0,
    children: "Hacer café" 
  },
  { 
    type: 'li',
    key: 1,
    children: "Pasear a los perros" 
  },
  { 
    type: 'li',
    key: 2,
    children: "Dar de comer a los perros" 
  },
  { 
    type: 'li',
    key: 3,
    children: "Ir al workshop" 
  },
]
```
Si agregamos una nueva tarea al comienzo pasaria lo siguiente:
```javascript
[
  { 
    type: 'li',
    key: 0,
    children: "Nueva tarea antes del cafe" // CAMBIO
  },
  { 
    type: 'li',
    key: 1,
    children: "Hacer café"  // CAMBIO
  },
  { 
    type: 'li',
    key: 2,
    children: "Pasear a los perros"  // CAMBIO
  },
  { 
    type: 'li',
    key: 3,
    children: "Dar de comer a los perros"  // CAMBIO
  },
  { 
    type: 'li', // CAMBIO
    key: 4, // CAMBIO
    children: "Ir al workshop"  // CAMBIO
  },
]
```
Ahora si escogemos algo unico como key, por ejemplo el topic:
```javascript
{props.list.map(item => (
  <li key={item.topic}>
    {item.topic}
  </li>
))}
```
Nuestros componentes serian asi:
```javascript
[
  { 
    type: 'li',
    key: "Hacer café",
    children: "Hacer café" 
  },
  { 
    type: 'li',
    key: "Pasear a los perros",
    children: "Pasear a los perros" 
  },
  { 
    type: 'li',
    key: "Dar de comer a los perros",
    children: "Dar de comer a los perros" 
  },
  { 
    type: 'li',
    key: "Ir al workshop",
    children: "Ir al workshop" 
  },
]
```
Si agregamos una nueva tarea al comienzo pasaria lo siguiente:
```javascript
[
  { 
    type: 'li', // CAMBIO
    key: "Nueva tarea antes del cafe", // CAMBIO
    children: "Nueva tarea antes del cafe" // CAMBIO
  },
  { 
    type: 'li',
    key: "Hacer café",
    children: "Hacer café" 
  },
  { 
    type: 'li',
    key: "Pasear a los perros",
    children: "Pasear a los perros" 
  },
  { 
    type: 'li',
    key: "Dar de comer a los perros",
    children: "Dar de comer a los perros" 
  },
  { 
    type: 'li',
    key: "Ir al workshop",
    children: "Ir al workshop" 
  },
]
```
Los cambios y re-renders bajan drasticamente y en lista largas de elementos mejoraria dramaticamente nuestro performance.
La mejor forma de elegir una key es usando un string que identifique únicamente a un elemento de la lista entre sus hermanos. Habitualmente vas a usar IDs de tus datos como key, de no tenerlo es recomendable crear una firma de tu objeto.
