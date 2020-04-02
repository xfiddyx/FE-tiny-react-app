import React from 'react';
import './App.css';
import Header from './components/Header';
import TaskAdder from './components/TaskAdder';
import TaskList from './components/TaskList';

const user = 'Steven';

class App extends React.Component {
  state = {
    taskList: []
  };

  render() {
    return (
      <div className='App'>
        <Header name={user} />
        <TaskAdder addTask={this.addTask} />
        <TaskList taskList={this.state.taskList} deleteTask={this.deleteTask} />
      </div>
    );
  }

  addTask = addedTask => {
    this.setState(currentState => {
      return { taskList: [...currentState.taskList, addedTask] };
    });
  };
  deleteTask = deletedTask => {
    const amendedTasks = this.state.taskList.filter(
      task => task !== deletedTask
    );
    this.setState({ taskList: amendedTasks });
  };
}
export default App;
