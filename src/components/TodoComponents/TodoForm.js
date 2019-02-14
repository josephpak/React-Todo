import React from 'react';
import './Todo.css'


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    // This event handler will set the task value to something that mirrors what the user has input in the form input field

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitTask = event => {
        this.setState({task: ''})
        this.props.addTask(event, this.state.task)
    }

    render() {
        return (
            <div className="form-container">
                <form 
                className="todo-form"
                onSubmit={this.submitTask}>
                    <button className="addButton">Add Todo</button>
                    <input
                        className="addInput"
                        type="text"
                        value={this.state.task}
                        name="task"
                        onChange={this.handleChanges}
                        placeholder="...Todo"
                    ></input>

                </form>
               
            </div>
        );
    }
    
}

export default TodoForm;