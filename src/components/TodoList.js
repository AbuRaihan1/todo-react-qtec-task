import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ addTask }) => {
  return (
    <div>
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Priority
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Options
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {addTask.map((task) => (
            <tr key={task.id}>
              <td className="px-6 py-4 whitespace-nowrap">{task.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {task.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{task.priority}</td>
              <td className="px-6 py-4 whitespace-nowrap">{task.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </button>
                <button className="text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="task-data border">
        {addTask?.map((task, idx) => (
          <TodoItem task={task} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
