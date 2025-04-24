import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /* Handle Submit */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "user" && password === "password") {
      setIsLoggedIn(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  /* Handle Logout */
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 p-4">
      {isLoggedIn ? (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center w-80">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, {username}!</h1>
          <button
            onClick={handleLogout}
            className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition w-full"
          >
            Logout
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-80 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
          {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
          
          <label className="block text-left text-gray-700 font-medium mt-4">
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </label>

          <label className="block text-left text-gray-700 font-medium mt-4">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition w-full"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
