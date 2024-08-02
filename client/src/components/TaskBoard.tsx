import React from "react";
import TaskBoardUtilityHeader from "@/components/TaskBoardUtilityHeader";

const TaskBoard: React.FC = () => {
  return (
    <>
      <TaskBoardUtilityHeader />
      <div className="p-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded">
            <h2 className="mb-4 text-xl font-bold">To do</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 border rounded">
                <h3 className="font-bold">Implement User Authentication</h3>
                <p className="text-sm">
                  Develop and integrate user authentication using email and
                  password.
                </p>
                <span className="inline-block px-2 py-1 mt-2 text-xs text-red-700 bg-red-200 rounded">
                  Urgent
                </span>
                <div className="flex items-center justify-between mt-2 text-sm">
                  <span>📅 2024-08-15</span>
                  <span>1 hr ago</span>
                </div>
              </div>
              <button className="flex items-center justify-center w-full p-2 text-white bg-black rounded hover:bg-gray-800">
                Add new +
              </button>
            </div>
          </div>
          <div className="p-4 bg-white rounded">
            <h2 className="mb-4 text-xl font-bold">In progress</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 border rounded">
                <h3 className="font-bold">Design Home Page UI</h3>
                <p className="text-sm">
                  Develop and integrate user authentication using email and
                  password.
                </p>
                <span className="inline-block px-2 py-1 mt-2 text-xs text-yellow-700 bg-yellow-200 rounded">
                  Medium
                </span>
                <div className="flex items-center justify-between mt-2 text-sm">
                  <span>📅 2024-08-15</span>
                  <span>1 hr ago</span>
                </div>
              </div>
              <button className="flex items-center justify-center w-full p-2 text-white bg-black rounded hover:bg-gray-800">
                Add new +
              </button>
            </div>
          </div>
          <div className="p-4 bg-white rounded">
            <h2 className="mb-4 text-xl font-bold">Under review</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 border rounded">
                <h3 className="font-bold">Integrate Cloud Storage</h3>
                <p className="text-sm">
                  Enable cloud storage for note backup and synchronization.
                </p>
                <span className="inline-block px-2 py-1 mt-2 text-xs text-red-700 bg-red-200 rounded">
                  Urgent
                </span>
                <div className="flex items-center justify-between mt-2 text-sm">
                  <span>📅 2024-08-20</span>
                  <span>2 days ago</span>
                </div>
              </div>
              <button className="flex items-center justify-center w-full p-2 text-white bg-black rounded hover:bg-gray-800">
                Add new +
              </button>
            </div>
          </div>
          <div className="p-4 bg-white rounded">
            <h2 className="mb-4 text-xl font-bold">Finished</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 border rounded">
                <h3 className="font-bold">Test Cross-browser Compatibility</h3>
                <p className="text-sm">
                  Ensure the app works seamlessly across different web browsers.
                </p>
                <span className="inline-block px-2 py-1 mt-2 text-xs text-yellow-700 bg-yellow-200 rounded">
                  Medium
                </span>
                <div className="flex items-center justify-between mt-2 text-sm">
                  <span>📅 2024-07-30</span>
                  <span>4 days ago</span>
                </div>
              </div>
              <button className="flex items-center justify-center w-full p-2 text-white bg-black rounded hover:bg-gray-800">
                Add new +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskBoard;
