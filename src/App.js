import './App.css';
import NewTask from './components/NewTask';
import React from 'react';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
        <div className="new-task">
            <NewTask isToDoItem={true}/>
        </div>
        <div className="todo-list">
            <ToDoList/>
        </div>
      </div>

  );
}

export default App;
