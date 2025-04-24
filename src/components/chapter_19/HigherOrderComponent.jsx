import React, { useEffect } from "react";

/** Higher Order Component (HOC) with Logger */
const withLogger = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    useEffect(() => {
      console.log(
        `Component mounted: ${
          WrappedComponent.displayName || WrappedComponent.name || "Component"
        }`
      );
    }, []);

    return (
      <div className="flex flex-col items-center justify-center bg-gray-50 p-6">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 text-center">
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  };
};

/** Example Component */
const ExampleComponent = () => (
  <h2 className="text-2xl font-bold text-gray-800">Hello, World!</h2>
);

/** Wrap ExampleComponent with withLogger */
const EnhancedExample = withLogger(ExampleComponent);

/** Main App */
const App = () => {
  return <EnhancedExample />;
};

export default App;
