import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div 
        className={`task ${props.task.completed ? "completed" : ''}`}
        onClick={() => props.toggleTask(props.task.uid)}
        >
            <p>{props.task.task}</p>
        </div>
        
    )
}

export default Todo;
