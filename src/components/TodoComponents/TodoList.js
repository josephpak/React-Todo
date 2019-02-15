// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import Todo from './Todo'

library.add(faCheckCircle, faCircle);


const TodoList = props => {
    const sortedList = props.todos.sort((a, b) => b.uid - a.uid)
    return (
        <div className="list">
            <div className = "incomplete-list">
                <h2>Todo</h2>
                <div className="list-container">       
                    {sortedList.map(task => {
                        if (!task.completed){
                            return (
                                <Todo
                                task={task}
                                toggleTask={props.toggleTask}
                                />
                            )
                        }                        
                    })}
                </div>
            </div>
            <div className="complete-list">
                <div className="header-row">
                <h2>Completed</h2>
                </div>
                <div className="list-container">
                    {sortedList.map(task => {
                            if (task.completed){
                                return (
                                    <Todo
                                    task={task}
                                    toggleTask={props.toggleTask}
                                    />
                                )
                            }                        
                    })}
                </div>   
            </div>
        </div>
    );
}

export default TodoList;