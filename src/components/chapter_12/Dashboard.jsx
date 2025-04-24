import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Dashboard
      </h1>
      <p className="text-xl text-gray-700">
        Only Accessible to Logged-in Users
      </p>
    </div>
  );
};

export default Dashboard;
