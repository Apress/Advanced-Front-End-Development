import React from "react";

// AdminPanel Component
const AdminPanel = ({ user }) => {
  if (!user || user?.role !== "admin") {
    return (
      <p className="text-red-600 font-bold bg-red-100 border border-red-400 rounded-lg p-3">
        🚫 Access Denied
      </p>
    );
  }

  return (
    <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold">Admin Panel</h2>
      <p className="text-lg mt-2">Welcome, {user.name}! You have administrator access.</p>
    </div>
  );
};

const AdminPanelApp = () => {
  const adminUser = { name: "Alice", role: "admin" };
  const regularUser = { name: "Bob", role: "user" };
  const guestUser = null; // Handles case where no user is logged in

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-8">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg text-center space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Admin User:</h3>
          <AdminPanel user={adminUser} /> {/* Displays Admin Panel */}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Regular User:</h3>
          <AdminPanel user={regularUser} /> {/* Displays "Access Denied" */}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Guest (No User Logged In):</h3>
          <AdminPanel user={guestUser} /> {/* Also Displays "Access Denied" */}
        </div>
      </div>
    </div>
  );
};

export default AdminPanelApp;
