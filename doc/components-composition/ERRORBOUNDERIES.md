# Límites de errores
En el pasado, los errores de JavaScript dentro de los componentes solían corromper el estado interno de React y hacían que emitiera errores crípticos en siguientes renderizados. Estos errores siempre eran causados por un error previo en el código de aplicación, pero React no proveía una manera de gestionarlos elegantemente en componentes, y no podía recuperarse de ellos.
Un componente de clase (class component) se convierte en límite de errores si define uno (o ambos) de los métodos del ciclo de vida static getDerivedStateFromError() o componentDidCatch(). Usa static getDerivedStateFromError() para renderizar una interfaz de repuesto cuando se lance un error. Usa componentDidCatch() para registrar información de los errores.
```javascript
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, info) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      info: info,
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.info) {
      // Error path
      return (
        <div className="error">
          <h2 className="error__title">Algo se rompio, ¿Que será?</h2>
          <details className="error__details">
            <p>{this.state.error && this.state.error.toString()}</p>
            <p>{this.state.info.componentStack}</p>
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
};

export default ErrorBoundary;
```
Solo queda envolver nuestros componentes y forzar un error en el render de nuestros componentes.
Los límites de errores no capturan errores de:
- Manejadores de eventos (aprende más)
- Código asíncrono (p.ej. callbacks de setTimeout o requestAnimationFrame)
- Renderizado en el servidor
- Errores lanzados en el propio límite de errores (en lugar de en sus hijos)