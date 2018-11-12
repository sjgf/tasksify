import React from 'react';

// Classic class component
export default class AddTask extends React.Component {

    state = {
        error: undefined
    };

    addTask = (e) => {
        e.preventDefault();

        const task = e.target.elements.task;

        const error = this.props.handleAddTask(task.value);

        this.setState(() => ({ error }));

        if(!error){
            task.value = "";
        }
    }

    render(){
        return (
            <div>
                {this.state.error && <p className="add-task-error">{this.state.error}</p>}
                <form className="add-task" onSubmit={this.addTask}>
                    <input type="text" className="add-task__input" name="task" placeholder="Type in a task..." />
                    <button className="button">Add Task</button>
                </form>
            </div>
        )
    }
}