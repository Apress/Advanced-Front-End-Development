import React, { useState } from "react";

function UserDashboard({ user }) {
  const [tasks, setTasks] = useState(user.tasks);

  /* Add Task */
  const addTask = () => {
    const newTask = `Task ${tasks.length + 1}`;
    setTasks([...tasks, newTask]);
  };

  /* Remove Task */
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 text-gray-900">
      {/* Greeting Section */}
      <header className="text-center text-blue-600 my-6">
        <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
        <p className="text-lg text-gray-700">Your email: {user.email}</p>
      </header>

      {/* Task Section */}
      <main className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Task List</h2>
        {tasks.length > 0 ? (
          <ul className="mt-4 space-y-3 w-full">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 border border-gray-300 rounded-md bg-gray-50 w-full"
              >
                <span className="text-gray-800 text-left w-full">{task}</span>
                <button
                  onClick={() => removeTask(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700 transition ml-4"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

        ) : (
          <p className="text-gray-600 mt-4">No tasks available. Add a task to get started!</p>
        )}

        <button
          onClick={addTask}
          className="mt-6 bg-green-600 text-white px-5 py-2 rounded-md text-lg font-semibold hover:bg-green-700 transition"
        >
          Add Task
        </button>
      </main>
    </div>
  );
}

export default UserDashboard;
