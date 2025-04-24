import React, { useState } from "react";
import UserList from "./UserList"; // Ensure correct path

const UserListApp = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", isActive: true },
    { id: 2, name: "Jane Smith", email: "jane@example.com", isActive: false },
  ]);

  const toggleUserActivity = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">User Management</h1>
      <UserList users={users} toggleActivity={toggleUserActivity} />
    </div>
  );
};

export default UserListApp;
