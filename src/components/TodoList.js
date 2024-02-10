import React, { useEffect } from "react";
import "../App.css";
const TodoList = ({
  addTask,
  deleteSingleTask,
  editSingleTask,
  setAddTask,
  taskStatus,
  setTaskStatus,
}) => {
  // get item from localStorage
  useEffect(() => {
    const savedTasksJSON = localStorage.getItem("tasks");
    if (savedTasksJSON) {
      try {
        const parseJsonData = JSON.parse(savedTasksJSON);
        setAddTask(parseJsonData);
      } catch {}
    }
  }, []);

  const taskStatusHandler = (idx) => {
    const getTaskFromLocalStorage = localStorage.getItem("tasks");
    if (getTaskFromLocalStorage) {
      const parseJsonData = JSON.parse(getTaskFromLocalStorage);
      const updatedTasks = parseJsonData.map((task, index) => {
        if (index === idx) {
          if (!task.taskStatus) {
            const completedTask = { ...task, taskStatus: true };
            return completedTask;
          }
        }
        return task;
      });
      setAddTask(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  };

  return (
    <div>
      {addTask?.length ? (
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
                  Date
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Options
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {addTask?.map((task, idx) => (
                <tr key={idx} className="bg-gray-50 border">
                  <td className="px-6 py-4 whitespace-nowrap">{task.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {task.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {task.priority}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {task?.taskStatus ? (
                      <p className="bg-green-500 inline text-white rounded-md px-2 pb-1 text-sm cursor-not-allowed">
                        Complete
                      </p>
                    ) : (
                      <p
                        className="text-white inline bg-yellow-400 rounded-md px-2 pb-1 text-sm cursor-pointer"
                        onClick={() => taskStatusHandler(idx)}
                      >
                        Incomplete
                      </p>
                    )}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-sm">
                    {task?.formattedDateTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                    <button className="bg-blue-500 px-2 text-white rounded-sm hover:bg-blue-600">
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
        <h1 className=" md:text-4xl text-2xl text-center font-bold mt-10 mb-4">
          You have no task
        </h1>
      )}
    </div>
  );
};

export default TodoList;
