import React from 'react';
import './Todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Todo = props => {
    return (
        <div 
        className={`task ${props.task.completed ? "completed" : ''}`}
        onClick={() => props.toggleTask(props.task.uid)}
        >
            <FontAwesomeIcon
                className={`check ${props.task.completed ? "completed" : ''}`}
                icon={`${props.task.completed ? "check-circle" : "circle"}`}
            />
            <p>{props.task.task}</p>
        </div>
        
    )
}

export default Todo;
