import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { clearRetailCart } from "../../../store/retailCartSlice";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    // Mock Payment Intent (replace with backend API call in real-world)
    setTimeout(() => {
      setIsProcessing(false);
      dispatch(clearRetailCart());
      navigate("/example/34/confirmation");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Enter Payment Details</h2>

      <div className="border border-gray-300 rounded-md p-3 mb-4">
        <CardElement className="w-full" />
      </div>

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className={`w-full py-3 rounded-md text-white font-semibold transition ${
          isProcessing ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isProcessing ? "Processing..." : "💳 Pay Now"}
      </button>

      {message && <p className="text-red-600 text-center mt-3">{message}</p>}
    </form>
  );
};

export default CheckoutForm;
