import React, { useState } from "react";
import { ShoppingCart } from "lucide-react"; // Import shopping cart icon

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: "Milk", price: 5 },
    { id: 2, name: "Egg", price: 8 },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Product List & Cart Container */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        
        {/* Products Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-600 text-center mb-6">
            Products
          </h2>
          <div className="grid grid-cols-1 gap-6 w-full">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-300 rounded-lg p-4 text-center shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg w-full"
              >
                <h4 className="text-xl font-semibold text-gray-800">{product.name}</h4>
                <p className="text-gray-700 font-medium mb-3">${product.price}</p>
                
                {/* Add to Cart Button with Icon */}
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-600 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-green-700 transition flex items-center justify-center space-x-2 mx-auto"
                >
                  <ShoppingCart size={20} /> {/* Shopping Cart Icon */}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-600 text-center mb-6">
            Your Cart
          </h2>
          {cart.length === 0 ? (
            <p className="text-gray-500 italic text-center">Your cart is empty.</p>
          ) : (
            <ul className="space-y-3">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-3 bg-gray-50 border border-gray-300 rounded-md shadow-sm"
                >
                  <span className="text-gray-800 font-medium">{item.name}</span>
                  <span className="text-gray-700 font-medium">${item.price}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProductList;
