import React, { useState } from "react";
import Swal from "sweetalert2";
import Modal from "./Modal";
import TodoList from "./TodoList";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [addTask, setAddTask] = useState([]);
  const [priority, setPriority] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleCreateTodo = (e) => {
    e.preventDefault();
    const taskData = {
      title: title,
      description: description,
      priority: priority,
    };

    setAddTask((prevTasks) => {
      const updatedTasks = [...prevTasks, taskData];
      return updatedTasks;
    });

    Swal.fire("Done", "You have created a task", "success");

    closeModal();
  };

  const deleteAllTask = () => {
    if (addTask.length === 0) {
      Swal.fire("Empty Task", "You Have no task to delete", "warning");
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "If you click Yes, all tasks will be deleted.",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          setAddTask([]);
          Swal.fire("Deleted!", "All tasks have been deleted.", "success");
        }
      });
    }
  };

  return (
    <div className="container m-auto">
      <div className="border p-6 mt-10 rounded-lg">
        {/* <h2 className="text-center font-bold text-2xl">Create your todo</h2> */}

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

            <button
              onClick={deleteAllTask}
              className=" bg-red-600 text-white rounded-full px-5 py-2 hover:bg-red-700 font-semibold"
            >
              {" "}
              Delete All
            </button>
          </div>
        </div>

        <Modal
          closeModal={closeModal}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
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
        <div className="todo-table">
          <TodoList addTask={addTask} />
        </div>
      </div>
    </div>
  );
};

export default Home;
