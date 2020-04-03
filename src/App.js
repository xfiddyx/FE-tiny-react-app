import React from 'react';
import './App.css';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import TaskList from './components/TaskList';
import TaskCounter from './components/TaskCounter';

const user = 'Steven';

class App extends React.Component {
  state = {
    taskList: [],
    taskCounter: 0
  };
  render() {
    console.log(this.state);
    return (
      <div className='App'>
        <Header name={user} />
        <TaskCounter taskCount={this.state.taskCounter} />
        <TaskAdder
          addTask={this.addTask}
          incrementCounter={this.incrementCounter}
        />
        <TaskList
          taskList={this.state.taskList}
          // overdue={this.state.overdue}
          // checkDeadline={this.checkDeadline}
          deleteTask={this.deleteTask}
          decrementCounter={this.decrementCounter}
        />
      </div>
    );
  }

  addTask = (addedTask, deadline) => {
    this.setState(currentState => {
      return {
        taskList: [
          ...currentState.taskList,
          { task: addedTask, deadline: deadline }
        ]
      };
    });
  };

  deleteTask = taskToDelete => {
    this.setState(currentState => {
      const amendedTasks = currentState.taskList.filter(
        task => task.task !== taskToDelete
      );
      return { taskList: amendedTasks };
    });

    // refactor to use currentstate
  };
  incrementCounter = () => {
    this.setState(currentState => {
      return {
        taskCounter: currentState.taskCounter + 1
      };
    });
  };
  decrementCounter = () => {
    this.setState(currentState => {
      return { taskCounter: currentState.taskCounter - 1 };
    });
  };
}

export default App;
