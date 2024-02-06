import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ addTask }) => {
  console.log(addTask);
  return (
    <div>
      <div className="flex justify-between items-center mt-20">
        <h2>Title</h2>
        <p>Description</p>
        <p>Priority</p>

        <div>
          <button>delete</button>
          <button>edit</button>
        </div>
      </div>

      <div className="task-data">
        {addTask?.map((task, idx) => (
          <TodoItem task={task} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
