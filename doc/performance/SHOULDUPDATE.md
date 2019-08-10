# shouldComponentUpdate y PureComponent
Si sabes que en algunas situaciones tu componente no necesita actualizarse, puedes retornar false desde `shouldComponentUpdate` para no pasar por todo el ciclo de vida, incluida la invocación de render().
La función es asi:
```javascript
shouldComponentUpdate(nextProps, nextState) {
  return true;
}
```
Esto solo sirve para cambios simples dentro de los `props` o `state` de un componente.
```javascript
class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.text !== nextProps.text) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        className="button__count"
        onClick={() => this.setState(prevState => ({ count: prevState.count + 1 }))}>
        {this.props.text} - {this.state.count}
      </button>
    );
  }
}
```
Si esta logica es muy repetitiva a lo largo de la aplicacion react ofrece `PureComponent`. La implementacion anterior quedaria asi:
```javascript
class CounterButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <button
        className="button__count"
        onClick={() => this.setState(prevState => ({ count: prevState.count + 1 }))}>
        {this.props.text} - {this.state.count}
      </button>
    );
  }
}
```
Para estructuras mas complejas dentro de nuestros `state` y `props` como objetos o arreglos, la mejor forma de optimizar el manejo de los datos es usar inmutabilidad.