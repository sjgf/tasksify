import React from 'react';
import Task from './Task';

// Stateless funciton component
const Tasks = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your tasks</h3>
            <button 
                className="button button--link"
                onClick={props.handleDeleteTasks}
                disabled={props.taskCount < 1}
            >
                Remove all
            </button>
        </div>
        <div>
            {props.tasks.length === 0 && <p className="widget__message">Please add tasks to the list!</p>}
            {
                props.tasks.map((task, index) => {
                    return (
                        <Task 
                            key={task} 
                            task={task} 
                            count={index + 1}
                            handleDeleteTask={props.handleDeleteTask}
                        />
                    );
                })
            }
        </div>
    </div>
);


export default Tasks;