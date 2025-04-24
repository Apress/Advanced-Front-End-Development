import React from "react";

const SafeOutput = ({ message }) => {
  return <p className="text-lg text-gray-700">{message}</p>;
};

const SafeOutputApp = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          React Escaping Example
        </h2>
        <SafeOutput message={"Hello <script>alert('XSS')</script>"} />
      </div>
    </div>
  );
};

export default SafeOutputApp;
