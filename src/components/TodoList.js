import React from "react";

const TodoList = () => {
  return (
    <div className="flex justify-between items-center mt-20">
      <h2>Title</h2>
      <p>Description</p>
      <p>Priority</p>

      <div>
        <button>delete</button>
        <button>edit</button>
      </div>
    </div>
  );
};

export default TodoList;
