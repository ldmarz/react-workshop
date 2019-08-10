# Componentes de orden superior
Un componente de orden superior es una técnica avanzada en React para el reuso de la lógica de componentes. Son un patrón que surge de la naturaleza composicional de React.
En concreto, un componente de orden superior es una función que recibe un componente y devuelve un nuevo componente.
Mientras que un componente transforma props en interfaz de usuario, un componente de orden superior transforma un componente en otro.
Vamos al ejemplo, veamos un poco los componentes que tenemos `TodayList.js` y `TomorrowList.js`.
## TodayList.js
```javascript
import React, { Component } from 'react';
import List from './List';
import todoListService from '../service/todoList';

class TodayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: todoListService.getList('today')
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e, id) {
    e.preventDefault();
    todoListService.updateItem('today', id);
    setTimeout(() => {
      this.setState({ list: todoListService.getList('today') });
    }, 10);
  }

  render() {
    return (
      <div>
        <h1>Today to-do list</h1>
        <List list={this.state.list} handler={this.onChangeHandler} />
      </div>
    );
  }
}

export default TodayList;
```
## TomorrowList.js
```javascript
import React, { Component } from 'react';
import List from './List';
import todoListService from '../service/todoList';

class TomorrowList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: todoListService.getList('tomorrow')
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e, id) {
    e.preventDefault();
    todoListService.updateItem('tomorrow', id);
    setTimeout(() => {
      this.setState({ list: todoListService.getList('tomorrow') });
    }, 10);
  }

  render() {
    return (
      <div>
        <h1>Tomorrow to-do list</h1>
        <List list={this.state.list} handler={this.onChangeHandler} />
      </div>
    );
  }
}

export default TomorrowList;
```
Si se fijan el codigo es muy parecido, casi identico, solo cambia la fuente un parametro con el que se llama a las funciones asincronas.
Esta logica se podria llevar facilmente a un HOC. Hagamos nuestro propio HOC. Creamos el componente `withTodoListService`
## withTodoListService.js
```javascript
import React, { Component } from 'react';
import todoListService from '../service/todoList';

const withTodoListService = (WrappedComponent, listName) => {
  class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        list: todoListService.getList(listName)
      };
      this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e, id) {
      e.preventDefault();
      todoListService.updateItem(listName, id);
      setTimeout(() => {
        this.setState({ list: todoListService.getList(listName) });
      }, 10);
    }

    render() {
      const forwardProps = {
        name: listName,
        handler: this.onChangeHandler,
        list: this.state.list,
        ...this.props,
      };
      return <WrappedComponent {...forwardProps}/>;
    }
  }

  return Wrapper;
}

export default withTodoListService;
```
Como pueden ver esta toda la logica de obtener la data y actualizar con los eventos. Simplemente se le pasan los props al componente que vamos a renderizar. Ahora para esto, pasemos todo lo que es UI a un nuevo componente.
## TodoList.js
```javascript
import React from 'react';
import List from './List';

const TodoList = (props) => {
  return (
    <div>
      <h1>To-do list for {props.name}</h1>
      <List list={props.list} handler={props.handler} />
    </div>
  );
};

export default TodoList;
```
Ya con la logica y la ui separadas podemos modificar `TodayList.js` y `TomorrowList.js` para envolverlos con un HOC.
## TodayList.js
```javascript
import TodoList from './TodoList';
import withTodoListService from './withTodoListService';

export default withTodoListService(TodoList, 'today');
```
## TomorrowList.js
```javascript
import TodoList from './TodoList';
import withTodoListService from './withTodoListService';

export default withTodoListService(TodoList, 'today');
```
Ya creamos nuestro primer HOC.