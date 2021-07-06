import React from 'react';
import './App.css';


import TabBar from '../TabBar/TabBar';
import ToDoList from '../ToDoList/ToDoList';
import CompletedList from '../CompletedList/CompletedList';

class App extends React.Component {
  constructor(props) {
    super(props);    

    this.state= {
      tasks: [],
      completedTasks: [],
      toDoListVisibility: "block",
      completedListVisibility: "none"
    };

    this.addItem = this.addItem.bind(this);
    this.completeItem = this.completeItem.bind(this);
    this.toggleToDoList = this.toggleToDoList.bind(this);
    this.toggleCompletedList = this.toggleCompletedList.bind(this);
  }

  addItem(task) {
    let newStateArray = this.state.tasks.slice();
    newStateArray.unshift(task);
    this.setState({ tasks: newStateArray });
    console.log(newStateArray)
  }

  completeItem(taskIndex) {
    let currentTasks = this.state.tasks;
    const newItem = currentTasks.filter((item, index) => index == taskIndex);
    this.setState(currentTasks => ({
      completedTasks: [...currentTasks.completedTasks, newItem]
    }));
    const newTaskList = currentTasks.filter((item, index) => index !== taskIndex);
    this.setState(currentTasks => ({
      tasks: newTaskList
    }))
  }

  toggleToDoList() {
    this.setState({ toDoListVisibility: "block" });
    this.setState({ completedListVisibility: "none" })
  }

  toggleCompletedList() {
      this.setState({ completedListVisibility: "block" });
      this.setState({ toDoListVisibility: "none" })
  }


  render() {
    return (
      <div>
        <h1 className="mainTitle">
          To-Do List
        </h1>
        <div className="App">
          <TabBar 
            toggleToDoList={this.toggleToDoList}
            toggleCompletedList={this.toggleCompletedList}
          />
          <ToDoList 
            addItem={this.addItem}
            tasks={this.state.tasks}
            onComplete={this.completeItem}
            toDoListVisibility={this.state.toDoListVisibility}
          />
          <CompletedList 
            completedTasks={this.state.completedTasks}
            completedListVisibility={this.state.completedListVisibility}
          />
        </div>
      </div>
    )
  }
}

export default App;