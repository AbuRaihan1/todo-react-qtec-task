import React from "react";

const TodoForm = ({
  handleCreateTodo,
  setTitle,
  setDescription,
  priority,
  handlePriorityChange,
  addTask,
}) => {
  return (
    <form className="mt-10" onSubmit={handleCreateTodo}>
      <div className="mb-3">
        <label className="text-lg block mb-2">Title</label>
        <input
          onBlur={(e) => setTitle(e.target.value)}
          required
          type="text"
          placeholder="Title"
          name="title"
          className="border-2 rounded-md p-1 w-full focus:border-orange-500 outline-none text-lg transition ease-in-out delay-100"
        />
      </div>

      <div>
        <label className="text-lg block mb-2">Description</label>
        <textarea
          onBlur={(e) => setDescription(e.target.value)}
          required
          type="text"
          placeholder="Description"
          name="description"
          className="border-2 rounded-md p-1 w-full focus:border-orange-500 outline-none h-[100px] text-lg transition ease-in-out delay-100"
        />
      </div>

      <select
        className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-orange-500 focus:ring focus:ring-orange-500"
        value={priority}
        required
        onChange={handlePriorityChange}
      >
        <option value="select">Select Priority</option>
        <option value="Low" className="text-green-600 font-bold">
          Low
        </option>
        <option value="Medium" className="text-yellow-600 font-bold">
          Medium
        </option>
        <option value="High" className="text-red-600 font-bold">
          High
        </option>
      </select>

      <button
        type="submit"
        className="mt-5 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Create Task
      </button>
    </form>
  );
};

export default TodoForm;
