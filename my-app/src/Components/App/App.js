import React from 'react';
import './App.css';

import TabBar from '../TabBar/TabBar';
import ToDoList from '../ToDoList/ToDoList';

class App extends React.Component {
  constructor(props) {
    super(props);    

    this.state= {
      task: ''
    }

    this.addItem = this.addItem.bind(this);
  }

  addItem(task) {
    this.setState({ task: task });
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
          />
          {/* <CompletedList /> */}
        </div>
      </div>
    )
  }
}

export default App;