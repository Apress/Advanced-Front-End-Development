import React from "react";
import { Link } from "react-router-dom";

const ConfirmationPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 px-6 py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-lg w-full">
        <h1 className="text-2xl font-bold text-green-600 mb-3">🎉 Payment Successful! 🎉</h1>
        <p className="text-lg text-gray-700 mb-5">
          Thank you for your order. Your items will be shipped soon.
        </p>

        <Link
          to="/example/34/"
          className="px-5 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
        >
          🛍️ Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
