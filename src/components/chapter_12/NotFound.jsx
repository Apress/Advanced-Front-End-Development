import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl font-semibold">Oops! Page Not Found</p>
      <p className="text-lg text-gray-600 mt-2">The page you’re looking for doesn’t exist.</p>
    </div>
  );
};

export default NotFound;
