import React from "react";
import closeBtn from "../../src/images/close-window.png";

const Modal = ({ closeModal, isModalOpen }) => {
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

            <div className="mt-10">
              <div className="mb-3">
                <label className="text-lg block mb-2">Title</label>
                <input
                  required
                  type="text"
                  placeholder="Title"
                  className="border-2 rounded-md p-1 w-full focus:border-orange-500 outline-none text-lg transition ease-in-out delay-100"
                />
              </div>

              <div>
                <label className="text-lg block mb-2">Description</label>
                <textarea
                  required
                  type="text"
                  placeholder="Description"
                  className="border-2 rounded-md p-1 w-full focus:border-orange-500 outline-none h-[100px] text-lg transition ease-in-out delay-100"
                />
              </div>

              <select
                className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-orange-500 focus:ring focus:ring-orange-500"
                required
              >
                <option value="select" disabled selected>
                  Select Priority
                </option>
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

              <button className="mt-5 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full">
                Create Task
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
