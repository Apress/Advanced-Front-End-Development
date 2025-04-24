import React, { useRef, useEffect, useState } from "react";
import FocusLock from "react-focus-lock";

function AccessibleForm() {
  const [error, setError] = useState("");
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("Invalid username or password.");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setError(""); // Clear error message on Escape key
    }
  };

  return (
    <FocusLock>
      <div className="flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} aria-labelledby="formTitle" className="flex flex-col gap-4">
            <h2 id="formTitle" className="text-2xl font-bold text-gray-800 text-center">
              Login Form
            </h2>

            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-gray-700 font-medium">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                aria-required="true"
                aria-describedby="usernameHint"
                ref={firstInputRef}
                onKeyDown={handleKeyDown}
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span id="usernameHint" className="text-sm text-gray-500">
                Enter your username.
              </span>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                aria-required="true"
                onKeyDown={handleKeyDown}
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Error Message */}
            {error && (
              <p id="errorMessage" role="alert" aria-live="assertive" className="text-red-600 font-semibold">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              aria-describedby="submitHelp"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>

            <span id="submitHelp" className="text-sm text-gray-500">
              Press Enter to submit the form. Press Escape to clear errors.
            </span>
          </form>
        </div>
      </div>
    </FocusLock>
  );
}

export default AccessibleForm;
