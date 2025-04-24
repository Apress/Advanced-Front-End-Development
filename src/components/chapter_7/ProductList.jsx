import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-6 bg-gray-50 border rounded-lg shadow-md flex flex-col items-center"
        >
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <p className="text-gray-700 text-lg font-bold mt-2">${product.price}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
