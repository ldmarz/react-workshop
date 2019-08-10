import withTodoListService from "./withTodoListService";
import List from "./List";

export default withTodoListService(List, "today");

/*class TodayList extends Component {
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
}*/
