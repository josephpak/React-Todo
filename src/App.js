import React from 'react';
import './reset.css'
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
    if(task.length > 0) {
      const newTaskItem = {
        task: task,
        uid: Date.now(),
        completed: false,
      };
      this.setState({
          todos: [...this.state.todos, newTaskItem]// assigned to new array
      });   
    }
    
  };

  toggleTask = taskId => {
    this.setState({
      todos: this.state.todos.map(task => {
        if(taskId === task.uid) {
          return { ...task, completed: !task.completed}
        }
        return task;
      })
    })
  }

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(task => !task.completed)
    })
  }

  render() {

    return (
      <div className="main-container">
        <div class="nav">
          <div className="attribution">
            <p>Created by</p>
            <a class="nav-link" href="josephjpak.com" target="_blank">Joe Pak</a>
          </div>
        </div>
        <div className="container">
          <div className="header">
            <h1>To-Do List</h1>
              <img 
              src="../mario_luigi_dance.gif"
              alt="marioandluigi"
              ></img>
          </div>
          <TodoForm
            addTask = {this.addTask}
          />
          <TodoList 
            todos = {this.state.todos}
            toggleTask = {this.toggleTask}
          />
          <button 
          className="clearButton"
          onClick={this.clearCompleted}
          >Clear Completed</button>
        </div>  
      </div>
        
    );
  }
}

export default App;
