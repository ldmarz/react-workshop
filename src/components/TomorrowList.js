import React, { Component } from 'react';
import List from './List';
import todoListService from '../service/todoList';

class TomorrowList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: todoListService.getList('tomorrow'),
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
