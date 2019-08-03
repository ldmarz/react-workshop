import React, { Component } from 'react';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor');
    }

    shouldComponentUpdate() {
      console.log('shouldComponentUpdate');
      return true
    }

    componentDidMount() {
      console.log('componentDidMount');
    }

    componentDidUpdate() {
      console.log('componentDidUpdate');
    }

    componentWillUnmount() {
      console.log('componentWillUnmount');
    }

    render() {
        const { color } = this.props;
        return (
            // eslint-disable-next-line max-len
          <div className="color-box" style={{ backgroundColor: color, width: '300px', height: '300px' }}>
            {color}
          </div>
        );
    }
}

export default ColorBox;
