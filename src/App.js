import React from 'react';
import './App.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  // This event handler will add a timestamp to the new task object and add it to the todos array 


  addTask = (event, task) => {
    event.preventDefault();
    const newTaskItem = {
        task: task,
        uid: Date.now(),
        completed: false,
    };
    this.setState({
        todos: [...this.state.todos, newTaskItem]// assigned to new array
    });   
  };


  render() {

    return (
      <div>
        <div className="header">
          <h1>To-Do List</h1>
            <img 
            src="../mario_luigi_dance.gif"
            alt="marioandluigi"
            ></img>
        </div>
        <TodoList 
          todos = {this.state.todos}
        />
        <TodoForm
          addTask = {this.addTask}
        />
      </div>
    );
  }
}

export default App;
