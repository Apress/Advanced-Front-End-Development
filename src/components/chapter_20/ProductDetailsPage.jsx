import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToRetailCart } from "../../store/retailCartSlice";
import { toast } from "react-toastify";
import products from "./data/product";
import Navbar from "./components/NavBar";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2 className="text-center text-red-500 text-xl">Product not found</h2>;

  const handleAddToCart = () => {
    dispatch(addToRetailCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center px-4 py-6">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-64 object-cover rounded-lg border-2 border-gray-300 mb-4 md:mb-0 md:mr-6"
          />

          {/* Product Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800">{product.name} Details</h1>
            <p className="text-xl text-gray-600 my-2">Price: <strong>${product.price}</strong></p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-4 w-full">
              <button
                onClick={handleAddToCart}
                className="bg-green-500 text-white px-5 py-3 rounded-lg w-full md:w-auto text-lg font-medium transition hover:bg-green-600"
              >
                🛒 Shop
              </button>
              <button onClick={() => navigate(-1)} className="flex items-center text-blue-500 hover:text-blue-700">
                ← Back
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
