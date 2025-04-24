import React from "react";

const Greeting = ({ name }) => {
  return <h1 className="text-4xl font-bold text-blue-600">Hello, {name}!</h1>;
};

const GreetingFunctionalApp = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <Greeting name="John" />
    </div>
  );
};

export default GreetingFunctionalApp;
