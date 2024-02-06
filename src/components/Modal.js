import React from "react";
import closeBtn from "../../src/images/close-window.png";
import TodoForm from "./TodoForm";

const Modal = ({
  closeModal,
  isModalOpen,
  handleCreateTodo,
  handlePriorityChange,
  description,
  setDescription,
  title,
  setTitle,
  priority,
  setPriority,
  addTask,
  setAddTask,
}) => {
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 md:w-1/2 w-full relative mx-5">
            <img
              onClick={closeModal}
              src={closeBtn}
              alt="close_btn"
              className="cursor-pointer p-1 bg-gray-200 rounded-full hover:bg-gray-300 absolute right-3 top-3"
            />

            <TodoForm
              handleCreateTodo={handleCreateTodo}
              handlePriorityChange={handlePriorityChange}
              description={description}
              setDescription={setDescription}
              title={title}
              setTitle={setTitle}
              priority={priority}
              setPriority={setPriority}
              addTask={addTask}
              setAddTask={setAddTask}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
