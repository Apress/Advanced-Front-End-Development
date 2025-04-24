import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1 className="text-4xl font-bold text-purple-600">Hello, {this.props.name}!</h1>;
  }
}

const GreetingClassApp = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <Greeting name="Jane" />
    </div>
  );
};

export default GreetingClassApp;
