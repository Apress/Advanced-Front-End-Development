import React from "react";

const Timer = () => {
  const [time, setTime] = React.useState(new Date()); // State to hold the current time

  React.useEffect(() => {
    // Start a timer that updates the state every second
    const timerID = setInterval(() => {
      setTime(new Date()); // Update the time
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(timerID); // Prevent memory leaks
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-green-600 mb-2">Current Time</h1>
      <p className="text-xl font-semibold text-gray-800 bg-white px-6 py-3 rounded-lg shadow-md">
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default Timer;
