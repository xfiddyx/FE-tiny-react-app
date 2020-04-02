import React from 'react';

const TaskCounter = props => {
  return (
    <strong>
      <h1 key={props.taskCount}>{`${props.taskCount}`} tasks left to do</h1>
    </strong>
  );
};

export default TaskCounter;
