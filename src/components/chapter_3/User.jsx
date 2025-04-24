import React from "react";
import PropTypes from "prop-types";

const User = ({ id, name, email, isActive, toggleActivity }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start justify-between">
      <h2 className="text-xl font-semibold text-blue-600">{name}</h2>
      <p className="text-gray-600 text-sm">Email: {email}</p>
      <p className="font-medium text-gray-700">
        Status:{" "}
        <span className={`font-semibold ${isActive ? "text-green-500" : "text-red-500"}`}>
          {isActive ? "Active" : "Inactive"}
        </span>
      </p>
      <button
        className={`mt-4 px-4 py-2 rounded-md text-white font-bold transition ${
          isActive ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
        }`}
        onClick={() => toggleActivity(id)}
      >
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </div>
  );
};

// PropTypes and Default Props
User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  toggleActivity: PropTypes.func.isRequired,
};

User.defaultProps = {
  isActive: false,
};

export default User;
