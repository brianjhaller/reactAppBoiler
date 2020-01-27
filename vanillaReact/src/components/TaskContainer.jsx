import React, { Component } from 'react';
import '../css/TaskContainer.css';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

class TaskContainer extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h2>Task Container Component</h2>
        <AddTask />
        <TaskList />
      </div>
    );
  }
}

export default TaskContainer;