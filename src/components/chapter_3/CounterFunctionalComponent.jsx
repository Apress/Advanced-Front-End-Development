import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Added mb-6 for spacing */}
      <p className="text-3xl font-semibold text-blue-600 mb-6">Count: {count}</p>
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-bold shadow-md transition duration-300 hover:bg-blue-700 active:scale-95"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
