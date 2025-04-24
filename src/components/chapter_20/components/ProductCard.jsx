import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-64 flex flex-col items-center text-center transform transition duration-200 hover:scale-105 hover:shadow-lg">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-44 object-cover rounded-md mb-3"
      />

      {/* Product Name */}
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

      {/* Price */}
      <p className="text-gray-600 text-base mb-3">${product.price}</p>

      {/* View Details Button */}
      <Link to={`product/${product.id}`} className="w-full">
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium transition hover:bg-blue-600">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
