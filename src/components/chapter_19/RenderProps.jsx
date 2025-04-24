import React, { useState, useEffect } from "react";

const MouseTracker = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return children(position);
};

// Usage Example
const App = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <MouseTracker>
          {(position) => (
            <h2 className="text-xl font-bold text-gray-800">
              Mouse Position: <span className="text-blue-600">{position.x}, {position.y}</span>
            </h2>
          )}
        </MouseTracker>
      </div>
    </div>
  );
};

export default App;
