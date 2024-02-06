import React from "react";

const TodoItem = ({ task }) => {
  return (
    <div>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <p>{task.priority}</p>
    </div>
  );
};

export default TodoItem;
