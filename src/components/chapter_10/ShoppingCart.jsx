import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateItemQuantity } from "../../store/cartSlice";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem = { id: Date.now(), name: "New Product", quantity: 1 };
    dispatch(addItem(newItem));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateItemQuantity({ id, quantity }));
    } else {
      dispatch(removeItem({ id }));
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl bg-white p-10 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT COLUMN - Product List */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-green-600 text-center">Shopping Cart</h1>
          
          <button
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition transform hover:scale-105"
            onClick={handleAddItem}
          >
            Add Item
          </button>

          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                {/* Product Info */}
                <div>
                  <p className="text-lg font-semibold text-gray-900">{item.name}</p>
                  <p className="text-gray-700 text-sm">Quantity: {item.quantity}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    className="bg-red-500 text-white text-xl px-4 py-2 rounded-md hover:bg-red-600 transition"
                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <button
                    className="bg-blue-500 text-white text-xl px-4 py-2 rounded-md hover:bg-blue-600 transition"
                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN - Cart Summary */}
        <div className="p-6 bg-gray-200 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart Summary</h2>
          
          <p className="text-lg font-semibold text-gray-700">
            Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}
          </p>

          <p className="text-lg font-semibold text-gray-700">
            Unique Products: {cart.length}
          </p>

          <button
            className="w-full mt-6 bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition transform hover:scale-105"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
