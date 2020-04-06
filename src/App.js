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
    taskCounter: 0,
  };

  render() {
    const { taskList, taskCounter } = this.state;
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
          deleteTask={this.deleteTask}
          decrementCounter={this.decrementCounter}
        />
      </div>
    );
  }
  componentDidMount() {
    const local = localStorage.getItem('taskList') || 'null';
    const taskList = JSON.parse(local);
    const counter = localStorage.getItem('taskCounter') || 'null';
    const taskCounter = JSON.parse(counter);
    if (taskList)
      this.setState({
        taskList,
        taskCounter,
      });
  }

  addTask = (addedTask, deadline) => {
    this.setState(
      (currentState) => {
        return {
          taskList: [
            ...currentState.taskList,
            { task: addedTask, deadline: deadline },
          ],
        };
      },
      () => {
        this.saveTaskList();
      }
    );
  };

  saveTaskList = () => {
    const { taskList, taskCounter } = this.state;
    localStorage.setItem('taskList', JSON.stringify(taskList));
    localStorage.setItem('taskCounter', JSON.stringify(taskCounter));
  };

  deleteTask = (taskToDelete) => {
    this.setState(
      (currentState) => {
        const amendedTasks = currentState.taskList.filter(
          (task) => task.task !== taskToDelete
        );
        return { taskList: amendedTasks };
      },
      () => {
        this.saveTaskList();
      }
    );
  };
  incrementCounter = () => {
    this.setState((currentState) => {
      return {
        taskCounter: currentState.taskCounter + 1,
      };
    });
  };
  decrementCounter = () => {
    this.setState((currentState) => {
      return { taskCounter: currentState.taskCounter - 1 };
    });
  };
}

export default App;
