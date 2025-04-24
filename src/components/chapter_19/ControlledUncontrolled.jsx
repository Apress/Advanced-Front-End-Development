import React, { useState, useRef } from "react";

const ControlledInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg text-center">
      <h3 className="text-xl font-semibold text-gray-700 mb-3">Controlled Input</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type here..."
        className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-gray-600 text-sm mt-2">Current Value: {value}</p>
    </div>
  );
};

const UncontrolledInput = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered Value: ${inputRef.current.value}`);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg text-center mt-6">
      <h3 className="text-xl font-semibold text-gray-700 mb-3">Uncontrolled Input</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          ref={inputRef}
          placeholder="Type here..."
          className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const ControlledUncontrolledApp = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-6">
      <ControlledInput />
      <UncontrolledInput />
    </div>
  );
};

export default ControlledUncontrolledApp;
