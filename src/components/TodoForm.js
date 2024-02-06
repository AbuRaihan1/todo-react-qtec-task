import React from "react";

const TodoForm = () => {
  return (
    <div className="container m-auto">
      <form action="" className="border p-6 mt-10 rounded-lg">
        <h2 className="text-center font-bold text-2xl">Create your todo</h2>

        <div className="flex justify-between items-center mt-10">
          <h2 className="text-3xl font-bold text-blue-500">Your task</h2>
          <input
            type="text"
            placeholder="search your todo"
            className="outline-none border-2 rounded-md px-3 focus:border-orange-500 py-2 w-[450px]"
          />
          <div className="flex gap-3">
            <button className="btn bg-orange-600 text-white rounded-full px-5 py-2 hover:bg-orange-700 font-semibold">
              Add task
            </button>
            <button className="btn bg-red-600 text-white rounded-full px-5 py-2 hover:bg-red-700 font-semibold">
              Delete All
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
