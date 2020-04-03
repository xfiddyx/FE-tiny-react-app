import React from 'react';

class TaskList extends React.Component {
  state = { sort: true };
  render() {
    return (
      <>
        <input
          id='sortButton'
          type='submit'
          value='Sort By Deadline'
          onClick={this.sortByDeadline}
        ></input>
        <ul>
          {this.props.taskList
            .sort((a, b) => {
              console.log(this.state.sort, a, b);
              if (this.state.sort) {
                return Date.parse(a.deadline) - Date.parse(b.deadline);
              } else if (!this.state.sort) {
                return Date.parse(b.deadline) - Date.parse(a.deadline);
              }
            })
            .map(task => {
              return (
                <li key={task.task}>
                  <p
                    className={task.task}
                    id={
                      new Date(task.deadline) < new Date()
                        ? 'overdue'
                        : 'notoverdue'
                    }
                  >
                    Task: {task.task} Deadline:{''}
                    {new Date(task.deadline).toLocaleDateString()}
                    <button
                      onClick={() => {
                        if (window.confirm('...you definitely done it'))
                          this.props.deleteTask(task.task);
                        this.props.decrementCounter();
                      }}
                    >
                      Delete
                    </button>
                  </p>
                </li>
              );
            })}
        </ul>
      </>
    );
  }

  sortByDeadline = () => {
    this.setState(currentState => {
      return { sort: !currentState.sort };
    });
  };
}

export default TaskList;
