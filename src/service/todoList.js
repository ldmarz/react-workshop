import data from '../data/todo-list.json';

class DataSource {
  constructor() {
    this.data = data;
  }

  addItem(day, topic) {
    const id = this.data[day].length;
    this.data[day].push({
      id,
      topic,
      isDone: false,
    });
    return true;
  }

  getList(day) {
    return this.data[day];
  }

  updateItem(day, id) {
    const index = this.data[day].findIndex(item => item.id === id);
    const item = this.data[day][index];
    this.data[day].splice(index, 1, {
      ...item,
      isDone: !item.isDone
    });
  }
};

const Singleton = () => {
  let instance;

  const createInstance = () => new DataSource();

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
};

export default Singleton().getInstance();