import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
        {/* Added mb-6 for spacing */}
        <p className="text-3xl font-semibold text-blue-600 mb-6">
          Count: {this.state.count}
        </p>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-bold shadow-md transition duration-300 hover:bg-blue-700 active:scale-95"
          onClick={this.increment}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
