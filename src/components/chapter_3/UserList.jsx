import React from "react";
import PropTypes from "prop-types";
import User from "./User"; // Ensure correct path

const UserList = ({ users, toggleActivity }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          isActive={user.isActive}
          toggleActivity={toggleActivity} // Ensure it's passed correctly
        />
      ))}
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  toggleActivity: PropTypes.func.isRequired,
};

export default UserList;
