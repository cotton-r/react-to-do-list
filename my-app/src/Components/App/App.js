import React from 'react';
import './App.css';

import TabBar from '../TabBar/TabBar';

class App extends React.Component {
  constructor(props) {
  super(props);    
  }


  render() {
    return (
      <div>
        <h1 className="mainTitle">
          To-Do List
        </h1>
        <div className="App">
          <TabBar />
          {/* <ToDoList /> */}
          {/* <CompletedList /> */}
        </div>
      </div>
    )
  }
}

export default App;