// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo'


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