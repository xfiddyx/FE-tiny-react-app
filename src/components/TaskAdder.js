import React from 'react';

class TaskAdder extends React.Component {
  state = {
    userInput: ''
  };
  render() {
    return (
      <form onSubmit={this.handleTask}>
        <input
          id='task'
          type='text'
          required
          onChange={this.handleTaskAdded}
          value={this.state.userInput}
        />
        <input id='submitButton' type='submit' value='Add Task' />
      </form>
    );
  }

  handleTaskAdded = event => {
    const userInput = event.target.value;
    this.setState({ userInput });
  };

  handleTask = event => {
    event.preventDefault();
    this.props.addTask(this.state.userInput);
    this.setState({ userInput: '' });
  };
}
export default TaskAdder;
