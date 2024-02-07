import React, { useState } from "react";
import "../App.css";
const TodoList = ({ addTask }) => {
  const [taskStatus, setTaskStatus] = useState(false);
  const taskStatusHandler = () => {
    if (!taskStatus) {
      setTaskStatus(true);
    }
  };
  return (
    <div className="mt-10 overflow-x-auto overflow-y-hidden scrollbar">
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
          {addTask.map((task, idx) => (
            <tr key={idx}>
              <td className="px-6 py-4 whitespace-nowrap">{task.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {task.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{task.priority}</td>
              <td
                onClick={taskStatusHandler}
                className="px-6 py-4 whitespace-nowrap"
              >
                {taskStatus ? (
                  <p className="bg-green-500 inline text-white rounded-md px-2 pb-1 text-sm">
                    Complete
                  </p>
                ) : (
                  <p className="text-white inline bg-yellow-400 rounded-md px-2 pb-1 text-sm">
                    Incomplete
                  </p>
                )}
              </td>
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
    </div>
  );
};

export default TodoList;
