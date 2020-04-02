import React from 'react';

const TaskList = props => {
  console.log(props);
  return (
    <ul>
      {props.taskList.map(task => {
        return (
          <li key={task}>
            <p>Task: {task}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
