import React from 'react';

// Stateless funciton component
const Task = (props) => (
    <div className="task">
        <p className="task__text">
            {props.count}. {props.task}
        </p>
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteTask(props.task);
            }}
        >
            remove
        </button>
    </div>
);

export default Task;