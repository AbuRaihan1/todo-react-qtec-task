import React, { useState } from "react";
import Modal from "./Modal";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTodoFormSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <div className="container m-auto">
      <form
        onSubmit={handleTodoFormSubmit}
        className="border p-6 mt-10 rounded-lg"
      >
        <h2 className="text-center font-bold text-2xl">Create your todo</h2>

        <div className="flex md:justify-between md:flex-row flex-col items-center mt-10  gap-5">
          <h2 className="text-3xl font-bold text-blue-500">Your task</h2>
          <input
            type="text"
            placeholder="search your todo"
            className="outline-none border-2 rounded-lg px-3 focus:border-orange-500 py-2 lg:w-[450px] w-[280px]"
          />
          <div className="flex gap-3">
            <button
              onClick={openModal}
              className=" bg-orange-600 text-white rounded-full px-5 py-2 hover:bg-orange-700 font-semibold"
            >
              Add task
            </button>
            <button className=" bg-red-600 text-white rounded-full px-5 py-2 hover:bg-red-700 font-semibold">
              Delete All
            </button>
          </div>
        </div>

        <Modal closeModal={closeModal} isModalOpen={isModalOpen} />

        <div className="todo-table">
          <TodoList />
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
