import React, { Component } from 'react';

export default class Greetings extends Component{
    formatUserName(firstName, lastName) {
        return `${firstName} ${lastName}`
    }

    render() {
        return (
            <h1 style={this.props.h1Style}>
                hola {this.formatUserName(this.props.firstName, this.props.lastName)}
            </h1>
        )
    }
}