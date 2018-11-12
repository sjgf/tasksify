import React from 'react';

import AddTask from './AddTask';
import Tasks from './Tasks';
import Header from './Header';

// Classic class component
export default class TasksifyApp extends React.Component {

    state = {
        tasks: [],
        selectedTask: undefined
    };

    handleDeleteTasks = (e) => {
        this.setState(() => ({ tasks: []}));
    };

    handleDeleteTask = (taskText) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((value) => value.toUpperCase() !== taskText.toUpperCase())
        }));
    }

    handleAddTask = (taskValue) => {

        if(!taskValue || taskValue.trim().length < 1){
            return "Enter a valid value here.";
        } else if(this.state.tasks.indexOf(taskValue) > -1) {
            return "Task already exists.";
        }

        this.setState((prevState) => ({ tasks: prevState.tasks.concat(taskValue) }));  
    }

    componentDidMount(){

        const jsonTasks = localStorage.getItem("tasks");
        if(jsonTasks){
            try {
                const tasks = JSON.parse(jsonTasks);
                this.setState(() => ({ tasks }));
            } catch(e){
                console.log("Retrieved tasks from localStorage seems to have invalid json format");
            }
            
        } else {
            console.log("No tasks found in localStorage. Default tasks will be used.")
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.tasks.length !== this.state.tasks.length){            

            const json = JSON.stringify(this.state.tasks);
            localStorage.setItem("tasks", json);
        }
    }

    render(){
        const subtitle = "Trust your tasks to tasksify!";

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <div className="widget">
                        <Tasks
                            tasks={this.state.tasks}
                            taskCount={this.state.tasks.length}
                            handleDeleteTasks={this.handleDeleteTasks}
                            handleDeleteTask={this.handleDeleteTask}
                        />
                        <AddTask handleAddTask={this.handleAddTask} />
                    </div>
                </div>
            </div>
        );
    }
}