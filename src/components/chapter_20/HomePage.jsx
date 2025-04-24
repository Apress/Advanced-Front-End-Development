import React from "react";
import products from "./data/product";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/NavBar";

const HomePage = () => {
  return (
    <div className="px-6 py-4 max-w-4xl mx-auto">
      <Navbar />
      <h1 className="text-2xl font-bold text-center mb-6">Products</h1>
      {/* Responsive Grid: Max 2 items per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
