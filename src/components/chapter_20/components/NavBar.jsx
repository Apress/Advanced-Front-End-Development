import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaCreditCard } from "react-icons/fa";

const Navbar = () => {
  const cartItemCount = useSelector((state) =>
    state.retailCart.retailCart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="sticky top-30 left-0 w-full bg-green-600 text-white py-2 shadow-md flex justify-between items-center px-6 z-50">
      {/* Left Section (Logo) */}
      <div className="text-2xl font-semibold">
        <h4>React Online Store</h4>
      </div>

      {/* Right Section (Cart & Checkout) */}
      <div className="flex items-center gap-4">
        {/* Cart Icon & Counter */}
        <Link to="/example/34/cart" className="flex items-center gap-2 text-lg font-medium hover:text-gray-200">
          <FaShoppingCart size={22} /> ({cartItemCount})
        </Link>

        {/* Checkout Icon (Only when items in cart) */}
        {cartItemCount > 0 && (
          <Link to="/example/34/checkout" className="p-2 bg-green-700 hover:bg-green-800 rounded-full transition">
            <FaCreditCard size={22} className="text-white" />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
