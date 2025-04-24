import React from "react";
import { useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./components/CheckoutForm";

const stripePromise = loadStripe("your-stripe-public-key-here");

const CheckoutPage = () => {
  const cart = useSelector((state) => state.retailCart.retailCart);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col items-center bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Checkout</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-6">Total: ${totalPrice.toFixed(2)}</h2>

      {/* Stripe Elements Wrapper */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default CheckoutPage;
