import React from 'react';
import './App.css';

import TabBar from '../TabBar/TabBar';
import ToDoList from '../ToDoList/ToDoList';
import TaskItem from '../TaskItem/TaskItem';

class App extends React.Component {
  constructor(props) {
    super(props);    

    this.state= {
      tasks: []
    }

    this.addItem = this.addItem.bind(this);
  }

  addItem(task) {
    let newStateArray = this.state.tasks.slice();
    newStateArray.unshift(task);
    this.setState({ tasks: newStateArray });
  }

  render() {
    return (
      <div>
        <h1 className="mainTitle">
          To-Do List
        </h1>
        <div className="App">
          <TabBar />
          <ToDoList 
            addItem={this.addItem}
            tasks={this.state.tasks}
          />
          {/* <CompletedList /> */}
        </div>
      </div>
    )
  }
}

export default App;