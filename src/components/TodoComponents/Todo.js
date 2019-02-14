import React from 'react';

const Todo = props => {
    return (
        <div className="todo-container">
            <p>{props.todo.task}</p>
        </div>
        
    )
}

export default Todo;
