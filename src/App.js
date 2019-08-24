import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      items: []
    }

    this.handlerInput = this.handlerInput.bind(this);
    this.callToML("iphone")
    this.cardStyle = {
      width: "600px",
      height: "50px",
    }
  }
  /*
    Actividad Nº 2

    - Crear buscador de productos utilizando la api de Mercado Libre
    - usar Axios para hacer una llamada a https://api.mercadolibre.com/sites/MLC/search?q={query}
    - Donde query es obtenido por medio input de tipo text (componente controlado)
    - Tomar los items de los resultados de busqueda y guardar en el state items
    - Pintar los resultados de busqueda como una lista.
    - Utiliza como ejemplo el formato de los rows de los resultados de busqueda (https://listado.mercadolibre.cl/iphone)
    - Cada fila debe contener imagen del producto, titulo y precio
    - Agregar dentro del .nav-header el logo (https://http2.mlstatic.com/ui/navigation/4.5.0/mercadolibre/logo__large_plus@2x.png)
  */

  handlerInput(event) {
    console.log(event)
    if (event.key === 'Enter') {
      const value = this.input.current.value;
      this.callToML(value)
    }
  }

  callToML(value) {
    axios.get(`https://api.mercadolibre.com/sites/MLC/search?q=${value}`)
      .then(response => {
        console.log(response.data.results)
        this.setState({
          input: value,
          items: response.data.results
        })
      })
  }

  render() {
    const {items} = this.state;
    return (
      <div className="App">
        <div className="nav-header">
          <input ref={this.input} onKeyDown={this.handlerInput}/>
        </div>

        {
          items.map(item => (
            <div >
              <div className={"rowContainer"}>
                <div className={"pictureContainer"}>
                  <img src={item.thumbnail} />
                </div>

                <div className={"textContainer"}>
                  <div>
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        
      </div>
    );
  }
}

export default hot(module)(App);
