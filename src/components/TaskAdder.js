import React from 'react';

class TaskAdder extends React.Component {
  state = {
    userInput: '',
    deadline: '',
  };
  render() {
    return (
      <h2>
        Give yourself something to do!
        <></>
        <form
          onSubmit={(event) => {
            this.handleTask(event);
            this.props.incrementCounter();
          }}
        >
          <input
            id='task'
            type='text'
            required
            onChange={this.handleTaskAdded}
            value={this.state.userInput}
          />
          <input
            id='deadline'
            type='date'
            name='deadline'
            required
            onChange={this.handleDeadline}
          />
          <input id='submitButton' type='submit' value='Add Task' />
        </form>
      </h2>
    );
  }

  handleTaskAdded = (event) => {
    const userInput = event.target.value;
    this.setState({ userInput });
  };

  handleTask = (event) => {
    event.preventDefault();
    this.props.addTask(
      this.state.userInput,
      this.state.deadline,
      this.state.overdue
    );
    this.setState({ userInput: '' });
  };
  handleDeadline = (event) => {
    const deadline = event.target.value;
    this.setState({ deadline });
  };
}
export default TaskAdder;
