import React from 'react';
import './App.css';

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
          {/* <ToDoList /> */}
          {/* <CompletedList /> */}
        </div>
      </div>
    )
  }
}

export default App;