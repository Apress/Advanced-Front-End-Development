import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromRetailCart, clearRetailCart } from "../../store/retailCartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cart = useSelector((state) => state.retailCart.retailCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeFromRetailCart({ id }));
  };

  const handleContinueShopping = () => {
    navigate("/example/34/");  // Redirect back to product page
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col items-center bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <p className="text-gray-600 text-lg">Your cart is empty. Start shopping now!</p>
          <button
            className="mt-4 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
            onClick={handleContinueShopping}
          >
            🛍️ Continue Shopping
          </button>
        </div>
      ) : (
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
          {/* Cart Items List */}
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md border" />
                
                {/* Added fixed width here */}
                <div className="w-64 ml-4">
                  <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
                  <p className="text-gray-600">Qty: {item.quantity}</p>
                  <p className="text-gray-800 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                {/* Remove button no longer stretches */}
                <button
                  className="px-3 py-2 w-24 bg-red-500 text-white rounded-md hover:bg-red-600 transition text-sm font-medium"
                  onClick={() => handleRemove(item.id)}
                >
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <h2 className="text-2xl font-bold text-gray-900 mt-6 text-center">Total: ${totalPrice.toFixed(2)}</h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
            <button
              className="px-6 py-3 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition w-full sm:w-auto"
              onClick={() => dispatch(clearRetailCart())}
            >
              🗑️ Clear Cart
            </button>
            <button
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition w-full sm:w-auto"
              onClick={handleContinueShopping}
            >
              🛍️ Continue Shopping
            </button>
            <button
              className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition w-full sm:w-auto"
              onClick={() => navigate("/example/34/checkout")}
            >
              💳 Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
