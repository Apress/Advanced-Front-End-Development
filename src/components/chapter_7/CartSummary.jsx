import React from "react";

const CartSummary = ({ total }) => {
  return (
    <div className="mt-6 pt-4 border-t border-gray-300 text-right">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Cart Summary</h2>
      <p className="text-lg font-bold text-green-600">Total Price: ${total.toFixed(2)}</p>
    </div>
  );
};

export default CartSummary;
