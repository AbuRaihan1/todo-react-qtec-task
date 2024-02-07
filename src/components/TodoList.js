import React, { useEffect, useState } from "react";
import "../App.css";
const TodoList = ({
  addTask,
  deleteSingleTask,
  editSingleTask,
  setAddTask,
}) => {
  const [taskStatus, setTaskStatus] = useState(false);
  const taskStatusHandler = () => {
    if (!taskStatus) {
      setTaskStatus(true);
    }
  };

  // get item from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setAddTask(savedTasks);
    }
  }, []);

  return (
    <div>
      {addTask.length ? (
        <div className="mt-10 overflow-x-auto overflow-y-hidden scrollbar">
          <table className="table-auto min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="">
                <th className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                <tr key={idx} className="bg-gray-50 border">
                  <td className="px-6 py-4 whitespace-nowrap">{task.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {task.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {task.priority}
                  </td>
                  <td
                    onClick={taskStatusHandler}
                    className="px-6 py-4 whitespace-nowrap"
                  >
                    {taskStatus ? (
                      <p className="bg-green-500 inline text-white rounded-md px-2 pb-1 text-sm cursor-not-allowed">
                        Complete
                      </p>
                    ) : (
                      <p className="text-white inline bg-yellow-400 rounded-md px-2 pb-1 text-sm cursor-pointer">
                        Incomplete
                      </p>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                    <button
                      onClick={() => editSingleTask(idx)}
                      className="bg-blue-500 px-2 text-white rounded-sm hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 px-2 rounded-sm text-white hover:bg-red-700"
                      onClick={() => deleteSingleTask(idx)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className=" md:text-4xl text-2xl text-center font-bold mt-10">
          You have no task to show
        </h1>
      )}
    </div>
  );
};

export default TodoList;
