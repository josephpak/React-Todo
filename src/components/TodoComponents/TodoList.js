// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo'


const TodoList = props => {
    return (
        <div className="list-container">
            {props.todos.map(task => {
               return (
                    <Todo
                    task={task}
                    toggleTask={props.toggleTask}
                    />
               )
            })}
        </div>
    );
}

export default TodoList;