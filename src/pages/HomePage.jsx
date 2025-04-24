import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const examples = [
    { id: 1, title: "Example 1: Greeting Functional Based Component" },
    { id: 2, title: "Example 2: Greeting Class Based Component" },
    { id: 3, title: "Example 3: Counter Functional Based Component" },
    { id: 4, title: "Example 4: Counter Class Based Component" },
    { id: 5, title: "Example 5: Building a Simple User List Application" },
    { id: 6, title: "Example 6: Building a User Dashboard Application" },
    { id: 7, title: "Example 7: Building an Interactive Login Form" },
    { id: 8, title: "Example 8: Nested Lists and Complex Data Structures" },
    { id: 9, title: "Example 9: Recursive Rendering for Deeply Nested Structures" },
    { id: 10, title: "Example 10: Product List with Add-to-Cart Functionality" },
    { id: 11, title: "Example 11: Designing a Shopping Cart Page" },
    { id: 12, title: "Example 12: A Timer Component with Cleanup" },
    { id: 13, title: "Example 13: Building a Shopping Cart with Redux Toolkit" },
    { id: 14, title: "Example 14: Formik integration with Yup for Form Handling and Validation" },
    { id: 15, title: "Example 15: React Hook Form for Email Validation" },
    { id: 16, title: "Example 16: Checkout Form with Form Handling and Validation" },
    { id: 17, title: "Example 17: Simple Blog navigation with React Router" },
    { id: 18, title: "Example 18: Input Sanitization Using DOMPurify" },
    { id: 19, title: "Example 19: Escaping Output in React" },
    { id: 20, title: "Example 20: Implementing Role-Based Access Control" },
    { id: 21, title: "Example 21: Fully Accessible React Form with ARIA, Focus Management & Keyboard Navigation" },
    { id: 22, title: "Example 22: Internationalization in React" },
    { id: 23, title: "Example 23: Multilingual React Component" },
    { id: 24, title: "Example 24: Fetching Data with fetch" },
    { id: 25, title: "Example 25: Using Axios for Fetching Data" },
    { id: 26, title: "Example 26: GraphQL Integration" },
    { id: 27, title: "Example 27: Payment Gateway Integration Using Stripe" },
    { id: 28, title: "Example 28: Integrating Firebase" },
    { id: 29, title: "Example 29: Compound Component Illustration" },
    { id: 30, title: "Example 30: Controlled Uncontrolled Components" },
    { id: 31, title: "Example 31: Custom Hook Fetching Data" },
    { id: 32, title: "Example 32: Higher Order Component (HOC)" },
    { id: 33, title: "Example 33: Render Prop Illustration" },
    { id: 34, title: "Example 34: Building a Retail Store App" },
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-green-600 text-white shadow-md p-4 z-50">
      <h1 className="text-2xl font-bold text-black">Advanced Frontend Development</h1>
      <h6 className="mt-1">
          Explore React examples from the book. Click on any example to view its details.
        </h6>

      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen p-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
          {examples.map((example) => (
            <li
              key={example.id}
              className="bg-white border border-gray-300 rounded-lg p-4 text-center shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Link
                to={`/example/${example.id}`}
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                {example.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default HomePage;
