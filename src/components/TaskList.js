import React from 'react';

const TaskList = props => {
  return (
    <ul>
      {props.taskList.map(task => {
        return (
          <li key={task}>
            <p>
              Task: {task}
              <button
                onClick={() => {
                  console.log(task);
                  props.deleteTask(task);
                  props.decrementCounter();
                }}
              >
                Delete
              </button>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
