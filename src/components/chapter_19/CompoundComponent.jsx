import React, { useState } from "react";

function Parent({ children }) {
  const [value, setValue] = useState("Default Value");

  return (
    <div className="border-2 border-green-500 p-6 rounded-lg text-center max-w-md mx-auto bg-gray-100 shadow-lg">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Parent Component</h2>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { value, setValue })
      )}
    </div>
  );
}

function Child({ value, setValue }) {
  return (
    <div className="bg-white border border-gray-300 p-4 mt-4 rounded-md shadow">
      <p className="text-gray-700">
        Child received: <strong className="text-green-600">{value}</strong>
      </p>
      <button
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        onClick={() => setValue("Updated from Child")}
      >
        Update Parent Value
      </button>
    </div>
  );
}

export default function CompoundComponent() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}
